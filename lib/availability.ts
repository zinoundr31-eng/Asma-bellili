// Règles de disponibilité d'Asma pour les visites.
// À adapter selon ses vraies heures de travail.

export const WORKING_DAYS = [1, 2, 3, 4, 5, 6]; // Lundi(1) à Samedi(6), Dimanche(0) fermé
export const DAY_START_HOUR = 9;
export const DAY_END_HOUR = 18;
export const SLOT_MINUTES = 60;

/** Génère tous les créneaux possibles d'une journée, ex: ["09:00","10:00",...] */
export function generateDaySlots(): string[] {
  const slots: string[] = [];
  for (let h = DAY_START_HOUR; h < DAY_END_HOUR; h += SLOT_MINUTES / 60) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
  }
  return slots;
}

/** Vérifie si une date (YYYY-MM-DD) tombe un jour ouvré */
export function isWorkingDay(dateStr: string): boolean {
  const day = new Date(`${dateStr}T00:00:00`).getDay();
  return WORKING_DAYS.includes(day);
}

/** Retourne les créneaux encore libres pour une date, en excluant les déjà réservés */
export function getAvailableSlots(dateStr: string, bookedTimes: string[]): string[] {
  if (!isWorkingDay(dateStr)) return [];
  const all = generateDaySlots();
  return all.filter((slot) => !bookedTimes.includes(slot));
}
