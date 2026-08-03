import { google } from "googleapis";

const SHEET_NAME = "Rendez-vous";
// Colonnes attendues dans le sheet (ligne 1 = en-têtes) :
// A: Nom client | B: Téléphone | C: Bien concerné | D: Date RDV (YYYY-MM-DD)
// E: Heure RDV | F: Statut | G: Notes

function getAuth() {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!email || !key) {
    throw new Error(
      "Variables GOOGLE_SHEETS_CLIENT_EMAIL / GOOGLE_SHEETS_PRIVATE_KEY manquantes"
    );
  }
  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheets() {
  return google.sheets({ version: "v4", auth: getAuth() });
}

/** Retourne les heures déjà réservées pour une date donnée (hors "Annulé") */
export async function getBookedTimesForDate(dateStr: string): Promise<string[]> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) throw new Error("GOOGLE_SHEET_ID manquant");

  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${SHEET_NAME}!A2:G`,
  });

  const rows = res.data.values ?? [];
  return rows
    .filter((r) => r[3] === dateStr && r[5] !== "Annulé")
    .map((r) => r[4]);
}

/** Ajoute une nouvelle ligne de rendez-vous dans le sheet */
export async function appendBooking(booking: {
  name: string;
  phone: string;
  property: string;
  date: string;
  time: string;
  notes?: string;
}): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) throw new Error("GOOGLE_SHEET_ID manquant");

  const sheets = getSheets();
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${SHEET_NAME}!A2:G`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        booking.name,
        booking.phone,
        booking.property,
        booking.date,
        booking.time,
        "Confirmé",
        booking.notes ?? "",
      ]],
    },
  });
      }
