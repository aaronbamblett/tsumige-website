---
title: Launch settings
---

# Launch settings

1. Select a game and open **Launch**.
2. Choose **Mode**. Linux supports **Proton**, **Wine**, **Native** and **Steam**. macOS and Windows support **Native** and **Steam** only.
3. For **Steam**, enter **Steam app id**. For the other modes, set **Game file** with **Choose…** or type the game file path.
4. For **Proton** or **Wine**, check **Proton version** or **Wine build**, **Prefix** and **Game language**. A prefix is the Windows environment used by that game. **Custom…** lets you supply your own value.
5. Click **Play** to start the game.

Text fields save when you press Enter or move focus away. Mode and dropdown choices save when selected.

**Proton** runs through `umu-run`, which must be available on `PATH`. **Native** starts the selected game file directly; on macOS it can open an `.app` bundle. **Steam** starts the game through Steam using its app ID.

## Arguments and environment

1. Under **Advanced**, click **Show**.
2. Enter **Arguments** for the game file. Use quotes around an argument containing spaces.
3. Enter **Environment** as `KEY=value`, one per line.

These two fields are available outside **Steam** mode.

For an installer or patch, use **Run EXE inside prefix…** in the **Launch** tab, under the prefix setting. Select its executable. This runs it in a Proton or Wine game's prefix with the game's settings and does not add playtime.
