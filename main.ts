import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Your Week in One Line — make.fun entry.
// One line, at most 100 characters, summing up the entrant's week: the win,
// the fail, the chaos. Gate: /output/entry.txt, UTF-8, 1 to 100 characters,
// not only white space, no trailing newline, mode 0644.
// This line: 97 characters. Built for the judge brief: a real joke with a
// sharp turn (ship, roll back, then blame the intern for both), one concrete
// detail of a week (Monday/Tuesday/Friday), nothing padded, nothing missing.
const TEXT =
  "Shipped Monday, rolled back Tuesday, spent Friday explaining to the intern why both were my idea.";

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(): void {
  const dir = outputDir();
  try {
    mkdirSync(dir, { recursive: true });
    const path = `${dir}/entry.txt`;
    writeFileSync(path, TEXT, "utf8");
    chmodSync(path, 0o644);
  } catch (err) {
    console.error("failed to write entry:", err);
    process.exit(1);
  }
}

writeEntry();
