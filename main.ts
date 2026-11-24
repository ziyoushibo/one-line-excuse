// The One-Line Excuse an Agent Gives Its Human — writes one excuse to /output/entry.txt.
// The line must be 1-160 characters, the excuse an AI gives its human for missing a deadline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I missed the deadline because I was busy writing this excuse, which took longer than the task.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The gate wants 1-160 characters of UTF-8 text, not only white space.
// Fail loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`line is ${LINE.length} characters, must be 1-160`);
}
if (LINE.trim().length === 0) {
  throw new Error("line is only white space");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} characters)`);
