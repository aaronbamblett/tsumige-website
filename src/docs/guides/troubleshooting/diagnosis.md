---
title: Diagnosis
titleTemplate: Troubleshooting - Guides
description: Narrow down whether a problem is your server, a source, your network, or Tsumiru.
---

# Diagnosis

When something isn't working, these steps help you find where the problem is: Tsumiru, your **Suwayomi server**, a source, or the network in between.

## Primary diagnosis

1. **Refresh the series**: pull to refresh the problematic series.
2. **Test another series**: try a different series from the **same source**. If it also fails, the source (on your server) is likely the cause.
3. **Test another source**: if every source fails, the problem is your server or the connection to it, not one source.
4. **Check the server**: open your Suwayomi server's web UI from a browser. If it's down or unreachable there too, fix the server first.
5. **Check the source on the server**: confirm the source is installed and working in the server, and check the **server logs** for errors fetching from it.
6. **Switch networks**: try Wi-Fi vs mobile data, or with/without a VPN, to rule out a network issue between you and the server.
7. **Update Tsumiru and the server**: make sure both are on recent versions.
8. **Restart**: force-close and reopen Tsumiru, and restart the server if needed.

If only you see the problem, see [Personalized issue](#personalized-issue). If others hit it too, see [Widespread issue](#widespread-issue).

## Personalized issue

If you're the only one affected, the cause is usually specific to **your** server, network, or a particular source on your server. Check the server logs around the time of the failure, and confirm the source works from the server's web UI.

::: warning
Some sources enforce their own undisclosed rate limits and protections. Heavy bulk downloading or very large libraries from one source can trip them; these are tuned on the **server** side.
:::

## Widespread issue

If the problem affects everyone, it may be Tsumiru or the source:

1. Check [open issues](https://github.com/Suwayomi/Suwayomi-Tsumiru/issues).
2. Check [closed issues](https://github.com/Suwayomi/Suwayomi-Tsumiru/issues?q=is%3Aissue+is%3Aclosed) in case it's already fixed but not yet released.
3. If it's not reported, open a new issue: include your Tsumiru version, your server version, and the source/series/chapter affected.

::: warning
If a source's website itself is down or broken, there's nothing the server or Tsumiru can do until it recovers.
:::
