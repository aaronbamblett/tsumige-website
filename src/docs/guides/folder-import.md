---
title: Folder import
description: "Review matches and add several games from a folder to your Tsumige library at once."
---

# Folder import

1. Click **Add**, then the **Import folder** card. Click **Choose folder…** and select the folder containing your games.
2. **Checking folder…** shows while Tsumige looks. If the folder you choose directly contains a launchable game file, the importer treats that folder as one game. To add a game by choosing its file yourself, use [Adding games](/docs/guides/adding-games).
3. Wait for matching. Each row shows the game folder's name, with its VNDB match underneath. A progress bar reads "Matching on VNDB… N of M" and counts only games not already in the library.
4. Review each row:
   - A spinner shows while a row waits for its match.
   - **No matches on VNDB** with **Choose…**: search by title, VNDB link or ID, choose a result and click **Select**.
   - **Best match** with **Change…**: the match was found by title only, so check it and change it if it is wrong.
   - **VNDB search failed** with **Try again**: the lookup failed, so retry it.
   - **Same VNDB entry as X**: another row matched the same entry. The row stays unticked but can still be added, for chapter releases or another version.
5. Tick the games you want to add. Matched games are ticked automatically. Untick anything you do not want.
6. Click **Add games**. Nothing is added before this step.

**Choose folder…** replaces the list with another folder. **Add folder…** adds another folder to the list. **Hide imported** in the list header hides games already in the library.

An unmatched row can be ticked and added using its folder name. The same game can't be added twice through a different path or `.exe`. Paths through symlinks such as `/mnt` and `/var/mnt` on Bazzite and Fedora Atomic count as the same.
