// SPDX-License-Identifier: MIT
// make.fun entry — Fix Human Sleep: Funniest Patch Note
// Program (harness program/v1): writes the single patch-note line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Deprecated: the 5 a.m. wake-up call from your bladder.";

// Gate: /output/entry.txt must be UTF-8 text, 1–160 characters, one line.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-160 gate`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars): ${ENTRY}`);
