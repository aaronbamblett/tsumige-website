---
title: Library
titleTemplate: Frequently Asked Questions
description: Frequently Asked Questions about the Library in Tsumiru.
---

# Library
Frequently Asked Questions about the Library.

## How do I sort, filter, and change the layout?

Tap the organizer icon in the Library toolbar for five tabs:

* **Filter**: each filter is a chip row with **Any** plus the two states, so you pick a side or leave it off: **Download Status** (**Downloaded** / **Not Downloaded**), **Storage** (**On Device** / **Remote**), **Read Status** (**Unread** / **Read**), **Progress** (**Started** / **Not Started**), **Bookmarks** (**Bookmarked** / **Not Bookmarked**), **Publication Status** (**Completed** / **Not Completed**), and **Content Rating** (**Lewd** / **Not Lewd**). Below the rows sits a **Minimum rating** star row, and you can include or exclude specific **Categories**, **Tags**, and (once a tracker is connected) **Tracked** services.
* **Sort**: **Alphabetical**, **Rating**, **Total Chapters**, **Last Read** (the default), **Last Update**, **Unread**, **Latest Chapter**, **Chapter Fetch Date**, **Date Added**, **Tracker score**, or **Random** (ascending or descending).
* **Display**: pick a layout (**List**, **Descriptive List**, **Compact grid**, **Comfortable grid**, or **Cover-only grid**). The grid layouts get column-count sliders for portrait and landscape plus a **Grid style** row: **Uniform** crops every cover to the same cell, **Non-uniform** lets covers keep their shape with rows still aligned, and **Staggered** packs each column independently. The list layouts get a **List size** slider instead. The tab also has **Limit titles to 2 lines** and **Outline on covers** toggles.
* **Badges**: choose the **Unread badge** style (**Show count**, **Show plain badge** for a badge with no number, or **Hide**), toggle the **Downloaded**, **On device**, **Read progress bar**, **Continue reading button**, **Source icon**, and **Language** badges, and set the **Badge layout**: drag to reorder the badges, and tap the arrow to move one to the other corner of the cover.
* **Group**: keep the **Default** category tabs, group **By tag**, **By source**, **By status**, **By track status**, or **By language**, or pick **Ungrouped** for one flat tab. **Group display** shows groups as **Tabs** or as **Section headers** in one continuous scroll, and the tab options (category tabs, item counts, showing hidden categories) live here too.

## How do I search my library?

The library search box takes field filters, not just plain text. Type `key:value` to filter by a field, and combine as many as you like:

* `tag:seinen` — a source tag or one of your own (exact match)
* `genre:action` — a source genre
* `author:oda` — the author (use `artist:` for the artist)
* `status:ongoing` — also `completed`, `hiatus`, or `cancelled`
* `source:mangadex` — the source name
* `tracked:true`, or `tracked:anilist` for a specific tracker
* `rating:>=4` — your own rating, with `>=`, `<=`, `>`, `<`, or `=`
* `unread:true` / `downloaded:true`

Wrap multi-word values in quotes (`tag:"slice of life"`), exclude a term with a leading minus (`-tag:dropped`), and match either of two things with a group (`{genre:action|genre:romance}`). Plain words with no `key:` still search titles, authors, genres, and tags as usual. The **?** beside the search box opens the same tips in the app.

To keep the search box always in reach, turn on **Persistent search bar** in **Settings → Library**. It sits below the app bar and sticks to the top as you scroll, instead of hiding behind the search icon.

## Where do I see what I've read?

The **History** tab lists your recently-read chapters grouped by day, newest first, with a search box to find something you read a while ago. A history entry's menu offers **View Manga** to jump back to the series. On tablets and desktop, History sits in the main navigation between **Updates** and **Browse**; on phones it's under the **More** menu. (While [Incognito mode](/docs/faq/settings#does-tsumiru-have-an-incognito-mode) is on, nothing is added to History.)

History covers everything you've read on the server, including series you've since removed from your library. The filter icon narrows the list with the same chip rows as the library: **Series** (**Unfinished** / **Finished**), **Read Status** (**Unread** / **Read**), and **Library** (**In library** / **Not in library**).

## Can library entries jump to my next chapter?

Turn on the **Continue reading button** in the organizer's **Badges** tab (off by default), and each entry gets a button that opens your next unread chapter directly, without going through the series page first.

## What happens when a source site is down?

If a source can't be reached but your server is up, Tsumiru shows the chapters already stored on your server instead of an empty list, so you can keep reading what's there.

Opening a series also checks the source for new chapters by default, which can be slow when a source is struggling. To make opens faster, turn off **Refresh chapters from source** in **Settings → Library**; Tsumiru then shows the server's chapter list and only checks the source when you refresh by hand.

## How do I update my library?

From the Library (or Updates) overflow menu choose **Global Update** to refresh everything, or **Category Update** to refresh just the category you're viewing. Updating runs as a job on your **Suwayomi server**. Tsumiru kicks it off and shows progress.

You can also enable **Automatic Update** in **Settings → Library** to refresh on an interval, and **Automatically refresh metadata** to pull new covers and details during updates.

## Why is the update skipping some entries?

In **Settings → Library → Skip updating entries** you can skip entries:

* **With Completed status**
* **That haven't been started**
* **With unread chapter(s)**

This reduces unnecessary requests.

## Where do I see recently updated chapters?

The **Updates** tab lists newly fetched chapters grouped by date, newest first. You can multi-select chapters there for bulk actions.

The filter icon opens **Chapter grouping** at the top, which stacks consecutive chapters from the same series into one foldable entry: **Disabled** lists every chapter on its own, **Collapsed** folds each stack shut, and **Expanded** folds them open. Below that, the sheet narrows the list by **Download Status** (**Downloaded** / **Not Downloaded**), **Read Status** (**Unread** / **Read**), **Progress** (**Started** / **Not Started**), and **Bookmarks** (**Bookmarked** / **Not Bookmarked**).

## Can I sync between devices?

There's nothing to enable: your library, read progress, bookmarks, categories, per-series reader settings, and download state all live on the **Suwayomi server**. Any device pointed at the same server sees the same state automatically. Only UI preferences (sort, filter, display) are stored per-device.

## How do I handle duplicate chapters from the same series?

When several scanlation groups post the same chapters, open the series' **Filter** and set **Preferred groups**. Check the groups you trust in the order you prefer them: Tsumiru shows one copy of each chapter from your top-ranked group, falling back to the next group for chapters your top pick didn't release. Leave it on **No preference** to see everything, or turn on **Show all versions** to bring every group's copy back.

## Does Tsumiru catch duplicate series?

When you add a series whose name closely matches something already in your library, a **Possible duplicates** dialog appears first, asking you to *select an entry to migrate or add anyway*. You can open the existing entry, [migrate](/docs/guides/source-migration) the new one into it, or add it anyway. When a tracker confirms it's the same title, the match is labelled **Same AniList entry** (or whichever tracker) so you know the two really are the same series.

### Batch adds from Browse

Adding a batch works the same way, but pauses on each likely duplicate with **Allow all**, **Skip it**, and **Skip all**, and finishes with an *Added N, skipped M* summary.

### Duplicates already in your library

Open **Scan for duplicates** from the library overflow menu (or **Settings → Library → Duplicated entries**). Turn on **Check description** to also match on the synopsis, then select the entries you want gone and remove them. Offline, the scan can only match by title.

::: warning
Removing an entry here removes it from your library and deletes its downloaded chapters on this device.
:::

## Can Tsumiru suggest similar titles?

A series' details page shows a **Suggestions** row of similar titles, and **See Recommendations** opens a full screen of them. The suggestions come from public manga databases (AniList, MyAnimeList, MangaDex, MangaUpdates, and Comick), which Tsumiru queries directly with the series' title — see the [privacy policy](/privacy/) for what's shared.

It's on by default. **Settings → Appearance → Show recommendations** turns it off, and **Recommendations in overflow** moves the row into the overflow menu instead.

## Why were some chapters marked unread again?

If a source changes a chapter's URL, the server sees it as a new chapter, so it can reappear as unread. This is expected when a source reorganizes its content.
