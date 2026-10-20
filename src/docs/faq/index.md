---
title: FAQ
description: "Find your library's data folder and answers to common questions about matches, platforms and imports."
---

# FAQ

## Where is my library stored?

The library is stored locally in `library.json`. The data folder also contains `backups`, `covers` and `logs`.

The data folder is:

- Linux: `~/.local/share/tsumige` (or `$XDG_DATA_HOME/tsumige` when that is set).
- macOS: `~/Library/Application Support/Tsumige`.
- Windows: `%APPDATA%\Tsumige`.

`TSUMIGE_DATA_DIR` overrides the data folder when set to a non-empty value.

## Do I need a VNDB match?

No. Game data and covers come from VNDB, but **Add without VNDB** lets you enter a title and launch file yourself. You can choose a local image with **Choose file…** in **Change art…**.

## Why didn't a game get matched?

In the import list, use **Choose…** on a row with **No matches on VNDB**, or **Change…** on a row with **Best match**. Search by title, VNDB link or ID.

Some games are not on VNDB at all. GNOSIA is one example. Add the game under its own name, then use **Edit…** in the game menu to set its **Title**, **Developers** and **Release date**.

## Can I use Wine or Proton on macOS or Windows?

Tsumige offers **Proton** and **Wine** on Linux. macOS and Windows have **Native** and **Steam** modes only.

## Why is a Steam session missing?

Steam playtime is not tracked on macOS. On other platforms, recording depends on Tsumige detecting the running game process. See [Playtime](/docs/guides/playtime).

## Can I add several games at once?

Use the **Import folder** card from **Add**. Review the matches and folder names before clicking **Add games**. See [Folder import](/docs/guides/folder-import).
