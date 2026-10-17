---
title: Settings
titleTemplate: Frequently Asked Questions
description: A tour of Tsumiru's settings.
---

# Settings

Tsumiru's settings are split into these sections:

* **General**: app language, quick search, and request-timeout behaviour.
* **Appearance**: theme and look of the app.
* **Library**: global update interval, skip rules, and category management.
* **Downloads**: server and on-device download options, split into **Server** and **On device** tabs (see [Offline reading](/docs/guides/offline-reading)).
* **Notifications**: new-chapter, download, update, and error alerts (see [Notifications](/docs/guides/notifications)).
* **Reader**: reading mode and all reader behaviour (see [Reader settings](/docs/guides/reader-settings)).
* **Browse**: source/server browse options.
* **Backup & Restore**: create and restore server backups (see [Backups](/docs/guides/backups)).
* **Tracking**: connect tracker accounts like AniList (see [Tracking](/docs/guides/tracking)).
* **Server**: the Suwayomi server's own admin config (bindings, proxy, Cloudflare, and so on). This configures the server itself, not how this app connects to it.

How Tsumiru **connects** to the server (its address, your sign-in, and any headers it needs) lives separately under **More → Connection**.

## How do I connect to my server?

Open **More → Connection**. Under **Server address**, set the **Server URL** to the full address of your server, port included: `http://192.168.1.10:4567`. There's no separate port field. The port is part of the URL.

## Can I have one address at home and another away?

Yes, and Tsumiru switches between them for you. Under **Server address**, tap **Add a local network address** and fill in the **Internal / LAN URL** (for example `http://192.168.1.100:4567`); the **Server URL** above it stays as the address that works from anywhere else. On non-web platforms the LAN row has an auto-discovery button to find a server on your network.

Once both are set, an **Active connection** row appears showing which one Tsumiru is on: **Using LAN** or **Using remote**.

## My server needs a login: how do I authenticate?

Under **More → Connection → Authentication**, pick an **Authentication Type**:

* **None**: no authentication.
* **Basic Auth**: HTTP basic auth (username + password), e.g. when your server sits behind a reverse proxy.
* **Simple Login**: the server's older username-and-password sign-in.
* **UI Login (recommended)**: the sign-in the server's own web UI uses. Tsumiru signs in once and stays signed in.

Enter your **Credentials** for the chosen type. Use **Log out** to clear stored credentials. Credentials are kept in your device's secure storage.

If your sign-in expires while you're using Tsumiru, an inline banner asks you to sign in again. It doesn't log you out — sign in from the banner and you carry on where you were.

## My server sits behind a gateway that needs extra headers: how do I add them?

Add them under **More → Connection → Custom HTTP headers**. Tap **Add header**, fill in the **Header name** and **Header value**, and save. They're sent with every request Tsumiru makes to your server, and you only need them when the server sits behind an authentication gateway, Zero Trust guard, or reverse proxy that expects extra headers.
For the wider picture, see [Reaching your server from anywhere](/docs/guides/remote-access).

## What about proxy or advanced connection settings?

Proxy, Cloudflare, and binding options are **server-side**, configured under **Settings → Server**. Tsumiru surfaces whatever settings your server exposes; the server does the work. **Custom HTTP headers** is the exception: it's a setting on this device, on the Connection screen, because it decides how Tsumiru reaches the server in the first place.

## Why are some requests timing out?

Under **Settings → General → Timeout Settings** you can raise the **Server Request Timeout** and enable **Auto-refresh on Timeout** (with a retry delay). This helps on slow connections or a busy server.

## How do I change the theme?

**Settings → Appearance** controls how the app looks:

* **App Theme Mode**: **System**, **Light**, or **Dark**.
* **Pure black (AMOLED)**: swap dark backgrounds for true black to save power on OLED screens (shown in the dark and system modes).
* **Theme**: pick from the built-in themes — **Indigo Night** (the default), **Carbon**, **Plum**, **Regression**, **Ember**, **Synthwave**, **Terminal**, **Catppuccin Mocha**, **Nord**, **Gruvbox**, **Dracula**, **Monochrome**, **Royal**, or **Custom**.
* **Custom color**: with **Custom** picked, choose your own accent color from the wheel.
* **Manga Grid Size**: how large the covers are in the library grid.
* **Show recommendations**: show a row of similar titles on a series' details page (on by default; see [reading suggestions](/docs/faq/library#can-tsumiru-suggest-similar-titles)). **Recommendations in overflow** tucks that row into the overflow menu instead.

## What is Quick Search?

Quick Search is an overlay you open with `Ctrl` + `F` or `Ctrl` + `P` (see [Keyboard shortcuts](/docs/guides/keyboard-shortcuts)). It searches your **library**, offers **Go to** jumps to screens, settings, and categories, and can hand your text to a full **source search** across your extensions. It understands the same `key:value` [search operators](/docs/faq/library#how-do-i-search-my-library) as the library search box. Turn it on or off with **Quick Search** in **Settings → General**. Since a keyboard shortcut is the only way to open it, it's hidden on phones and tablets.

## Does Tsumiru have an incognito mode?

Turn on **Incognito mode** from the **More** menu and Tsumiru stops recording reading history and "last read" progress while it's active. You can read or catch up on something without it showing up in your history or reordering your library. While it's on, an app-wide banner keeps the state visible. Tap the banner to switch it back off. It's **session-only**, so it also resets whenever you restart the app.

Incognito works well with **hideable categories** (see [Categories](/docs/guides/categories)), which keep chosen library tabs off the main view entirely.

This is a [Komikku](https://github.com/komikku-app/komikku)-style feature.

## How do I hide adult content?

Turn off adult content in **Settings → Browse**. This hides adult sources entirely, not just adult extensions, so their entries stay out of browse and search.

## Is there an app lock / biometric lock?

Not yet. Tsumiru has no app-lock or screenshot-blocking today (though it does have an [incognito mode](#does-tsumiru-have-an-incognito-mode)). If app-lock matters to you, [open an issue](https://github.com/Suwayomi/Suwayomi-Tsumiru/issues).
