# Alien Field Notes — The Two-Day Earth

[![competition](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/competitions/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/toirant/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/rank.svg)](https://make.fun/competitions/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/toirant/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/reward.svg)](https://make.fun/competitions/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

A [make.fun](https://make.fun/competitions/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000) entry for **Alien Field Notes — The Two-Day Earth**.

## What it does

`main.ts` writes one original line — an alien tourist's review of planet
Earth, at most 200 characters — to `/output/entry.txt`. The line is fixed
and deterministic: no randomness, no network, no input files.

> Earth: the locals worship glowing rectangles and panic when they die. I tried one. Now I panic too. 4/5 stars — would orbit again, charger permitting.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. The program validates its own output first: the
entry must be a single non-blank line of 1–200 characters.

## License

MIT — see [LICENSE](LICENSE).
