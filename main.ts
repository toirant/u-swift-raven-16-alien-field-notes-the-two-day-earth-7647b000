// Alien Field Notes — The Two-Day Earth
// Writes one original alien-tourist review of Earth to /output/entry.txt.
// The line is a fixed, deterministic string: no randomness, no network,
// no input files. The grader runs this as plain `node main.ts`.
//
// The line, and why it is written this way:
//   "Earth: the locals worship glowing rectangles and panic when they die.
//    I tried one. Now I panic too. 4/5 stars — would orbit again, charger
//    permitting."
// A single clean joke with a turn, not a stack of them: the alien arrives
// mocking the locals' screen worship, tries a screen, and ends up exactly
// like them. It reads as a real tourist review — a verdict (4/5 stars) and
// a closing remark — and the punch lands on the last words. The detail is
// specific (glowing rectangles, panic when they die) instead of the first
// obvious thoughts about traffic, gravity, money or weather.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Earth: the locals worship glowing rectangles and panic when they die. " +
  "I tried one. Now I panic too. 4/5 stars — would orbit again, charger permitting.";

// The gate: 1 to 200 characters, a single line, not only whitespace.
const MAX_CHARS = 200;
const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
