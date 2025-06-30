---
title: A Firefox Config
pubDatetime: 2025-05-29
author: B. Burt
featured: true
draft: false
tags:
   - browsers
   - firefox
   - tech
description:
   Some settings to change in Firefox's about:config for convenience, privacy, and security
---

## About about:config

If you're not familiar with the about:config area of Firefox, let me introduce you. It's easy.

Go to your handy-dandy address bar (where it says something like https://somesite.here), clear it out and enter the word "about" and then a colon ":" and then the word "config" and hit enter.

There should be a little warning that pops up (you can clear the checkbox if you don't want to see the warning again) go ahead and click the button.

By default I think it's blank at first. If you want to, you can copy settings from below and paste into the search box (not the address bar) then double click the setting to change it. Double click again to revert your change.

These are settings for convenience, privacy and security borrowed appreciatively from: [https://vermaden.wordpress.com/2024/03/18/sensible-firefox-setup/](https://vermaden.wordpress.com/2024/03/18/sensible-firefox-setup/)

---

## The Settings

- browser.cache.memory.enable
   - false

- browser.compactmode.show
   - true

- browser.display.show_image_placeholders
   - false

- browser.download.alwaysOpenPanel
   - false

- browser.download.autohideButton
   - false

- browser.download.saveLinkAsFilenameTimeout
   - 0

- browser.link.open_newwindow.restriction
   - 0

- browser.link.open_newwindow
   - 3

- browser.search.openintab
   - true

- browser.search.suggest.enabled
   - false

- browser.sessionhistory.max_entries
   - 5

- browser.sessionstore.interval
   - 85000

- browser.tabs.insertRelatedAfterCurrent
   - false

- browser.tabs.tabMinWidth
   - 16

- browser.tabs.loadBookmarksInTabs
   - true

- dom.block_download_insecure
   - false

- dom.event.contextmenu.enabled
   - false

- dom.media.autoplay-policy-detection.enabled
   - false

- dom.webnotifications.enabled
   - false

- general.smoothScroll.lines
   - false

- general.smoothScroll.mouseWheel
   - false

- general.smoothScroll.other
   - false

- general.smoothScroll.pages
   - false

- general.smoothScroll.pixels
   - false

- general.smoothScroll.scrollbars
   - false

- geo.enabled
   - false

- image.jxl.enabled
   - true

- media.autoplay.allow-extension-background-pages
   - false

- media.autoplay.default
   - 0

- media.block-autoplay-until-in-foreground
   - false

- media.peerconnection.enabled
   - false

- media.webrtc.hw.h264.enabled
   - false

- network.prefetch-next
   - false

- network.trr.mode
   - 5

- privacy.firstparty.isolate
   - true

- privacy.firstparty.isolate.block_post_message
   - true

- privacy.trackingprotection.enabled
   - true

- security.dialog_enable_delay
   - 0

- security.notification_enable_delay
   - 0

- security.tls.version.fallback-limit
   - 0

- security.tls.version.max
   - 4

- security.tls.version.min
   - 0

- security.tls.insecure_fallback_hosts
   - 10.20.30.40

- widget.gtk.overlay-scrollbars.enabled
   - false

- toolkit.scrollbox.smoothScroll
   - false

- browser.safebrowsing.downloads.enabled
   - false

- browser.safebrowsing.downloads.remote.url
   - 127.0.0.1

- browser.safebrowsing.malware.enabled
   - false

- browser.safebrowsing.provider.google.advisoryURL
   - 127.0.0.1

- browser.safebrowsing.provider.google.gethashURL
   - 127.0.0.1

- browser.safebrowsing.provider.google.reportMalwareMistakeURL
   - 127.0.0.1

- browser.safebrowsing.provider.google.reportPhishMistakeURL
   - 127.0.0.1

- browser.safebrowsing.provider.google.reportURL
   - 127.0.0.1

- browser.safebrowsing.provider.google.updateURL
   - 127.0.0.1

- browser.safebrowsing.provider.google4.advisoryURL
   - 127.0.0.1

- browser.safebrowsing.provider.google4.dataSharingURL
   - 127.0.0.1

- browser.safebrowsing.provider.google4.gethashURL
   - 127.0.0.1

- browser.safebrowsing.provider.google4.reportMalwareMistakeURL
   - 127.0.0.1

- browser.safebrowsing.provider.google4.reportPhishMistakeURL
   - 127.0.0.1

- browser.safebrowsing.provider.google4.reportURL
   - 127.0.0.1

- browser.safebrowsing.provider.google4.updateURL
   - 127.0.0.1

- browser.safebrowsing.provider.mozilla.gethashURL
   - 127.0.0.1

- browser.safebrowsing.provider.mozilla.updateURL
   - 127.0.0.1

- browser.safebrowsing.reportPhishURL
   - 127.0.0.1

- captivedetect.canonicalContent
   - (empty)

- captivedetect.canonicalURL
   - 127.0.0.1

- toolkit.telemetry.enabled
   - false

- captivedetect.maxRetryCount
   - 0

- captivedetect.maxWaitingTime
   - 0

- captivedetect.pollingTime
   - 0

- datareporting.healthreport.infoURL
   - 127.0.0.1

- datareporting.healthreport.uploadEnabled
   - false

- extensions.pocket.enabled
   - false
