---
title: Playtime
---

# Playtime

1. Select a game and click **Play** to launch it through Tsumige.
2. Close the game when you finish. Tsumige records the session after the tracked game process exits.
3. Open **History** to see **Total**, **Sessions** and **Last played**. Sessions appear newest first, with their start and end times and duration.

For **Steam** games, timing depends on detecting the running game process. Steam playtime is not tracked on macOS.

**Run .exe inside prefix…** does not add playtime. A launch that exits quickly with an error also does not add a session.

If Tsumige stops during a tracked session, it keeps a running marker. On the next start, it recovers playtime up to the last recorded heartbeat. This may be shorter than the time the game actually ran.
