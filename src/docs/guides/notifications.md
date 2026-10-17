---
title: Notifications
titleTemplate: Guides
description: Get notified when your followed series get new chapters, when downloads finish, and when something fails.
---

# Notifications

Tsumiru can tell you when there's something new to read, or when something goes wrong, even while the app is closed. Everything lives under **Settings → Notifications**.

## New chapters

**New chapter notifications** let you know when the series you follow get new chapters. Tsumiru checks your library on a schedule and, when something new lands, posts a notification grouped per series (so ten new chapters across three series is three notifications, not ten).

Each one carries quick actions: **Mark as read**, **View chapters**, and **Download**, so you can clear it, jump straight to the chapters, or queue them for offline reading right from the notification.

Turn this off with **New chapter notifications** if you'd rather check for updates yourself.

## Downloads, updates, and errors

The other alerts each have their own switch:

* **Download notifications**: a **Downloads complete** notification when an offline batch finishes.
* **Error notifications**: **Failed downloads and library updates**, so a source going down or a chapter that won't download doesn't go unnoticed.
* **Backup notifications**: when a backup or restore finishes or fails.
* **App update notifications**: when a newer Tsumiru release is available.
* **Extension update notifications**: when your installed extensions have updates waiting.

## Tuning the checks

New-chapter checks run in the background, and a few settings decide when:

* **Check interval**: how often Tsumiru looks for new chapters. The same control appears under **Settings → Downloads → On device**, nested under **Download new chapters in the background**. It's one shared schedule, so changing it in either place changes both.
* **Only on Wi-Fi**: skip the check on mobile data.
* **Only while charging**: skip it unless the device is plugged in.
* **Check now**: run a check immediately instead of waiting for the interval.
* **Hide notification content**: show only a count, not titles or covers, for a bit of privacy on your lock screen.

::: tip Timing
Checks run periodically, not instantly, and some devices restrict background updates to save battery. If notifications seem late or missing, exempt Tsumiru from battery optimization in your system settings.
:::
