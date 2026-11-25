// One-Line Office Jokes — make.fun entry
// u-markk-st-one-line-office-jokes-a51f2bcc
//
// Judge brief (most important first):
//   1. A single-line joke about office life, not a story/slogan/list.
//   2. Turns on a real detail of office life (meetings, email, printer,
//      coffee machine), not generic talk about work.
//   3. Lands its laugh in the last few words.
//   4. Clear on one reading, no setup that needs explaining.
//   5. Fresh wording, not a joke already going round the internet.
//
// Pass 1 — candidates (all single-line, all under 199 chars):
//
//   A. "I replied-all 'thanks!' to the whole company once, and now IT has
//      a filter named after me."
//      Detail: reply-all + IT filter. Punchline: "a filter named after me".
//      Risk: mild laugh, setup is a confession rather than a twist.
//
//   B. "My performance review says I need to be more visible, so now I
//      reply-all to everything, including the fire drill."
//      Detail: performance review + reply-all. Punchline: "including the
//      fire drill" — literal take on "be more visible", escalated to an
//      absurd non-email event. Strong final beat.
//
//   C. "The office thermostat is set by whoever gets there first, which is
//      why I now arrive at seven and freeze alone."
//      Detail: thermostat war. Punchline: "freeze alone". Warm, human,
//      but the laugh is wry recognition rather than a twist.
//
//   D. "The coffee machine broke at nine, and by ten three people had a
//      spreadsheet ranking replacements and zero work had been done."
//      Detail: coffee machine + spreadsheet. Punchline: "zero work had
//      been done". Good observation, but the beat is more sigh than laugh.
//
//   E. "Our Monday meeting starts at nine, ends at ten, and the actual
//      decision gets made in the elevator at ten-oh-one."
//      Detail: Monday meeting. Punchline: "in the elevator at ten-oh-one".
//      Sharp, but "meeting that decides nothing" is a well-worn angle.
//
//   F. "My out-of-office reply says I'll respond when I'm back, which is
//      the most honest thing I've ever written at work."
//      Detail: out-of-office reply. Punchline: "most honest thing I've
//      ever written at work". Clean, but the twist is gentle.
//
// Pass 1 pick: B — the strongest final beat (an absurd escalation in the
// last three words) on a concrete office detail, one clear reading.
//
// Pass 2 — evaluation of B against the judge criteria, in order:
//   1. Single-line office joke: yes. One sentence, office life throughout.
//      No story, slogan or list. Ties with the other candidates.
//   2. Real detail: two concrete ones — the performance review and
//      reply-all. Beats C/E/F (one detail each), ties A/D.
//   3. Laugh in the last few words: "including the fire drill" lands the
//      turn in the final three words — literal compliance with "be more
//      visible" escalated from email to a physical emergency drill. This
//      is the biggest, most surprising final beat of all six candidates:
//      A ends on a quiet clever beat ("a filter named after me"), D and C
//      end on wry recognition, E on a familiar observation, F on a gentle
//      twist. B wins criterion 3 by the widest margin.
//   4. Clear on one reading: "be more visible" -> reply-all to everything
//      -> the fire drill. No setup needs explaining. Ties A.
//   5. Fresh wording: "reply-all to everything, including the fire drill"
//      is not a joke going round the internet; the fire-drill escalation
//      is original. Ties A, beats E (elevator-decision is a known trope).
// Verdict: B wins on criterion 3, the first criterion where the
// candidates differ by a wide margin. Tightening checked: dropping
// "performance" would blur the office detail ("review" alone is vague),
// and rewording "says I need to be" would lose the human voice. B stays
// exactly as written: 113 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My performance review says I need to be more visible, so now I reply-all to everything, including the fire drill.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
