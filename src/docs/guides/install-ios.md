---
title: Install on iOS (sideloading)
titleTemplate: Guides
description: Install Tsumiru on iPhone or iPad by sideloading the unsigned .ipa with SideStore, AltStore, or TrollStore, and how updates and re-signing work.
---

# Install on iOS (sideloading)

There is **no App Store build** of Tsumiru. Every release ships an **unsigned `.ipa`**, and Apple won't let an iPhone run an app that isn't signed, so you can't download it and tap Install. Instead, a sideloading tool signs the app **to your own Apple account** on your own device.

Tsumiru requires **iOS 14 or later**.

## 1. Grab the .ipa

Download the file ending in **`-ios.ipa`** from the [latest release](https://github.com/Suwayomi/Suwayomi-Tsumiru/releases/latest).

## 2. Pick a sideloading tool

All three tools do the same core job: sign the `.ipa` with your Apple account and install it. They differ in how much upkeep they need.

### SideStore (best for most people)

[sidestore.io](https://sidestore.io/)

SideStore signs and refreshes apps **on the device itself**. After the one-time setup, no computer is needed. Apps signed with a regular Apple account expire every 7 days, and SideStore quietly re-signs them in the background before that happens. Follow the setup guide at [docs.sidestore.io](https://docs.sidestore.io/), then open the Tsumiru `.ipa` with SideStore to install.

### AltStore (needs a computer nearby)

[altstore.io](https://altstore.io/)

AltStore works the same way but does its re-signing through **AltServer**, a companion app running on your Windows PC or Mac. The 7-day expiry only gets refreshed while that computer is **powered on and on the same Wi-Fi** as your phone. If your computer is often off or you travel a lot, expect the app to occasionally expire until you're back home to refresh it.

### TrollStore (permanent, older iOS only)

[TrollStore on GitHub](https://github.com/opa334/TrollStore) · [install guide](https://ios.cfw.guide/installing-trollstore/)

TrollStore exploits a signing bug to install apps **permanently**, with no signing expiry and no refreshing. The catch: that bug only exists on certain iOS versions (roughly iOS 14.0–16.6.1, plus 16.7 RC and 17.0; anything newer will never be supported). If your device is on a supported version, this is the most hassle-free option. Check the install guide to see if yours qualifies.

## Expiry and account limits

* With a **free** Apple account, sideloaded apps expire after **7 days** and you can have at most **3 sideloaded apps** installed at once. SideStore and AltStore both automate the re-signing; an expired app won't open until it's refreshed, but your reading data is untouched.
* A **paid** Apple Developer account ($99/year) extends signing to a year and lifts the 3-app cap. Not required unless the 7-day refresh or the 3-app cap bites you.
* **TrollStore** skips all of this, on the iOS versions where it works.

## Add the Tsumiru source

Tsumiru publishes a source that SideStore and AltStore can read, so new releases show up in the app instead of you checking the releases page.

```text
https://tsumiru.app/apps.json
```

In SideStore or AltStore, open **Browse**, tap **Sources**, tap **+**, and paste that URL. Tsumiru then appears in the source with an **Install** button, and later releases show an **Update** button.

TrollStore has no source support. Keep installing the `.ipa` by hand.

## Updating Tsumiru

A refresh only re-signs the version you already have. It doesn't update the app.

With the source added, tap **Update** when a new release appears. Otherwise download the new `.ipa` and install it through the same tool. Either way it replaces the old version and keeps your settings.
