---
title: Offline reading
titleTemplate: Guides
description: Download chapters to your device and keep reading with no server and no connection.
---

# Offline reading

Tsumiru can keep chapters **on your device** so you can read them with no connection to your Suwayomi server. The sources still come from Suwayomi; offline reading stores the pages on your device, so the app doesn't need to reach the server while you read.

This is separate from [server-side downloads](/docs/faq/downloads). A *server download* tells your Suwayomi server to fetch a chapter and keep it **on the server**. An *offline download* copies that chapter onto **this device**. The two work together: a chapter has to be downloaded on the server before it can be saved to your device, and if it isn't yet, Tsumiru queues the server download for you automatically.

::: tip Where it works
Offline reading is available on the **Android, iOS, Windows, macOS, and Linux** apps. It is not available on the **web** app, which always reads from the server.
:::

## Getting chapters onto your device

There are two ways to save chapters offline.

### Keep a whole series offline

On a series page, tap **Offline** (next to **In library**) to choose a rule. Once chapters are saved it reads **On device**. Tsumiru then keeps the matching chapters on your device automatically. After every library update it fetches the new chapters for each kept series (asking the server to download them first when needed) and removes older ones the rule no longer covers:

* **Keep next 5 / 10 / 25 unread**: a rolling buffer of upcoming chapters, refilled as you read.
* **Keep all unread**: every unread chapter.
* **Keep all chapters**: every chapter in the series.

The series page shows its current keep mode, so it's clear why chapters are being kept.
You can also keep several series offline at once: select them in the library, choose **Keep offline**, and pick how much of each to keep.

To stop keeping a series offline, open the same sheet and choose **Remove all (this series)**, which clears the rule and deletes that series' chapters from the device. To drop the rule but keep the files, use **Downloads → On device**, where each series offers **Stop keeping (keep files)** or **Stop keeping & delete files**. Your server library is untouched either way.

### Save individual chapters

On the chapter list, each downloaded chapter has a **Save to device** button. Tap it to store just that chapter offline; tap it again (it becomes a filled pin) to remove the device copy. Chapters you save by hand are **pinned**: they stick around regardless of the series' keep rule and are never removed by the storage limits below.

## Reading the chapter list

Each chapter row can show **two** indicators, one for the device and one for the server:

| Indicator | Meaning |
| --- | --- |
| **Save** icon | On the server, not yet on this device; tap to save offline |
| **Spinner** | Saving to this device (fills in as pages arrive) |
| **Filled pin** | Saved on this device; tap to remove the device copy |
| **Checkmark** | Downloaded on the server |

So a chapter that's fully available offline shows both a **pin** (on your device) and a **checkmark** (on the server). Deleting the server download also removes the device copy.

## Reading when the server is offline

When Tsumiru can't reach your server, it falls back to what's stored on the device:

* Your **library** shows the series you have saved offline, with their covers.
* Opening a saved chapter reads the pages straight from the device, no network needed.
* Your **reading progress** is saved locally and synced back to the server automatically the next time you reconnect.
* Your **category tabs** work offline too, and you can still hide or show them. A change made offline stays on this device only: it isn't sent to the server, and the server's own setting comes back at the next sync.

The switch happens on its own. If the library is still trying to connect, a **View offline** button appears on the loading screen whenever there are downloads to show. Tap it to go straight to your downloaded library instead of waiting.

Chapters you haven't saved offline aren't available until the server is reachable again.

To see only what you can read offline, open the library **filter** and turn on **On device**.

## Managing storage

The **Downloads** screen has two tabs: **Server** (what your Suwayomi server is downloading) and **On device** (what's stored locally). Open **Downloads → On device** to see everything on this device: total **storage used**, and a row per series with its chapter count and size. From a series page you can **Delete on-device downloads** for that series, and individual chapters can be removed with their pin button.

Tap a series row to open its **Downloaded chapters** screen, which splits that series into **Downloading / Queued**, **Downloaded**, and **Failed**. Each chapter has a **Remove from device** button, and a failed one has **Retry**, so one chapter that didn't come through can be fixed without touching the rest.

You can **pause** and **resume** the on-device download queue from the same screen, so a large batch doesn't have to run all at once.

To configure offline storage, go to **Settings → Downloads** and open the **On device** tab:

* **Storage used**: how much space your offline chapters take up.
* **Remove all downloads**: clears every offline chapter from this device in one step (your server library is untouched).
* **Simultaneous downloads**: how many pages download at once (1–8, default 2). Lower it on a slow or metered connection.
* **Download over Wi-Fi only**: on by default, so background downloads don't spend mobile data. Turn it off to allow downloads on any connection.
* **Download new chapters in the background** *(Android)*: fetch new chapters for series you keep offline without opening the app. Turning it on reveals two more:
  * **Check interval**: how often the background check runs. It's the same schedule the new-chapter check uses (see [Notifications](/docs/guides/notifications)), so setting it in either place sets it in both.
  * **Download files in the background**: when off, background checks only find and queue new chapters. Files download the next time you open the app.

Categories can also download on their own: pick which ones under the download settings, and their new chapters are saved without you asking each time.

### Keeping storage in check

Three optional safety nets keep offline storage from growing without limit. All are **off** by default, and none ever removes chapters you've **pinned** by hand:

* **Delete finished chapters while reading**: remove an auto-kept chapter once you finish it, so storage doesn't pile up. The delete waits until you close the reader, so a chapter never disappears mid-session. Set it per device or for the server under **Settings → Downloads**. The setting names how far back to keep, from **Last read chapter** through **Fifth to last read chapter**. Choose **Second to last read chapter** or further back and a **Keep recently-read chapters downloaded** sub-toggle appears beneath it. Turn that on to re-download any of those kept chapters that go missing from the device.
* **Limit offline storage**: set a ceiling (default 2 GB). When you go over it, the oldest auto-kept chapters are removed first.
* **Auto-remove old downloads**: delete auto-kept chapters older than a set age (default 30 days).

## Downloading in the background

On **Android**, offline downloads keep running when Tsumiru is in the background or closed. A **"Downloading chapters"** notification shows progress (and lets you keep an eye on a long batch without leaving the app open); it clears itself when the batch finishes, and a **Downloads complete** notification lets you know. Turn download notifications on or off under **Settings → Notifications** (see [Notifications](/docs/guides/notifications)).

If your connection drops mid-batch, downloading pauses and waits for the network, then resumes on its own when you're back online, picking up where it stopped. The first time you download in the background, Android may ask you to exempt Tsumiru from battery optimization so it doesn't pause long batches.

When Android won't let a download start at all, **Downloads → On device** shows a banner naming the reason, such as *"Android's background download limit was reached. Open Tsumiru to try again."*, *"Waiting for Wi-Fi."*, or *"No connection. They'll resume when it's back."* Tap **Retry** on the banner to start the queue again there and then.

On **desktop** (Windows, macOS, Linux), downloads continue as long as the app is running, including when its window is minimized.
