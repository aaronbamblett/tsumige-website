---
title: Reaching your server from anywhere
titleTemplate: Guides
description: Connect to your Suwayomi server at home and away.
---

# Reaching your server from anywhere

Your Suwayomi server's local address works on your home network.
On mobile data or another Wi-Fi network, that address isn't reachable unless you have a VPN connection back home.
To keep reading from your server, you need either a remote address or a VPN.

If you haven't connected Tsumiru yet, start with [Getting started](/docs/guides/getting-started).

## Choosing how to connect

Set up remote access outside Tsumiru first.
There are three common approaches:

* A reverse proxy gives you a domain with HTTPS, such as `https://manga.example.com`, and forwards requests to Suwayomi.
  You manage the domain, certificates and access controls.
* A tunnel, such as [Cloudflare Tunnel](https://developers.cloudflare.com/tunnel/), connects your server to a public address without opening an inbound port on your router.
  You depend on the tunnel provider and still need authentication to control who can reach your server.
* A VPN, such as Tailscale or [WireGuard](https://www.wireguard.com/), connects your device back to your home network.
  With access to your home LAN configured, no remote address is needed: your LAN address keeps working while the VPN is connected.
  Tailscale calls this [subnet routing](https://tailscale.com/docs/features/subnet-routers).

A proxy or tunnel gives you an address you can use without connecting a VPN on each device.
A VPN keeps access private, but you need to connect it when you're away.
If you expose your server through a proxy or tunnel, use HTTPS and require authentication.

## Using one setup at home and away

If you have both a remote address and a local address, open **More** → **Connection**:

1. Set **Server URL** to your remote address, such as `https://manga.example.com`.
2. Tap **Add a local network address** to reveal the optional **Internal / LAN URL**.
3. Enter your server's home-network address, including its port.
   The field's placeholder is `http://192.168.1.100:4567`; use your own server's address.

Both addresses must lead to the same Suwayomi server.
Tsumiru picks whichever is reachable and switches automatically when your network changes.
You don't need to change the address each time you leave home.

Once both addresses are set, the **Active connection** row shows **Using LAN** or **Using remote**.

If you use a VPN back to your home LAN, keep your LAN address in **Server URL**.
You can leave **Internal / LAN URL** empty.

## When your server needs extra headers

An authentication gateway, Zero Trust guard or reverse proxy may require extra headers before it lets requests through to Suwayomi.
Cloudflare Access is a common example: its [service tokens](https://developers.cloudflare.com/cloudflare-one/access-controls/service-credentials/service-tokens/) let an app authenticate using headers.

On the same **Connection** screen, find **Custom HTTP headers**.
Tap **Add header** and fill in **Header name** and **Header value** with the details your gateway requires.
Repeat for each required header.
These headers go with every request Tsumiru makes to your server.

::: tip Add headers before testing
During onboarding, enter these headers before you test the connection.
The connection test itself cannot reach a gated server without them, even when the server address is correct.
:::

## If you can't connect

* Check **Active connection** to see which address Tsumiru is actually using.
* If you use a VPN, check that it's connected and allows access to your home LAN.
* A `403` usually means a gateway is rejecting the request before it reaches Suwayomi.
  If the gateway requires headers, check **Custom HTTP headers** for missing or incorrect names and values.
  Adding the required headers lets the request through when the gateway's access policy permits it.

For server sign-in options, see [Connection settings](/docs/faq/settings#my-server-needs-a-login-how-do-i-authenticate).
If you want to read without reaching your server at all, see [Offline reading](/docs/guides/offline-reading).
