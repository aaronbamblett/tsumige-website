---
title: Common issues
titleTemplate: Troubleshooting - Guides
description: Facing issues connecting Tsumiru to your server or loading content? Here's how to tackle common challenges.
---

# Common issues

## Connection issues

### Tsumiru can't connect to my server

Tsumiru requires a running Suwayomi server to function. If you see a connection error:

* **Check the server URL.** Go to **More → Connection** and verify the whole address, including the port and scheme (`http` vs `https`). The port is part of the **Server URL**, not a field of its own. A common mistake is using `https://` when the server is only listening on plain `http://`.
* **Check which address is in use.** If you've set an **Internal / LAN URL** as well, the **Active connection** row says whether Tsumiru is **Using LAN** or **Using remote**. A LAN address won't answer when you're away from home, and a remote one may not resolve on your own network.
* **Check that the server is running.** Open the server's web UI in a browser from the same device. If the browser can't load it either, the server is not running or not reachable.
* **Check your network.** If the server is on your local network, make sure your device is on the same network (not on mobile data). If accessing remotely, confirm your reverse proxy or port forwarding is set up correctly.
* **Check authentication.** If your Suwayomi server requires a login, make sure the credentials in **More → Connection** are correct.
* **Read offline in the meantime.** If you keep chapters on your device, a **View offline** button appears on the library's loading screen while it can't reach the server. Tap it to open your downloaded library without waiting. See [Offline reading](/docs/guides/offline-reading).

### "Test connection" couldn't confirm it's Suwayomi

In the setup wizard, **Test connection** probes the address you typed and only reports success if it gets a genuine Suwayomi response. If you see *"Reached …, but it didn't respond as a Suwayomi server"*:

* **Check the port.** Tsumiru tries Suwayomi's default **4567** first, then the bare port (`:80` / `:443`). If your server runs on a different port, type it explicitly, e.g. `192.168.1.10:4568`. The message shows the exact address **and port** that answered, so you can see what was actually reached.
* **You probably reached something else.** A bare LAN IP on `:80` is often a router's admin page or another app, not Suwayomi. Point Tsumiru at the host *and port* where Suwayomi is listening.
* **Confirm Suwayomi is running** and reachable from this device by opening its web UI in a browser first.
* **Behind a reverse proxy?** Enter its `https://` domain instead of the LAN IP. See Suwayomi's [server configuration docs](https://github.com/Suwayomi/Suwayomi-Server) for port and base-URL settings.

### My server needs a login

Tsumiru supports all of Suwayomi's authentication modes (**Basic auth**, **Simple login**, and **UI login**) as well as no auth. When a server is protected, the setup wizard detects it and prompts for your username and password, then works out the right mode for you. If it can't tell, choose the mode you configured on the server. For how each mode works, see [Suwayomi-Server](https://github.com/Suwayomi/Suwayomi-Server) and its configuration docs.

### Connected but library is empty

Sources and extensions are managed on the **Suwayomi server**, not inside Tsumiru. If your library appears empty:

* Open your Suwayomi server's web UI and confirm that sources/extensions are installed and that you have series in your library.
* If the server library is populated but Tsumiru shows nothing, try refreshing or re-syncing from the Tsumiru library screen.

## Content loading issues

### Images won't load

* Confirm Tsumiru is connected to the server (check **More → Connection**).
* The server fetches images from the source on demand. If a source is slow or rate-limiting, images may fail to load. Try again after a moment.
* Check that the Suwayomi server has network access to the source.

### Reading is laggy

* High-resolution chapter images can cause lag, especially on lower-end hardware. The Suwayomi server serves images as-is from the source; this is a function of source image sizes.
* Close other apps to free RAM (on Android and other memory-constrained platforms).

### Slow loading

Content loading speed depends on your Suwayomi server's connection to the source and your device's connection to the server. Slowness is usually caused by:

* The source being slow or applying rate limits.
* A slow network connection between your device and the server.
* The server being on hardware with limited resources.

## Download issues

### On-device downloads never start (Android)

Android decides when a background job may run, and it can refuse. When it does, **Downloads → On device** shows a banner naming the reason: *"Android's background download limit was reached. Open Tsumiru to try again."*, *"Waiting for Wi-Fi."*, *"No connection. They'll resume when it's back."*, or *"Couldn't start downloads. Tap Retry in Downloads to try again."*

Tap **Retry** on the banner to start the queue again with the app open, which is when Android is most likely to allow it. If it keeps happening, exempt Tsumiru from battery optimization in your system settings, and check **Download over Wi-Fi only** under **Settings → Downloads → On device** if you're on mobile data. See [Offline reading](/docs/guides/offline-reading).

## Update issues

### App updates won't install (Android)

When installing a new version of Tsumiru on Android, the signing certificate of the new APK must match the installed version.

* If you downloaded Tsumiru from a different source than the currently installed version (e.g. switching from a debug build to a release build or vice versa), Android will block the install due to a signature mismatch. Uninstall the existing version first, then install the new one.
* Download the correct APK for your device's CPU architecture, or use the universal APK if unsure.

## HTTP errors from the server

These errors appear when Tsumiru receives an unexpected HTTP response from your Suwayomi server or from a source via the server.

### `HTTP Error: 401` - Unauthorized
Your server credentials are incorrect or have expired. Go to **More → Connection** and re-enter your username and password.

### `HTTP Error: 403` - Forbidden
The server or the source is refusing the request. Check that your server credentials are correct.

If your server sits behind an authentication gateway, a Zero Trust guard, or a reverse proxy, the 403 is likely coming from that rather than from Suwayomi. Add the headers it expects under **More → Connection → Custom HTTP headers** with **Add header**, a **Header name**, and a **Header value**.
See [Reaching your server from anywhere](/docs/guides/remote-access) for the full setup.

If the source itself is returning 403, the source may be enforcing IP-based blocking or rate limits. This is a server-side issue to investigate in the Suwayomi server logs.

### `HTTP Error: 404` - Not Found
The requested resource does not exist. The series or chapter may have been removed from the source.

### `HTTP Error: 429` - Too Many Requests
The source has temporarily rate-limited the server's IP. Pause downloads on the server and wait before retrying.

### `HTTP Error: 5xx`
The Suwayomi server or the upstream source is experiencing an error. Check the server logs for details.

::: warning
For unlisted errors or if the steps above don't resolve your issue, refer to [Diagnosis](/docs/guides/troubleshooting/diagnosis) or open an issue at [github.com/Suwayomi/Suwayomi-Tsumiru](https://github.com/Suwayomi/Suwayomi-Tsumiru).
:::
