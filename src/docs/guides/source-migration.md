---
title: Migrate manga between sources
titleTemplate: Guides
description: Move a series, or a whole source's worth of series, to a different source when one dies or breaks, carrying your read chapters, categories, and more.
---

# Migrate manga between sources

Sources come and go. A site shuts down, an extension breaks, or another source has better scans. Migration moves a series in your library from one source to another **without losing your place**: the new entry takes over, and your reading progress, categories, and reader settings come along.

Whether you're moving one series or clearing out a dead source, it's the same flow: pick where the series should go, review the matches, then migrate or copy.

## Start a migration

There are three ways in:

* **One series**: open it, then tap **Migrate** (the **⋮** menu on phone, the swap-arrows button on tablet and desktop).
* **A selection**: multi-select series in your library and choose **Migrate**.
* **A whole source**: open **Browse → Migrate**, tap **Migrate off a source**, and pick the source. Tsumiru gathers every series you have on it. The picker can sort sources, **Show obsolete only** to find dead extensions, and select all at once. This is the way to clear a dying source in one pass.

## Choose the target source

On the **Select sources** screen, move the sources you want to search from **Available** into **Selected**. The shortcuts **Select pinned**, **Select enabled**, **Select all**, and **Select none** speed this up. Tsumiru searches these sources, in the order you pick them, for a match to each series. Tap **Continue**.

Two helpers narrow the results: **Extra search query** appends text to every title before searching, and **Hide entries with no match** and **Hide entries without new chapters** trim the list to what's worth moving.

## Review the matches

The **Migrate** list shows each series next to the match Tsumiru found, including its **Latest chapter**. Where nothing matched, it reads **No match found** — tap that entry to **Search manually**, or **Skip** it.

Run the whole list from the toolbar's **Migrate** or **Copy** actions, or handle one entry at a time from its menu with **Migrate now** and **Copy now**.

**Copy vs migrate**: **Copy** adds the new entry and keeps the original in your library. **Migrate** replaces the original with the new entry. Copy first if you want to check the new source before dropping the old one.

::: warning No undo
**Migrate** removes the original entry when it finishes, and it can't be reversed. Double-check you picked the right target, or **Copy** instead and remove the old entry yourself once you're happy.
:::

## What carries over

The gear on the migration list opens **Data to migrate**, which decides what moves with each series:

* **Migrate Chapters** (on): your read status, last-read page, and bookmarks, matched to the chapters on the new source.
* **Migrate Categories** (on): the new entry joins the old one's categories.
* **Migrate Tracking** (off): re-point your tracker links (AniList, MyAnimeList, …) at the new entry.
* **Reader settings** (on): the series' per-series reader overrides.
* **Keep-offline rule** (on): the series' offline download rule.
* **Migrate Downloads** (off): the downloaded chapter files themselves. Left off by default, since those came from the old source — queue fresh downloads on the new entry instead.

A few things to know about matching:

* **Reading progress** is matched chapter by chapter, by number first and then by name. When two sources number their chapters differently, some read statuses may not find a match. Nothing is ever marked unread; matches are only marked read.
* **Categories** are *added* to the new entry. Nothing is removed from the old one.
* If your server sign-in expires mid-run, migration pauses (**Paused — sign in again to continue**) and picks up where it left off once you sign back in.
