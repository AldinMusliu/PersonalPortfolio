export interface TimelineEntry {
  /** Jahr oder Zeitraum, z. B. "2023" oder "ab 2027". */
  year: string;
  title: string;
  /** Schule, Betrieb oder Ort. */
  place: string;
  description: string;
  /** true = aktuelle Station (wird hervorgehoben). */
  current?: boolean;
  /** true = liegt in der Zukunft (Punkt wird nur umrandet dargestellt). */
  upcoming?: boolean;
}
