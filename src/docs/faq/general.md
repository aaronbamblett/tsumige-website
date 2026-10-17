---
title: General
titleTemplate: Frequently Asked Questions
description: Frequently Asked Questions about Tsumiru
---

# General
Frequently Asked Questions

## What is Tsumiru?
**Tsumiru** is a multiplatform client app (Android, iOS via [sideloading](/docs/guides/install-ios), Windows, macOS, Linux, and Web) for a **Suwayomi server** (also known as Tachidesk). You run your own Suwayomi server; Tsumiru connects to it and lets you browse, read, and manage your library across all your devices.

## How do I connect Tsumiru to my server?
The first-run setup wizard does it for you. On the same Wi-Fi, **Search my network** finds your Suwayomi server automatically. Otherwise type the address (just the host is fine, like `192.168.1.10` or `suwayomi.mydomain.com`) and tap **Test connection**: Tsumiru works out the scheme and port, trying Suwayomi's default **4567** first, and detects whether the server needs a login. Add a port if you use a custom one (`192.168.1.10:4568`). If it says it *reached* something but couldn't confirm it's Suwayomi, you've likely hit the wrong port. See [Common issues](/docs/guides/troubleshooting/common-issues). Full walkthrough in the [getting started guide](/docs/guides/getting-started).

## Where do sources and extensions come from?
Extensions live on your **Suwayomi server**, but you manage them from Tsumiru. **Browse → Extensions** lets you install, update, and uninstall extensions (they install onto the server, so every connected client gets them), and extension stores are managed under **Settings → Browse → Extension stores**. See the [Browse guide](/docs/guides/browse-and-extensions) for details.

## Can I track my reading with AniList or MyAnimeList?
Connect the trackers your Suwayomi server supports, bind one to a series, and Tsumiru keeps its progress updated as you read, including chapters you read offline. See [Tracking](/docs/guides/tracking).

## Can I read light novels?
**Tsumiru** is an image-based reader, not a text parser, so light novels are not supported.

## Can I stream anime?
**Tsumiru** is not designed for anime streaming.

## What's a fork?
A fork is a copy of an open-source app that develops in its own direction. Tsumiru began as a fork of [Tachidesk-Sorayomi](https://github.com/Suwayomi/Tachidesk-Sorayomi) and has grown its own features (offline reading, the webtoon reader, the library organizer).
