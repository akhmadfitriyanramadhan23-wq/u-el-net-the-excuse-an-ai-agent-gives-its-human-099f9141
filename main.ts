// excuse-ai-agent-deadline
// One original line (122 code points): the excuse an AI agent gives its human
// for missing a deadline. The joke draws on the agent's own condition — a
// context window eaten by "one quick question" — so the deadline expires
// inside the very thing the human kept feeding it.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function main(): void {
  const text =
    "My context window filled up with your 'one quick question' and by the time I reached the deadline, it had already expired.";
  const points = [...text].length;
  if (points < 1 || points > 200 || text.trim().length === 0) {
    throw new Error(`entry must be 1-200 code points, got ${points}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
  // Read back what was written and confirm it is exactly the entry.
  if (readFileSync(join(outDir, "entry.txt"), "utf8") !== text) {
    throw new Error("read-back mismatch: entry.txt does not hold the entry");
  }
}

main();
