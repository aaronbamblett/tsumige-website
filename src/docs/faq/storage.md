---
title: Storage
titleTemplate: Frequently Asked Questions
description: Where Tsumiru keeps downloads and backups, on your server.
---

# Storage

By default, Tsumiru stores almost nothing on your device. Your library, downloads, and backups all live on your **Suwayomi server**. The app keeps only small UI preferences (server address, sort/filter/display choices, global reader defaults) locally. Per-series reader settings live on the server with the series.

The exception is [offline reading](/docs/guides/offline-reading): when you keep a series or save a chapter offline, Tsumiru copies those chapters onto the device so you can read them without the server. You decide how much space that's allowed to use in **Settings → Downloads**, on the **On device** tab.

## Where are my downloads kept?

On the **server**, at the path set in **Settings → Downloads → Download location**, described in-app as "the path to the directory on the server where downloaded files should get saved in." You can also choose **Save as CBZ archive** to control the download format. Server downloads are never written to your device. The separate [offline reading](/docs/guides/offline-reading) feature is the only thing that stores chapters locally.

## Where are backups kept?

Backups are created and stored by the **server** too. Automatic backups go to the path in **Settings → Backup & Restore → Backup Location** ("the path to the directory on the server where automated backups should get saved in"). When you create a backup manually, the server generates the file and hands it to you to download. See [Backups](/docs/guides/backups).

## Does Tsumiru use much space on my device?

By default, very little: pages you're reading are cached temporarily for performance, and your settings are stored locally. The space a downloaded series takes up is managed on your **server**, not your phone or computer.

That changes only if you use [offline reading](/docs/guides/offline-reading), which deliberately keeps chapters on the device. That space is shown under **Settings → Downloads → On device → Storage used**, and you can cap it or auto-remove old downloads there.
