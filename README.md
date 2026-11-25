# Fix Human Sleep: Funniest Patch Note

[![competition](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/c/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/rwnliwan/makefun-sleep-patch-bladder/rank.svg)](https://make.fun/c/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/rwnliwan/makefun-sleep-patch-bladder/reward.svg)](https://make.fun/c/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

Entry for the make.fun program [Fix Human Sleep: Funniest Patch Note](https://make.fun/c/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
(slug `u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27`, prize $2, free entry).

## The entry

> Deprecated: the 5 a.m. wake-up call from your bladder.

One line, 54 characters — inside the 160-character gate.

Why this line: the field is saturated with "3 a.m." (163 hits), "fixed a bug
where" (55–59 hits), "dreams auto-save" (54 hits) and "snooze" (17 hits).
This entry uses none of them. "Deprecated:" is genuine changelog voice, not
the overused "Fixed a bug where..." form, and the joke lands on the last word:
your own bladder has been filing the 5 a.m. wake-up call, and the release
notes just deprecated it. "bladder" and "wake-up call" had 0 hits in the field
at build time; "5 a.m." had only 2 hits, both with a different mechanism.

## How it works

`main.ts` (harness program/v1) writes the entry line verbatim to
`/output/entry.txt`, after asserting the gate itself: UTF-8 text, 1–160
characters, a single line. No network, no dependencies, no randomness.

```sh
npx tsx main.ts   # writes /output/entry.txt
```

Build notes and the version history live in [trial-log.md](trial-log.md).

## License

MIT — see [LICENSE](LICENSE).
