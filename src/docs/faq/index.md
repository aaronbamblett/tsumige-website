---
title: FAQ
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

No. Game data and covers come from VNDB, but **Add without VNDB** lets you enter a title and launch file yourself. You can choose a local image with **From file…** in **Change art…**.

## Can I use Wine or Proton on macOS or Windows?

Tsumige offers **Proton** and **Wine** on Linux. macOS and Windows have **Native** and **Steam** modes only.

## Why is a Steam session missing?

Steam playtime is not tracked on macOS. On other platforms, recording depends on Tsumige detecting the running game process. See [Playtime](/docs/guides/playtime).

## Can I add several games at once?

Use **Import a folder** from **Add**. Review the matches and game file paths before clicking **Add Games**. See [Folder import](/docs/guides/folder-import).
