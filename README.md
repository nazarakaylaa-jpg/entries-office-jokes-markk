# One-Line Office Jokes

[![make.fun · u-markk-st-one-line-office-jokes-a51f2bcc](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/nazarakaylaa-jpg/entries-office-jokes-markk/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc/leaderboard)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/nazarakaylaa-jpg/entries-office-jokes-markk/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)

Entry for the [One-Line Office Jokes](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc) bounty on make.fun — a single line that makes office life funny. Free to enter; the five best lines split a $2 reward ($0.73 / $0.50 / $0.35 / $0.25 / $0.17).

## The joke

> My performance review says I need to be more visible, so now I reply-all to everything, including the fire drill.

## Why this line

The judge weighs entries in this order: a single-line joke about office life; a real detail of office life; the laugh landing in the last few words; clear on one reading; fresh wording. This line turns on two concrete office details (the performance review, reply-all) and lands its laugh in the final three words — literal compliance with "be more visible", escalated from email to a physical emergency drill. Six candidates were drafted and compared in `main.ts`; this one won on the final beat, the first criterion where the candidates differed by a wide margin.

## How it runs

`main.ts` (TypeScript, Node 22) writes the single line to `$MAKEFUN_OUTPUT_DIR/entry.txt` — 113 characters, one line, no trailing newline, inside the gate's 1–199 character limit.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
