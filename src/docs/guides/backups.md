---
title: Backups
titleTemplate: Guides
description: Back up and restore your library, right from Tsumiru.
---

# Backups

Your library (series, categories, and read history) lives on your **Suwayomi server**, and Tsumiru can create and restore the server's backups directly. Open **Settings → Backup & Restore**.

A backup is a standard Suwayomi (Tachidesk) backup file, so it can be restored to any Suwayomi server.

## Create a backup

1. Go to **Settings → Backup & Restore → Create Backup**.
2. Choose what to include: **Categories**, **Chapters**, **History**, and **Tracking** (all on by default).
3. The server generates the backup file and hands it to you to download. Save it somewhere safe.

## Restore a backup

1. Go to **Settings → Backup & Restore → Restore Backup**.
2. Pick your backup file (`.gz` or `.tachibk`).
3. Tsumiru validates it first and warns you if any **sources are missing** (you'd want those installed on the server for everything to resolve). It then uploads the file and the server restores it, showing progress as it goes.

::: warning
Restoring merges/overwrites library data on the server. Create a fresh backup first if you're unsure.
:::

## Automatic backups

Under **Settings → Backup & Restore → Automatic Backup** you can have the server back up on a schedule:

* **Backup Location**: a path on the server where automatic backups are saved.
* **Backup Time**: the time of day to run.
* **Backup Interval**: how often, in days.
* **Backup Cleanup**: how long to keep old backups before they're pruned.

## What isn't in a backup

The backup covers your **server-side** library, which includes per-series reader settings. Tsumiru's own device-local preferences (global reader defaults, sort/filter/display choices) aren't part of it (you'd reconfigure those if you reinstall or switch devices). Note that because everything else is on the server, pointing a new device at the same server already restores your library and progress without a backup.
