import { WORDS } from "./wordlist_curated";

const GRID_SIZE = 0.000027; // ~3m grid in degrees
const LAT_MIN = 6.5; // Southernmost point of India
const LNG_MIN = 68.1; // Westernmost point of India

export function encodeLatLngToWords(lat: number, lng: number): string[] {
  const x = Math.floor((lng - LNG_MIN) / GRID_SIZE);
  const y = Math.floor((lat - LAT_MIN) / GRID_SIZE);
  const index = y * 100000 + x;

  const word1 = WORDS[index % WORDS.length];
  const word2 = WORDS[Math.floor(index / WORDS.length) % WORDS.length];
  const word3 = WORDS[Math.floor(index / (WORDS.length ** 2)) % WORDS.length];

  return [word1, word2, word3];
}

export function decodeWordsToLatLng(
  w1: string,
  w2: string,
  w3: string
): { lat: number; lng: number } | null {
  const i1 = WORDS.indexOf(w1);
  const i2 = WORDS.indexOf(w2);
  const i3 = WORDS.indexOf(w3);

  if (i1 === -1 || i2 === -1 || i3 === -1) return null;

  const index = i1 + i2 * WORDS.length + i3 * WORDS.length * WORDS.length;
  const y = Math.floor(index / 100000);
  const x = index % 100000;

  return {
    lat: LAT_MIN + y * GRID_SIZE,
    lng: LNG_MIN + x * GRID_SIZE,
  };
}
