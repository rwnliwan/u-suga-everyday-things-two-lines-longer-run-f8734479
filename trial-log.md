# Trial log — Everyday Things, Two Lines, Longer Run

Competition: `u-suga-everyday-things-two-lines-longer-run-f8734479`
Gate: 1–400 characters, exactly 2 lines. Prize: $2 (1st place).
Research: `research-1.md` — field of 416 submissions, 293 unique non-empty
titles; saturated families avoided (toaster = sunbed/tanning, elevator/lift,
tiny sun, campfire, jack-in-the-box; queue = human train, caterpillar;
rain = sponge wringing; traffic jam = river, parking lot).

## Candidates

| # | Thing | Analogy | Chars | Dup-check | Verdict |
|---|-------|---------|-------|-----------|---------|
| 1 | toaster | tiny volcano | 268 | max 0.43 (toaster elevator), no exact match — PASS | **CHOSEN** |
| 2 | queue | conga line that forgot the music | 278 | conga 0-hit; mechanism shares a family with train/caterpillar | backup |

Candidate 1 won: volcano is a 0-hit word in the field, the heat + pop
mapping is concrete for a 10-year-old, and line 2 is honest and specific
(a real volcano never gives anything back, and never asks if you wanted it
darker). Candidate 2 kept as backup only.

## Final text (exact)

Line 1: A toaster is a tiny volcano on your kitchen counter: it swallows your bread whole, then erupts and throws it back up brown and crunchy.
Line 2: It maps the heat and the pop, but leaves out that a real volcano never gives anything back — and never asks if you wanted it darker.

## Trials

| Trial | Command | Result |
|-------|---------|--------|
| T1 | `node main.ts` with `ENTRY_OUTPUT` to a temp file, then `wc -c` + line count | Output exactly 268 characters, exactly 2 lines, no trailing newline — PASS |
| T2 | `node <kit>/cli/makefun.mjs bundle ...` (bundle-1-v1.tar.gz) | see bundle step in report |
| T3 | `node <kit>/cli/makefun.mjs check --commit <SHA> --transcripts bundle-1-v1.tar.gz` | see check step in report |

## Status

- Final text: frozen (candidate 1, 268 chars, 2 lines).
- Repo: main.ts + README.md + LICENSE + trial-log.md + .makefun/owner.json.
- Submit: coordinator's job — NOT submitted by this builder.
