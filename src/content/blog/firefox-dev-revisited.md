---
author: B. Burt
pubDatetime: 2023-02-18
title: Firefox Icon Issue, Revisited
postSlug: firefox-dev-revisited
featured: true
ogImage: ""
tags:
  - browsers
  - learning
  - linux
description: Revisiting the icon issue with Firefox Developer Edition browser described in my other post
---

This is was previously described [here](https://bburt.me/posts/two-of-the-same/) in my other post.

Basically, downloading the Firefox Developer Edition browser, then installing it, then when I "pin" the icon to the dock on my desktop, there are two icons there for the same application. 

One icon is the blue Firefox logo, and the other one is the default icon that my system uses when it can't find the real icon, and also in cases where there is no icon.

Here's a picture of the two icons:

<img src="/assets/firefox-dev.png" height="200" alt="Two different icons on my desktop dock">

The icon on the left is the blue Firefox Developer Edition icon and on the right is the OS's default icon. I mean, it isn't horrible-looking, but I want the correct icon showing up. Also, I like fixing little issues like this, it's like a little challenge to solve.

So, my fix that I wrote about in my other post, mentioned above, it won't work here. What I mean is, the solution will work, but getting a certain piece of information that is needed is more difficult now.

I'll explain. GNU/Linux operating systems used to use what's called X.

Here's an excerpt from _How Linux Works_ by Brian Ward.

> From the beginning until recently, Linux desktops used X (X Window System, also known as Xorg, after its maintaining organization). However, this is now changing; many distributions have transitioned to a soft-ware set based on the Wayland protocol to build a windowing system.

So the tool I used before, xprop, it doesn't work with Wayland. Which is good, actually. One thing I know about Wayland (the only thing I know? lol) is that it tries to restrict access to windows of other processes.

But I found another way to get the necassary info!

Looking Glass to the rescue!

As far as I know this is only available on GNOME desktops, but I could be wrong.

So, if you type: `Alt` + `F2`, it brings up a little search dialog. Enter `lg` into the search field and that will bring up Looking Glass.

Not this [Looking Glass at looking-glass.io](https://looking-glass.io/), which looks like an awesome project by the way.

[This Looking Glass](https://wiki.gnome.org/Projects/GnomeShell/LookingGlass), from the GNOME project. Which I just learned, is also an interactive JavaScript prompt. That's pretty sweet actually.

From their site:

> Looking Glass is GNOME Shell's integrated debugger and inspector tool.

When Looking Glass pops up, it looks like this:

![Looking debugger/inspector tool](/assets/lg.png)

See in the top left corner, select `windows`, and there displayed is the window information for the applications that are currently running on your desktop. For Firefox Developer, the `wmclass` tells us that, indeed, it is `firefox-aurora`.

So, that's the information that you'd insert into your `firefox-developer.desktop` file or whatever it happens to be named. It's located in `usr/share/applications/` directory.

And after the line that says `StartupWMClass`, insert the `firefox-aurora`, so it looks like: `StartupWMClass=firefox-aurora`. And just like that, it's fixed!

