---
title: "Browse: sources & extensions"
titleTemplate: Guides
description: Install manga source extensions on your Suwayomi server from Tsumiru, manage extension stores, pin sources, and search every source at once.
---

# Browse: sources & extensions

The **Browse** tab is where you find manga. It has three tabs: **Sources** lists every source you can browse, **Extensions** is where you install the extensions that provide those sources, and **Migrate** moves your library off a source that's dying or broken (see [Migrate manga between sources](/docs/guides/source-migration)).

**Extensions don't install into Tsumiru — they install onto your Suwayomi server.** Install an extension from your phone and its sources appear on the desktop and web apps too, because every client shares the server's set.

## The Extensions tab

Extensions are listed in groups: **Updates pending** at the top, then **Installed**, then everything available, grouped by language. An inline search field at the top filters the list as you type.

* **Install**: tap **Install** on the extension's row. Its source appears in the Sources tab right away (installing an extension also enables its language for you, so the new source isn't hidden by the language filter).
* **Update**: rows with a pending update show an **Update** button. Pull down on the list to make the server re-check for updates.
* **Uninstall**: tap **Uninstall** on an installed row. A row with an update waiting shows **Update** in that spot instead, and keeps **Uninstall** in its overflow menu.
* **Reinstall**: an installed row with no update waiting has a restart icon beside it with a **Reinstall** tooltip; on a row with an update, **Reinstall** is in the overflow menu instead. It uninstalls the extension and installs it again, which repairs one that installed without any working sources, or one that keeps offering an update that never applies.
* **Obsolete** (in red) means the extension was removed from its store. It may keep working for a while, but the only action left is to uninstall it.

Extensions with adult content are marked **18+** in red.

### Install from a file

If you have an extension as an `.apk` file that isn't in any store: on the Extensions tab, tap the **+** icon in the toolbar and pick the file. It uploads to your server and installs like any other extension.

## Extension stores

The Extensions tab lists whatever the stores configured on your server provide. If it's empty, no store is set yet.

Add one under **More → Settings → Browse → Extension stores**, or from the extension stores icon in the Extensions tab toolbar. Stores are a server setting, so one you add applies to every client connected to your server. See the [Extension stores guide](/docs/guides/adding-sources) for how trust and content ratings work.

::: tip Older servers
Managing extensions needs [a server new enough for Extension stores](/docs/guides/adding-sources). On an older server the Extensions tab shows **Update your Suwayomi server to manage extensions** instead, and the settings row is disabled until you update.
:::

## NSFW and language filters

Two controls decide what Browse shows you:

* **NSFW**: **More → Settings → Browse → Show NSFW extensions and sources** hides 18+ extensions and their sources when off.

  ::: warning Best effort
  This filter relies on extensions being flagged correctly. It doesn't stop an unofficial or mislabeled extension from surfacing 18+ content.
  :::

* **Languages**: the translate icon in the Browse toolbar opens a language list; only checked languages appear. The Sources and Extensions tabs each have their own list, so you can browse sources in two languages while still seeing every extension.

## The Sources tab

Every source from your installed extensions, with **Pinned** and **Last Used** groups at the top, then sources grouped by language. Tap a source to browse it; the **Latest** button on a row jumps straight to its newest releases. The toolbar has a **Global Search** icon (below) and a **Filter sources** icon.

### Pin your favorites

Tap the pin icon on a source's row to pin it. Pinned sources sit in their own group at the top of the list, and global search can be scoped to just them. Tap the pin again to unpin.

### Filter the source list

The **Filter sources** icon in the toolbar opens a screen for hiding sources you never use. Each language groups its sources, and you can hide a whole language or individual sources so they drop out of the Sources tab and out of global search. It leaves your installed extensions in place — it only decides what shows up here.

### Browsing a source

Inside a source:

* **Popular** and **Latest** chips switch listings; **Filter** switches to the source's own filtered browse.
* The search icon searches within this source.
* On the Filter listing, the **Filter** button opens the source's filters (genre, status, and whatever else that source offers) in a sheet.
* The display icon switches between grid and list.
* Some sources have their own settings — if one does, a gear icon appears in its toolbar.

**Add several at once**: long-press a cover to start selecting, tap more covers to add them, and add the whole selection to your library in one go. If any of them look like something you already have, Tsumiru pauses to ask (see [duplicate detection](/docs/faq/library#does-tsumiru-catch-duplicate-series)).

## Global search

To search every source at once, tap the **Global Search** icon on the **Sources** tab, type a title, and submit. It queries each source and shows a row of results per source.

Three chips control the scope:

* **Pinned sources** searches only your pinned sources (shown when you have any).
* **All** searches every enabled source.
* **Has results** hides sources that found nothing.

Results already in your library are shown darkened, so you can tell what you have at a glance. Only sources in your enabled languages are searched — trim the language list to keep global search fast.

## The Migrate tab

The **Migrate** tab moves your library off a source in bulk — handy when a source shuts down or an extension goes obsolete. Pick a source, and Tsumiru finds every series you have on it and helps you move them to another source, carrying your read progress, categories, and more. The full walkthrough is in [Migrate manga between sources](/docs/guides/source-migration).
