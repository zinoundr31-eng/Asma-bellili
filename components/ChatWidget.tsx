"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Bonjour, je suis l'assistant d'Asma. Une question sur ses services, une zone, ou vous préférez qu'elle vous recontacte directement ?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user", content: text } as Msg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next
            .filter((m) => m !== WELCOME)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages((cur) => [
        ...cur,
        { role: "assistant", content: data.reply ?? "Une erreur est survenue, réessayez." },
      ]);
    } catch {
      setMessages((cur) => [
        ...cur,
        { role: "assistant", content: "Connexion impossible pour le moment. Réessayez dans un instant." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Ouvrir le chat"
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-warmwhite shadow-lg transition-transform hover:scale-105 md:bottom-8 md:right-8"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[60] flex h-[70vh] max-h-[520px] w-[90vw] max-w-[380px] flex-col overflow-hidden rounded-lg border border-charcoal/10 bg-warmwhite shadow-2xl md:bottom-28 md:right-8">
          <div className="flex items-center justify-between border-b border-charcoal/10 bg-charcoal px-5 py-4">
            <div>
              <p className="font-display text-base text-warmwhite">Asma Bellili</p>
              <p className="font-body text-[11px] uppercase tracking-widest2 text-gold">
                Assistant en ligne
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-4 py-2.5 font-body text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-charcoal text-warmwhite"
                    : "bg-sand text-ink"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[85%] rounded-lg bg-sand px-4 py-2.5 font-body text-sm text-ink/50">
                En train d&apos;écrire…
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-charcoal/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Écrivez votre message…"
              className="flex-1 bg-transparent px-2 py-2 font-body text-sm text-charcoal outline-none placeholder:text-ink/40"
            />
            <button
              onClick={send}
              disabled={loading}
              aria-label="Envoyer"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal text-warmwhite transition-opacity disabled:opacity-40"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
                          }
