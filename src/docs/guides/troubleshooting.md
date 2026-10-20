---
title: Troubleshooting
description: "Check launch errors, wrong VNDB matches, rejected Flatpak paths and missing covers in Tsumige."
---

# Troubleshooting

## A game will not start

1. Select the game and open **Launch**. Check **Mode** and **Game file**. Use **Choose…** if the game file moved.
2. For **Steam**, check **Steam app id**. For **Proton** on Linux, `umu-run` must be available on `PATH`.
3. For **Proton** or **Wine**, check **Prefix**, **Game language** and the selected runner. Click **Rescan** if you installed a runner after opening Tsumige.
4. Click **Play** again and read the error. If the game exits immediately with an error, Tsumige shows its launch log location.

Launch logs are in `logs` inside the [data folder](/docs/faq/#where-is-my-library-stored). After a launch finishes, `logs/latest.log` contains a copy of that launch's log.

## A search finds the wrong game

Game data and covers come from VNDB.

1. In the add dialog, type a title, a VNDB link or an ID into the search box.
2. In the import list, use **Change…** on a **Best match** row or **Choose…** on a **No matches on VNDB** row. If a lookup fails with **VNDB search failed**, click **Try again**.
3. If the game is not on VNDB, add it under its own name and set its details with **Edit…**. See [FAQ](/docs/faq/).

## A file is rejected by Flatpak

If Tsumige says a path came through the Flatpak portal, choose the file or folder from its real location. Portal paths beginning with `/run/user/` are rejected.

## A cover is missing

The game can still be added if its cover download fails. Select it and use the game menu (⋮), then **Change art…**. See [Cover art](/docs/guides/cover-art).
