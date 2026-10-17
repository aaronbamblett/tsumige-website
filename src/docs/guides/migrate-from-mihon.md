---
title: Coming from Mihon or Komikku
titleTemplate: Guides
description: "Switch from Mihon or Komikku to Tsumiru: restore your .tachibk backup on a Suwayomi server, reinstall your extensions, and keep your library and progress."
---

# Coming from Mihon or Komikku

Suwayomi restores Mihon's backup format directly, so moving from Mihon or Komikku is one backup file: create it there, restore it here.

## What actually changes

One conceptual shift: in Mihon, sources and extensions run on your phone. With Tsumiru, they run on your **Suwayomi server**, and Tsumiru is a client you point at it, on as many devices as you like.

The tradeoff: you run a server. In exchange, every device shows the same library, categories, and reading progress, and your phone is no longer the only copy of your library. If running a server isn't for you, Mihon remains the better fit; see [how they compare](/docs/compare/).

## 1. Set up a Suwayomi server

Skip this if you already have one. Suwayomi-Server is free and open-source and runs on Windows, macOS, Linux, Docker, or a NAS/home server.

* **Suwayomi-Server:** [github.com/Suwayomi/Suwayomi-Server](https://github.com/Suwayomi/Suwayomi-Server) — follow its README to install.

Then install Tsumiru from the [download page](/download/) and connect it to the server. [Getting started](/docs/guides/getting-started) covers the setup wizard.

## 2. Create a backup in Mihon

In Mihon, go to **More → Data and storage → Create backup**, leave everything selected, and save the file. You'll get a `.tachibk` file. Komikku's backup lives in the same place and uses the same format.

(Menu names drift between releases; if yours looks different, look for a backup option under data or storage settings.)

## 3. Restore the backup

The restore happens on the server, and Tsumiru can drive it:

1. In Tsumiru, go to **Settings → Backup & Restore → Restore Backup**.
2. Pick your `.tachibk` file.
3. Tsumiru validates it first and lists any **missing sources**. If some are missing, install those extensions (next step) and run the restore again so everything resolves.

You can also restore through the server's own WebUI. The result is the same.

::: warning
Restoring merges into whatever library the server already has. On an existing server, create a server backup first (a fresh server has nothing to overwrite).
:::

## 4. Install matching extensions

Extensions now live on the server, but you manage them from Tsumiru:

1. Add an extension store under **Settings → Browse → Extension stores** (this needs [a server new enough for Extension stores](/docs/guides/adding-sources)).
2. Open **Browse → Extensions** and install the sources your library uses. There's a language filter, and installing from a file is supported for anything not in a store.

Once installed on the server, the sources are available to every device you connect.

## What carries over, and what doesn't

**Carries over:** your library entries, categories, and read history. That's the core of a Suwayomi backup, so a restored `.tachibk` puts your series back in their categories with chapters marked read.

**Doesn't carry over:**

* **Downloaded chapter files.** Mihon's own backups never include them, so there's nothing to transfer. You'll re-download on the server side; see the next section.
* **Local series** (Mihon's local source) travel as entries, not files. Copy the files to your server's local source directory if you use it.
* **Mihon's app settings.** Tsumiru is a different app, so reader and appearance preferences are set up fresh.
* **Custom covers** aren't in Mihon backups.

Tracker bindings are part of the Mihon backup format, but check the [Suwayomi restore notes](https://github.com/Suwayomi/Suwayomi-Server) for what a restore preserves on the server side. Either way you'll sign in to each tracker again; see below.

## After the move

Two things replace habits you had in Mihon:

* **Device downloads** → [Offline reading](/docs/guides/offline-reading). Set a keep rule per series (next 5/10/25 unread, all unread, or everything) and Tsumiru keeps chapters on your device automatically. The server fetches from sources; your device syncs from the server.
* **Trackers** → [Tracking](/docs/guides/tracking). Sign in to AniList, MyAnimeList, and the rest under **Settings → Tracking**, then check each series' bindings.
