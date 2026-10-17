---
title: Privacy policy
description: "How Tsumiru handles your data: it doesn't collect any."
editLink: false
---

# Privacy policy

Tsumiru is a free, open-source app. It is provided at no cost and is intended for use as is.

**Tsumiru has no analytics, no crash reporting, no telemetry, and no account with us.** We run no servers that collect your usage, and we receive nothing about what you read.

There are two exceptions, both covered below: the **Suggestions** feature asks a few public manga databases for similar titles, which sends them a series' title (and sometimes a link to it) — on unless you turn it off. And **update checks** ask GitHub whether a newer Tsumiru release exists, either when you tap to check yourself or, if you turn it on, in the background.

## How Tsumiru works

Tsumiru is a **client** for a [Suwayomi server](/docs/guides/getting-started) that you run and control. Apart from the two exceptions above, the only server Tsumiru talks to is the one **you** configure. Your library, reading history, downloads, and the sources you browse all live on your own server, not on any service we operate.

* Tsumiru sends requests to the server address you enter, plus any credentials you provide to reach it.
* App settings (such as your server address and reader preferences) are stored locally on your device.
* We receive nothing.

## Suggestions

The **Suggestions** row on a series' details page shows similar titles. To build it, Tsumiru asks these public manga databases for recommendations, sending them the series' title (and sometimes its source link):

* AniList
* MyAnimeList
* MangaDex
* MangaUpdates
* Comick

These requests go straight from your device to those services, not through your Suwayomi server. Each has its own privacy policy.

**Suggestions is on by default.** To turn it off, open **Settings → Appearance** and switch off **Show recommendations**. With it off, Tsumiru makes no requests to those services.

## Update checks

Tsumiru can ask GitHub (github.com) whether a newer release is available, in two ways:

* Tapping **Check for updates** on the **About** screen. This only runs when you ask.
* A background check, controlled by **App update notifications** under **Settings → Notifications**. This is off by default.

Either way, the request only fetches the latest release listing. It carries no account, library, or reading data.

## Third-party content

Your Suwayomi server connects to third-party sources and, optionally, tracking services (such as MyAnimeList or AniList) that **you** configure on the server. Those services have their own privacy policies, and any data shared with them is governed by your server's configuration, not by Tsumiru.

If you open an external link from within the app, you'll be taken to a site we don't operate; review that site's own privacy policy.

## This website

tsumiru.app itself sets no cookies and runs no analytics or trackers.

## Changes to this policy

We may update this policy from time to time. Any changes will be published on this page.

## Contact

Questions or suggestions? Open an issue on [GitHub](https://github.com/Suwayomi/Suwayomi-Tsumiru/issues).
