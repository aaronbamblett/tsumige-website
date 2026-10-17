---
title: Getting started
titleTemplate: Guides
description: Connect Tsumiru to your Suwayomi server and start reading.
---

# Getting started

Tsumiru is a **client** for [Suwayomi](https://suwayomi.org/) (also known as Tachidesk). Your sources, extensions, downloads, and library all live on your **Suwayomi server**. Tsumiru is the reader you point at it. Once your server is running, the same library is available from every Tsumiru app: Android, desktop, and the web.

## 1. Set up a Suwayomi server

If you don't already have one, you'll need a running Suwayomi-Server. It's free and open-source, and runs on Windows, macOS, Linux, Docker, or a NAS/home server.

* **Suwayomi-Server:** [github.com/Suwayomi/Suwayomi-Server](https://github.com/Suwayomi/Suwayomi-Server)
* Follow its README to install the server and add your source extensions there.

> You install and update extensions from Tsumiru itself: **Browse → Extensions** puts them on the server, and every connected client can then use them. See [Browse: sources & extensions](/docs/guides/browse-and-extensions).

## 2. Download Tsumiru

Visit the [download page](/download/) and grab the build for your platform:

* **Android**: install the `.apk` (use the universal APK if unsure).
* **Windows / macOS / Linux**: download and extract the desktop build.
* **Web**: host the web build, or open it from wherever you've deployed it.

## 3. Connect to your server

The first time you open Tsumiru, a short setup wizard walks you through it:

1. Pick a theme. You can change it later, and pick from more themes, under [Settings → Appearance](/docs/faq/settings#how-do-i-change-the-theme).
2. On **Connect your server**, point Tsumiru at your server. Two helpers do the work:
   * **Search my network** scans your local network and fills in a Suwayomi server automatically. On the same Wi-Fi this is the easiest path.
   * **Test connection** checks an address you type. You can enter just the host (`192.168.1.10` or `suwayomi.mydomain.com`) and Tsumiru works out the scheme and port for you, trying Suwayomi's default **4567** first. For a custom port, include it: `192.168.1.10:4568`. It then tells you exactly what it found: connected, needs a login, unreachable, or reached something that isn't Suwayomi.
3. If your server sits behind an authentication gateway, Zero Trust guard, or reverse proxy that expects extra headers, add them under **Custom HTTP headers** on this same step, using **Add header** with a **Header name** and **Header value**. Do it before you test: without them the test can't reach your server at all, so it reports a failure that has nothing to do with the address you typed.
See [Reaching your server from anywhere](/docs/guides/remote-access) if you want to read away from home.
4. If your server needs a sign-in, **Test connection** detects it and reveals a login form. Enter your username and password. Tsumiru works out which of Suwayomi's auth modes (Basic / Simple / UI login) to use, or pick the mode yourself, then tap **Sign in**.
5. Finish, and your library loads.

If you're in a hurry, **Skip** (top-right) lets you set things up later. You can change the address, sign-in, and headers any time under **More → Connection**.

> **Tip:** A local-network address (`192.168.x.x`, default port 4567) is the simplest place to start. To read away from home too, put your server behind a reverse proxy with HTTPS and enter that domain as the **Server URL**, then add your LAN address as the **Internal / LAN URL**. Tsumiru uses whichever one can reach the server, so the same app works at home and away.

## 4. Browse sources and build your library

Because sources live on the server, anything you've enabled in Suwayomi shows up in Tsumiru automatically.

1. Open the **Browse** tab to see the sources available on your server.
2. Pick a source and use its **Popular** / **Latest** listings, or search for a title.
3. Open a series and tap **Add to Library**. It's now in your library on every device.

**Pin** the sources you use most to keep them at the top of the Browse list. When you search across sources, you can filter that global search down to the sources you care about.

### Trouble finding a specific series?

* Check your spelling, and try the **romanized** title; some sources index by it.
  > Example: **Boku no Hero Academia** instead of **My Hero Academia**.
* Some sources use slightly different spellings.
  > Example: **3-gatsu no Lion** instead of **Sangatsu no Lion**.

## 5. Read

Open any series, tap a chapter, and you're reading. Tsumiru's continuous reader is built for long webtoon strips: vertical scrolling with pinch-to-zoom. See [Reader settings](/docs/guides/reader-settings) to tailor it to how you read.
