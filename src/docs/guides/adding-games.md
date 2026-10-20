---
title: Adding games
description: "Add a game, a folder of games or a Steam game to your Tsumige library."
---

# Adding games

## Add one game

1. Click **Add** in the top bar.
2. Click **Choose folder…** for a game's folder, or **Choose game file…** for its game file. You can also drop a game folder or file onto the library window.
3. Check **Game file**. If several files were found, choose the one that starts the game.
4. Check the suggested match. The search box takes a title, a VNDB link or an ID (v12345). Select a result and click **Next**.
5. Check **Title**, **Game file** and **Mode**, then click **Add**.

Game data and covers come from VNDB. If there is no suitable match, click **Add without VNDB**, enter **Title**, check the game file and mode, then click **Add**.

Dropping or choosing a folder that holds several games opens the import list instead. **Checking folder…** shows while Tsumige looks. See [Folder import](/docs/guides/folder-import).

## Steam games

1. Click **Add**, then the **Steam games** card (Installed on this computer). It lists the games Steam has installed on this computer, on Linux, macOS and Windows.
2. Each row shows the Steam name, with its VNDB match underneath. Matches made by Steam store link are ticked. A match found only by title shows **Best match** and stays unticked.
3. Tick the games you want and click **Add games**. They launch through Steam.

## Duplicates

The same game can't be added twice through a different path or `.exe`. Paths through symlinks count as the same, such as `/mnt` and `/var/mnt` on Bazzite and Fedora Atomic.
