---
title: Tsumiru vs Mihon vs Suwayomi WebUI
description: "How Tsumiru, Mihon/Komikku, and Suwayomi WebUI compare: where sources run, multi-device sync, offline reading, platforms, and setup effort."
---

# Tsumiru vs Mihon vs Suwayomi WebUI

These three overlap a lot. Which one fits comes down to one question: do you want your library on your phone, or on a server?

A note on names: **Komikku** is a Mihon fork with extra features (a richer library organizer, among other things). For this comparison they behave the same way, so they're treated as one column. **Suwayomi WebUI** is the web interface that ships with Suwayomi-Server itself.

## At a glance

| | Tsumiru | Mihon / Komikku | Suwayomi WebUI |
|---|---|---|---|
| **Where sources run** | On your Suwayomi server | On your phone | On your Suwayomi server |
| **Multi-device sync** | Built in (library, categories, and progress live on the server, so every device sees the same thing) | None built in; move devices via backup files | Built in, same server model |
| **Offline reading** | Download to device with per-series keep rules, pinning, and storage limits (all native platforms; not the web build) | Yes, chapters download to the phone | No (you need to reach the server) |
| **Platforms** | Android, iOS (sideload), Windows, macOS, Linux, web | Android only | Any browser |
| **Webtoon reading** | Continuous webtoon reader: no gaps, pinch-to-zoom mid-scroll, chapters load as you go | Yes, webtoon and paged modes | Yes, in the browser |
| **Tracking** | AniList, MyAnimeList, and more, via the server | AniList, MyAnimeList, Kitsu, and more, built in | Via the server |
| **Setup effort** | You need a running Suwayomi server first | Install one APK and you're reading | Comes with the server; nothing extra to install |
| **Updates / app stores** | No app stores. Android via in-app update check or Obtainium; desktop builds from GitHub | Not on the Play Store; APK from GitHub, commonly updated via Obtainium | Updates with the server |

## Pick Mihon (or Komikku) if…

You read on **one Android device** and don't want to run a server. Setup is one APK, everything lives on the phone, and the ecosystem around it is the largest of the three. Komikku is worth a look over stock Mihon if you want more library organization out of the box.

The cost: your phone is the single copy of your library, and moving to a second device means shuttling backup files by hand.

## Pick Tsumiru if…

You read on **more than one device**, or you already self-host. Your library, categories, progress, and downloads live on your Suwayomi server; Tsumiru clients on your phone, desktop, and browser all see the same state, with no sync step. Offline reading is per-series keep rules rather than manual download queues, and webtoon reading is what the app is built around.

In exchange, you have to run Suwayomi-Server somewhere, and keep it running. If keeping a server running sounds like a chore, start with Mihon.

If you're on Mihon already, your library moves over in one backup file: [Coming from Mihon or Komikku](/docs/guides/migrate-from-mihon).

## The WebUI is for…

**Reading and managing your server from any browser with zero installs.** It's the interface Suwayomi ships with, it's always version-matched to your server, and it's the natural place for server administration. As a day-to-day reader it gives you the essentials. Tsumiru adds what a browser tab can't, like offline reading and a native app on each platform. The WebUI is also the handy option on machines that aren't yours.

## Where Tsumiru sits

Tsumiru is younger than Mihon. It never talks to sources directly, and your device's content is always a subset of what the server has. If the client-server model fits how you read, Tsumiru is the client built around it. If not, use one of the other two.
