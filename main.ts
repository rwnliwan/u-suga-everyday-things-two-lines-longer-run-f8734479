import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Final entry text — exactly two lines, 268 characters total.
// Line 1 explains a toaster to a 10-year-old through one vivid analogy.
// Line 2 says what the analogy maps and what it leaves out.
const ENTRY =
  "A toaster is a tiny volcano on your kitchen counter: it swallows your bread whole, then erupts and throws it back up brown and crunchy.\n" +
  "It maps the heat and the pop, but leaves out that a real volcano never gives anything back — and never asks if you wanted it darker.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
