---
title: Troubleshooting
titleTemplate: Guides
description: Facing connection or app issues with Tsumiru? Here's how to troubleshoot.
---

# Troubleshooting

Most Tsumiru problems are connection problems: the app can't reach your Suwayomi server, or reaches the wrong thing. Start here, then check the [FAQ](/docs/faq/general).

## Server connection

Tsumiru connects to your Suwayomi server over the network. Most issues trace back to the connection between the app and the server.

### Verifying your server URL

1. Open **Tsumiru** and navigate to **More → Connection**.
1. Confirm the server URL matches the address and port your Suwayomi server is running on (e.g. `http://192.168.1.100:4567`).
1. Make sure you are using `http://` or `https://` as appropriate; mixing them up is a common source of connection errors.

### Checking that the server is reachable

* Confirm the Suwayomi server is running.
* On the same device, open a browser and navigate to the server URL. If the web UI loads, the server is up and reachable.
* Make sure your device and the server are on the same network, or that the server is properly exposed if you are accessing it remotely.

### Authentication errors

If your Suwayomi server has authentication enabled:

1. Navigate to **More → Connection** in Tsumiru.
1. Enter the correct username and password.
1. Save and try reconnecting.

## General

### Obtaining crash/error logs

The quickest way to grab a log for a bug report is the **Copy crash log** action at the bottom of Settings, which copies the app's latest log to your clipboard. If Tsumiru ever fails to start, the error screen shows the same copy-crash-log button, so you can still get the log when the app won't open.

### Obtaining more logs

To diagnose abnormal app behavior on Android, record device logs using a [Logcat Reader](https://github.com/darshanparajuli/LogcatReader/releases).
