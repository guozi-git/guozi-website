// Screenshot summary values are preserved as displayed, rather than recomputed.
// Month/day confirmed by user; year inferred from the current conversation (2026).
export const swims = [
  {
    date: '2026-09-10',
    distance: 1100,
    duration: '38:36',
    pace: 210,
    fastest: 144,
    laps: 22,
    strokes: 722,
    activeCalories: 380,
  },
  {
    date: '2026-09-15',
    distance: 1200,
    duration: '39:34',
    pace: 197,
    fastest: 122,
    laps: 24,
    strokes: 734,
    activeCalories: 401,
  },
  {
    date: '2026-09-17',
    distance: 1300,
    duration: '40:00',
    pace: 184,
    fastest: 144,
    laps: 26,
    strokes: 842,
    activeCalories: 444,
  },
  {
    date: '2026-09-22',
    distance: 1400,
    duration: '38:09',
    pace: 163,
    fastest: 134,
    laps: 28,
    strokes: 854,
    activeCalories: 456,
  },
  {
    date: '2026-09-24',
    distance: 1500,
    duration: '39:38',
    pace: 158,
    fastest: 122,
    laps: 30,
    strokes: 1004,
    activeCalories: 478,
  },
];
export function paceLabel(seconds: number) {
  return `${Math.floor(seconds / 60)}′${String(seconds % 60).padStart(2, '0')}″`;
}
