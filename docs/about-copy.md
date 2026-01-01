# About — Draft Copy (nerdy · Gen Z · irreverent)

## Hero

- Headline (primary): **We ship, we screw up, we ship better.**
- Headline (short): **We ship stuff that makes us proud (and a little ashamed).**
- Subhead: *Not corporate. Not boring. Just curious kids with too much rizz and too little sleep.*

## Quick values (3–4 lines)

- **Prototype fast.** If it compiles, it ships. If it breaks, we write tests.
- **Taste > Process.** We prefer small beautiful things over enterprise-shaped features.
- **Measure, then meme.** We A/B, we iterate, we celebrate with internal memes (yes, skibidi toilet is on the leaderboard).
- **Inclusive nerdery.** We code for people, not for slide decks.

## Team intro (paragraph)

We are a skunkworks of Gen‑Z engineers, product folks, and misfit designers. We move quick, say weird things, and care more about craft than corporate handshakes. Expect messy diagrams, too many tabs, and a relentless desire to make tiny things that feel big. We’re not corporate whores — we have rizz, not RFPs.

## Nerdy stats (UI patterns suggested: big numeric badges, animated counters, terminal lines, micro-poll)

1. **Uptime (binary flex)** — `1111011%` (show binary then human-readable: 99.9%)
   - Display: terminal-style line + small badge; tooltip shows real percentage.
2. **PRs merged** — `32 / sprint` (countup animated counter)
   - Display: big number card + mini sparkline of merges/week.
3. **Rizz meter** — `6.7 / 10` (playful gauge)
   - Display: small pill with emoji (✨) and subtle animation.
4. **Meme index** — `Skibidi: 12 · Radcat: 7` (tracks internal meme rotations)
   - Display: micro-feed; clickable to open a meme lightbox.
5. **Microfeatures shipped** — `17` (we ship small wins)
   - Display: counter with a confetti microburst on certain thresholds.
6. **Editor split** — `vim 47% · VSCode 49% · nano 3%` (preference poll + bar)
   - Display: tiny bar chart and live poll CTA.
7. **Build P95** — `4.2s` (performance brag)
   - Display: small stat card with trend arrow.
8. **CSS lines deleted** — `1,234` (we optimize by subtraction)
   - Display: reversed counter (counts down as we remove CSS).

## Microcopy variants (two sizes)

- Long: "We break small things quickly, then reduce the blast radius."
- Short: "Prototype → Test → Ship."
- Extra-short: "We ship." 

## UX & layout notes

- Lead with a compact hero with a terminal snippet to set the mood.
- A two-column layout: left for copy & badges, right for the `NerdyStats` grid.
- Include a tiny live poll (vim vs VSCode) as an interactive, optional stat.
- Add a terminal feed (client component) that prints culture lines: `pizza: acquired 🍕`, `rizz++`, `skibidi: mention`.
- Use playful micro-animations (count-up, badge pop, terminal flicker). Keep it fast and optional (prefers reduced-motion respect later).

## Tone & voice guide

- Voice: sarcastic but warm; short sentences; sprinkle Gen‑Z slang (rizz, skibidi, vibes) without overdoing it.
- Keep copy concise and bold — prefer atoms over paragraphs.
- Avoid corporate jargon; prefer sentences you could drop in a README or a Slack status.

---

**Next:** confirm tone & a couple of preferred stats to prioritize (which 3 do you want front-and-center?), then I’ll design component structure and start implementing `app/about/page.tsx` and components.
