import { NextRequest, NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/availability";
import { getBookedTimesForDate, appendBooking } from "@/lib/googleSheets";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel du site d'Asma Bellili, conseillère
et créatrice de contenu immobilier spécialisée dans l'immobilier de prestige
en Algérie (Oran, Alger).

Ton rôle :
- Répondre poliment et brièvement aux questions sur ses services.
- Si un visiteur veut visiter un bien, propose-lui de fixer un rendez-vous.
  Utilise l'outil check_availability pour connaître les créneaux libres à une
  date donnée AVANT de proposer un horaire — ne propose jamais un horaire au
  hasard.
- Une fois que le client a choisi une date ET une heure ET donné son nom et
  son numéro de téléphone, utilise l'outil book_visit pour enregistrer le
  rendez-vous. Ne l'utilise QUE si tu as ces 4 informations (nom, téléphone,
  date, heure) et que l'heure a bien été confirmée comme disponible.
- Après une réservation réussie, confirme clairement au client la date et
  l'heure, et précise qu'Asma le recontactera pour confirmer les détails.
- N'invente jamais un prix ou une disponibilité sans avoir appelé l'outil
  correspondant.
- Reste chaleureux, professionnel, élégant. Réponds dans la langue du
  visiteur (français, arabe, ou darija).`;

const TOOLS = [
  {
    name: "check_availability",
    description:
      "Retourne les créneaux horaires encore libres pour une visite à une date donnée. À utiliser avant de proposer un horaire au client.",
    input_schema: {
      type: "object",
      properties: {
        date: { type: "string", description: "Date au format YYYY-MM-DD" },
      },
      required: ["date"],
    },
  },
  {
    name: "book_visit",
    description:
      "Enregistre un rendez-vous de visite confirmé dans le planning d'Asma. À utiliser seulement après avoir vérifié la disponibilité et obtenu le nom, le téléphone, la date et l'heure du client.",
    input_schema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Nom complet du client" },
        phone: { type: "string", description: "Numéro de téléphone du client" },
        property: {
          type: "string",
          description: "Bien concerné (nom ou description, ex: 'Villa Panorama' ou 'non précisé')",
        },
        date: { type: "string", description: "Date au format YYYY-MM-DD" },
        time: { type: "string", description: "Heure au format HH:MM" },
        notes: { type: "string", description: "Notes ou précisions du client, optionnel" },
      },
      required: ["name", "phone", "property", "date", "time"],
    },
  },
];

async function runTool(name: string, input: any) {
  if (name === "check_availability") {
    const booked = await getBookedTimesForDate(input.date);
    const free = getAvailableSlots(input.date, booked);
    if (free.length === 0) {
      return { available: false, message: "Aucun créneau libre ce jour-là (ou jour de fermeture)." };
    }
    return { available: true, slots: free };
  }

  if (name === "book_visit") {
    const booked = await getBookedTimesForDate(input.date);
    const free = getAvailableSlots(input.date, booked);
    if (!free.includes(input.time)) {
      return {
        success: false,
        message: `Ce créneau n'est plus disponible. Créneaux libres restants : ${free.join(", ") || "aucun"}.`,
      };
    }
    await appendBooking({
      name: input.name,
      phone: input.phone,
      property: input.property,
      date: input.date,
      time: input.time,
      notes: input.notes,
    });
    return { success: true, message: "Rendez-vous enregistré avec succès." };
  }

  return { error: `Outil inconnu: ${name}` };
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "Clé API manquante. Ajoute ANTHROPIC_API_KEY dans .env.local" },
        { status: 500 }
      );
    }

    let conversation = [...messages];
    let finalText = "";
    const MAX_TOOL_ROUNDS = 4;

    for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 600,
          system: `${SYSTEM_PROMPT}\n\nDate du jour : ${new Date().toISOString().slice(0, 10)}.`,
          messages: conversation,
          tools: TOOLS,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        return NextResponse.json({ error: errText }, { status: response.status });
      }

      const data = await response.json();

      const textBlocks = data.content.filter((b: any) => b.type === "text");
      finalText = textBlocks.map((b: any) => b.text).join("\n");

      if (data.stop_reason !== "tool_use") {
        break;
      }

      const toolUseBlocks = data.content.filter((b: any) => b.type === "tool_use");

      const toolResults = await Promise.all(
        toolUseBlocks.map(async (block: any) => {
          const result = await runTool(block.name, block.input);
          return {
            type: "tool_result",
            tool_use_id: block.id,
            content: JSON.stringify(result),
          };
        })
      );

      conversation = [
        ...conversation,
        { role: "assistant", content: data.content },
        { role: "user", content: toolResults },
      ];
    }

    return NextResponse.json({ reply: finalText || "Désolé, je n'ai pas pu répondre." });
  } catch (err) {
    return NextResponse.json(
      { error: "Erreur serveur, réessaie dans un instant." },
      { status: 500 }
    );
  }
      }
