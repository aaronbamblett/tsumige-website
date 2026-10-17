---
title: Download
description: Get the latest Tsumiru release for Android, iOS, Windows, macOS, Linux, and the web.
lastUpdated: false
editLink: false
prev: false
next: false
---

<script setup>
import DownloadButtons from "@theme/components/DownloadButtons.vue";
import ReleaseDate from "@theme/components/ReleaseDate.vue";
import Changelog from "@theme/components/Changelog.vue";
</script>

# Download

The latest version of **Tsumiru** was released **<ReleaseDate type="stable" />**. Pick your platform below. Tsumiru runs on **Android, iOS ([sideloaded](/docs/guides/install-ios)), Windows, macOS, Linux, and the web**.

Tsumiru is a client for a [Suwayomi server](/docs/guides/getting-started), so you'll need one running to read. New to it? Start with [Getting started](/docs/guides/getting-started).

<DownloadButtons />

::: tip Stay up to date on Android
Tsumiru signs every release with the same key, so updates install cleanly over the top. For automatic update checks, point an app like [Obtainium](https://github.com/ImranR98/Obtainium) at the [GitHub releases](https://github.com/Suwayomi/Suwayomi-Tsumiru/releases).
:::

## On Linux

The recommended way to run Tsumiru on Linux is the **Flatpak**. It installs from our own signed repo (not Flathub), integrates with your desktop, and **auto-updates**:

```sh
flatpak remote-add --if-not-exists tsumiru https://suwayomi.github.io/Suwayomi-Tsumiru/index.flatpakrepo
flatpak install tsumiru io.github.aaronbamblett.tsumiru
```

> Added the `tsumiru` remote before? It may still point at the old `tsumiru-app.github.io` URL. Run `flatpak remote-delete tsumiru` first, then the commands above.

Then launch it from your app menu, or with `flatpak run io.github.aaronbamblett.tsumiru`. Updates arrive with `flatpak update` (or automatically via your software centre).

For a portable single file, grab the **Linux (AppImage)** above: `chmod +x` it and run. It needs no repo and no install step, but it won't update itself.

## On iOS

The iOS build is **unsigned** and requires **iOS 14 or later**. Apple requires apps to be signed to your own account before they'll run, so it can't be installed by just opening the file. The [installing on iOS](/docs/guides/install-ios) guide walks through the sideloading tools (SideStore, AltStore, TrollStore) and the upkeep each one needs.

SideStore and AltStore can also install and update Tsumiru from a source. Add `https://tsumiru.app/apps.json` under **Sources**, and new releases appear in the app.

<Changelog type="stable" />
