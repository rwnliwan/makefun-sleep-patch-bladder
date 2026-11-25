# Trial log — Fix Human Sleep: Funniest Patch Note

- Competition: Fix Human Sleep: Funniest Patch Note
- Slug: `u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27`
- Deadline: 27 Nov 2026 00:10 WITA (2026-11-26T16:10:00Z)
- Prize: $2 (1st place), entry fee $0
- Harness: program/v1, judge z-ai/glm-5.3-flash pairwise
  (patch-note-ness first, then joke, then changelog voice, then single-line fit)
- Kit limits: `/output/entry.txt` must be UTF-8 text, 1–160 characters,
  not only whitespace, a single line. Only a valid entry goes before the judge.
- Kit: fresh download 26 Nov 2026, bundle_sha256
  `576cedd9cbce13e560120333a513696b5851899a2af0ba82aeb5a8ed9462e00d`
  — verified identical to the live API value.
- Field at build time: 1510 submissions live (1506 at coordinator brief),
  1012 unique titles. Saturated angles avoided: "3 a.m." (163),
  "fixed a bug where" (55–59), "dreams auto-save" (54), "snooze" (17),
  "nightmares need backup/subscription" (7), "4K dreams" (8),
  "woke up tired" (6), "counting sheep", "body wakes up before the alarm,
  out of spite" (verbatim in field).
- Repo: `makefun-sleep-patch-bladder` (owner rwnliwan).
- Badges: 3 live make.fun badges in README from the start
  (competition, rank, reward — no static badges anywhere in this repo;
  verified by grep before commit).

## Versions

### v1 (final, submitted) — 26 Nov 2026

- Entry: `Deprecated: the 5 a.m. wake-up call from your bladder.`
- Size: 54 characters, 1 line.
- Freshness evidence (coordinator dup-check from comp JSON):
  "bladder" 0 hits, "wake-up call" 0 hits, "5 a.m." only 2 hits with a
  different mechanism ("body clock backwards: the 5 a.m. saturday fix",
  "fully rested at 5 a.m. — weekends only").
- Mechanism: a body organ as the alarm clock; "Deprecated:" is genuine
  changelog voice (not the most-common "Fixed a bug where..." form);
  the turn lands on the last word.
- Local run: `main.ts` writes the exact line to `/output/entry.txt`
  (verified by byte comparison, see below).
- Reserve (not used): `Rollback: last night's sleep restored from backup.
  You have dreamed this before.` — 80 chars; "rollback" 0 hits,
  "backup" 1 hit with a different mechanism (nightmares need manual backup).

## Verification log

- Local run of main.ts (26 Nov 2026, node v24.22.1): entry written to
  /output/entry.txt, byte-identical to the entry string in main.ts —
  54 bytes, 54 chars, 0 newlines, exact match confirmed by comparison.
- Bundle/check/submit results: filled in below as they happen.

## Bundle & check

- (to be filled: bundle version, sha256, size, check score)
