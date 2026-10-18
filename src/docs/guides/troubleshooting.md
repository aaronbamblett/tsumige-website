---
title: Troubleshooting
---

# Troubleshooting

## A game will not start

1. Select the game and open **Launch**. Check **Mode** and **Game file**. Use **Choose…** if the executable moved.
2. For **Steam**, check **Steam app id**. For **Proton** on Linux, `umu-run` must be available on `PATH`.
3. For **Proton** or **Wine**, check **Prefix**, **Game language** and the selected runner. Click **Rescan** if you installed a runner after opening Tsumige.
4. Click **Play** again and read the error. If the game exits immediately with an error, Tsumige shows its launch log location.

Launch logs are in `logs` inside the [data folder](/docs/faq/#where-is-my-library-stored). After a launch finishes, `logs/latest.log` contains a copy of that launch's log.

## A search finds the wrong game

Game data and covers come from VNDB.

1. In the add dialog, change **Search VNDB** to the title, a VNDB link or an ID.
2. Select the correct result and click **Next**. If a search fails, click **Retry**.
3. If there is no match, use **Add without VNDB** and enter the title yourself.

## A file is rejected by Flatpak

If Tsumige says a path came through the Flatpak portal, choose the file or folder from its real location. Portal paths beginning with `/run/user/` are rejected.

## A cover is missing

The game can still be added if its cover download fails. Select it and use **More**, then **Change art…**. See [Cover art](/docs/guides/cover-art).
