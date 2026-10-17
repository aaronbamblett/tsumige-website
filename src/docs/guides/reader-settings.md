---
title: Reader settings
titleTemplate: Guides
description: Reading modes, page layout, zoom, color filters, and per-series overrides. Where each reader setting lives and what it does.
---

# Reader settings

Reader settings live in two places:

* **Settings → Reader** holds the global defaults that apply to every series.
* Inside the reader, the **gear** in the bottom bar opens a settings sheet with three tabs: **Reading Mode**, **General**, and **Custom filter**. Changes apply as you make them, and the **For this series** block at the top of the first tab overrides settings for just the series you're reading.

Per-series overrides are stored on the server, so they follow the series to your other devices.

## Reading modes

Pick a mode from the **Reading mode** chips in the sheet:

* **Long strip**: continuous vertical scroll with no gaps (best for manhwa and webtoons).
* **Long strip with gaps**: continuous vertical scroll with a small gap between pages.
* **Paged (left to right)**: one page at a time, turning left to right.
* **Paged (right to left)**: page-by-page in traditional manga order (the default).
* **Paged (vertical)**: page-by-page, turning vertically.
* **Default**: follow your global default (when set for a series).

The factory default is **Paged (right to left)**. Manhwa, manhua, and webtoons still open as a long strip when **Auto reading mode** is on (see below). In the long strips, reaching the end of a chapter scrolls straight on into the next one.

**Settings → Reader** offers those same modes under the same names, plus two that don't appear as chips in the sheet: **Continuous horizontal (LTR, legacy)** and **Continuous horizontal (RTL, legacy)**. Both scroll the pages sideways in one continuous strip instead of turning them one at a time, left to right or right to left. A series set to either shows a single **Continuous horizontal (legacy)** chip in the sheet until you pick another mode.

## For this series

Everything in the sheet's **For this series** block overrides the global default for the current series only:

* **Reading mode**: the chips above.
* **Rotation**: lock or free the screen orientation for this series: **Default**, **Free**, **Portrait**, **Landscape**, **Locked portrait**, **Locked landscape**, or **Reverse portrait**.
* **Tap zones**: the tap layout for paging: **Default**, **L Shaped**, **Kindle-ish**, **Edge**, **Right And Left**, or **Disabled**. Tap zones are on out of the box: **Default** picks **Right And Left** for the horizontal paged modes and **L Shaped** everywhere else.
* **Invert tap zones**: flip the tap directions: **None**, **Horizontal**, **Vertical**, or **Both** (shown while tap zones are enabled).
* **Reader Padding**: side margins so pages aren't edge-to-edge.
* **Magnifier Size**: how large the long-press magnifier is (long-press and drag to magnify part of a page).

Below that block, the tab shows the settings for whichever reader the current mode uses, under a **Paged** or **Long strip** heading. Those groups are global and mirror the same groups in **Settings → Reader**.

## Paged modes

The **Paged** group controls the paged modes:

* **Scale type**: how each page fits the screen: **Fit screen**, **Fit width**, **Fit height**, **Original size**, **Smart fit**, or **Stretch**.
* **Page layout**: **Single page**, **Double pages**, or **Automatic** (two pages side by side when the screen has room).
* **Center margin type**: add a gutter down the middle of a spread: **None**, **Double pages**, **Wide pages**, or **Double and wide**.
* **Split wide pages**: cut a double-width scan into two screen-sized halves. **Invert split pages placement** swaps which half you see first.
* **Rotate wide pages to fit**: turn a wide page 90° so it fills the screen instead of shrinking. **Invert rotation of wide pages** rotates it the other way.
* **Invert double pages**: swap the left/right order of a double-page layout.
* **Dual page spread in landscape**: show a true two-page spread when the device is in landscape.
* **Crop borders**: trim the empty margins around pages.
* **Smaller tap zones**: shrink the page-turn tap areas.
* **Animate page transitions**: animate page turns instead of snapping.
* **Auto advance interval**: the pace for hands-free page turning (see [auto-scroll](#auto-scroll-and-auto-advance)).
* **Pan wide images**: pan across a page that's wider than the screen instead of shrinking it.

### Zoom

Each reader has its own zoom settings, so changing one doesn't touch the other:

* **Double tap to zoom**: on by default. Double-tap to zoom in at the point you tapped, and double-tap again to zoom back out.
* **Pinch to Zoom**: pinch to zoom.
* **Disable zoom in** / **Disable zoom out**: turn off zooming in that direction (the long strips only offer **Disable zoom out**).

## Long strips

The **Long strip** group covers every continuous mode: **Long strip**, **Long strip with gaps**, and both **Continuous horizontal** modes, which scroll sideways rather than down.

* **Long strip scale**: how the strip fits the window: **Fit screen**, **4:3**, **3:2**, **16:9**, **20:9**, or **Original size**, which shows pages at their true size instead of stretching them to fit.
* **Maximum width**: cap how wide the strip can grow, as a percentage of the window (**%**) or a fixed pixel width (**px**). It's greyed out under **Original size**, since pages at their native size never widen.
* **Crop borders**: trim page margins, set separately for **Long strip** and **Long strip with gaps**.
* **Smaller tap zones**: shrink the page-turn tap areas.
* **Smooth Auto Scroll** and **Auto scroll interval**: the glide and pace for hands-free scrolling (see [auto-scroll](#auto-scroll-and-auto-advance)).
* **Keyboard scroll distance**: how far each key press scrolls on a keyboard: **Tiny**, **Small**, **Medium**, or **Large**.
* **Animate page transitions**: animate page jumps instead of snapping.

The tap-zone and zoom settings apply per reader here too, so the strips can behave differently from the paged modes.

## Auto-scroll and auto-advance

Tsumiru can move through a chapter hands-free. Pull down the handle at the top of the reader to open the auto-scroll bar, then flip the switch:

* In the long-strip modes it's **Auto scroll**: the page glides down on its own.
* In the paged modes it's **Auto advance**: it turns one page at a time.

The **−** and **+** buttons set the pace in seconds per step, from 1 to 30. Long strips start at 3 seconds and paged modes at 5, and each remembers its own pace. The same paces live in the settings sheet as **Auto scroll interval** (Long strip) and **Auto advance interval** (Paged). It stops the moment you scroll or swipe by hand, when you switch away from the app, and when there are no more pages to show. On a keyboard, **Space** starts and stops auto-scroll in the long-strip modes, and **=** / **−** change the pace.

**Smooth Auto Scroll** (in the **Long strip** group, on by default) makes the long-strip glide a continuous drift; turn it off for a fixed jump each interval.

## General tab

The sheet's **General** tab collects the global display and behavior settings (also in **Settings → Reader**):

* **Background color**: **Black**, **Gray**, **White**, or **Auto**.
* **Show page number**: overlay the current page number while you read.
* Seekbar: vertical modes run the seekbar down the side. **Left-handed vertical seekbar** moves it to the left, **Show vertical seekbar in landscape** keeps it vertical in landscape, and **Force horizontal seekbar** makes it horizontal everywhere.
* **Fullscreen**: hide the system bars while reading. **Show content in cutout area** lets pages extend into the camera cutout.
* **Keep screen on**: hold the screen awake while you're reading.
* **Show actions on long tap**: on by default. Long-press a page for **Copy**, **Open In Web**, **Share image**, and **Save to gallery**.
* **Always show chapter transition**: always show the between-chapters transition page.
* **Flash on page change**: flash the screen on each page turn (helps ghosting on e-ink screens). Tune it with **Flash duration**, **Flash every** (1 to 10 pages), and **Flash with** (**Black**, **White**, or **White and Black**).
* **Auto reading mode**: open manhwa, manhua, and webtoons in the long-strip reader automatically.

## Custom filter tab

On the **Custom filter** tab the sheet's backdrop turns transparent so the page stays visible, and every change previews live:

* **Custom brightness**: a reader-only brightness level, independent of the system slider.
* **Custom color filter**: tint the page with **Red**, **Green**, **Blue**, and **Alpha** sliders, and pick a **Color filter blend mode**: **Default**, **Multiply**, **Screen**, **Overlay**, **Dodge / Lighten**, or **Burn / Darken**.
* **Grayscale**: render pages in black and white.
* **Inverted**: invert page colors.

## Only in Settings → Reader

A few settings live only on the global screen:

* **Tap zones** and **Invert tap zones**: the global tap-zone defaults, set separately in the **Paged** and **Long strip** groups (the per-series versions are in the sheet).
* **Show tap zones overlay**: briefly flash the tap layout when you open a chapter (off by default).
* **Swipe toggle**: swipe to change chapter. **Last page swipe** restricts that to the last/first page only.
* **Volume Keys**: page with the volume keys, with an **Invert Volume Keys** option *(Android)*.
* **Reader initial overlay**: show the title and controls when you open a chapter.
* **Scroll animation**: animate page jumps instead of snapping instantly.
* **Reading feedback toasts**: turn off to hide messages like "loading next chapter" and "no more chapters".
* **Ignore Safe Area**: let content extend into the notch and home-indicator areas *(Android & iOS)*.

The page number, chapter-skip buttons, bookmark toggle, and the settings gear all live in the reader's bottom bar. Tap the page to bring up the overlay.
