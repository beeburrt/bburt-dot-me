---
author: B. Burt
pubDatetime: 2022-11-15
title: Two of the Same Icon on my Dock
postSlug: two-of-the-same
featured: true
ogImage: ""
tags:
  - browsers
  - learning
  - linux
  - Firefox
description: Solving an issue where there were two of the same Firefox Developer Edition browser icon on my dock
---

Recently, I ran into some issues trying to install the Firefox Developer Edition browser and so I'm writing this in the hopes that I can save somebody else some trouble.

My issue was: after I installed the browser, I had a dumb icon for it, the system default icon instead of the nice blue firefox logo icon.

Oh, and also, I HAD TWO OF THE SAME ICON ON MY DOCK!! WTH??

After I got the right icon showing up, thanks to our friend, the .desktop file (more on that later) I'd close the browser, there'd be the one icon on my dock, because I had pinned it there. If I fired up the F.D.E. browser again, the same blue icon would pop up next to it! And that bugged me.

But we can fix it, with a .desktop file.

You can download the Firefox Developer Edition browser from the [Mozilla website](https://www.mozilla.org/en-US/firefox/developer/).

I've been reading _How Linux Works, 3rd Edition_ by Brian Ward and I had just read the section about dealing with compressed files. So let's try working with this file from the command line.

I learned that there's actually two steps involved here, decompressing and then unpacking. and you want to work from left to right (I know you can do it in one step but I want to do them separately). And the order is important.

First we use the bzip2 tool and give it the name of the file, run:

```bash
bunzip2 firefox-108.0b1.tar.bz2
```

to decompress it. Now I'm left with `firefox-108.0b1.tar`, minus the `bz2` at the end. So that worked.

Now let's check the contents with the 'table-of-contents' mode by running:

```bash
tar -tvf firefox-108.0b1.tar
```

With that command, I can see that I'm not going to be left with a mess of files everywhere in my Downloads directory because I can see the directory structure, everything will be in a firefox folder.

So let's run the same command, except switch the `-t` for an `-x`, and let's throw in a `-p` for good measure, like this:

```bash
tar -xpvf firefox-108.0b1.tar
```

The `-p` is for preserve permissions (not sure if it's needed or not, but I include it to be safe), the `-x` is for extract, the `-v` is for verbose mode, and the `-f` is for file.

Then delete the `.tar` file. We don't need it anymore.

Now I'm left with a folder named firefox. That's not a browser! lol. Now what?

This thread, on the forum [_Ask Ubuntu_](https://askubuntu.com/questions/548003/how-do-i-install-the-firefox-developer-edition), suggests an alternative install method with a tool called Ubuntu Make. Here's [Ubuntu Make's GitHUb](https://github.com/ubuntu/ubuntu-make).

To install Ubuntu Make, run:

```bash
sudo add-apt-repository ppa:lyzardking/ubuntu-make
```

Then:

```bash
sudo apt update
```

And finally:

```bash
sudo apt install ubuntu-make
```

After installing Ubuntu Make, you just run:

```bash
umake web firefox-dev
```

And that's all there is to it. Easy peasy. I'm not sure about updates though.

Another solution, and this is the one that I used, because it's just cool, is a Bash script to do all the work for you. It's from [@tanrax on GitHub here](https://github.com/tanrax/linux-install-firefox-developer-edition).

Run this command using curl and piped into Bash:

```bash
curl -s -L linux-install-firefox-developer-edition   https://raw.githubusercontent.com/tanrax/linux-install-firefox-developer-edition/main/linux-install-firefox-developer-edition  | bash
```

This command fetches the script from his GitHub repository, then runs it. It even keeps you posted on it's progress in the terminal. That's cool!

Here's the entire script:

```bash
#!/bin/bash

# START
set -e

## UNINSTALL
# Remove binaries
sudo rm -rf /opt/firefox-developer/ /usr/bin/firefox-developer

# DOWNLOAD
curl -L -o firefox-developer.tar.bz2 https://download.mozilla.org/\?product\=firefox-devedition-latest-ssl\&os\=linux64\&lang\=en-US

# EXTRACT
tar -xf firefox-developer.tar.bz2
rm -rf firefox-developer.tar.bz2
mv firefox firefox-developer

# INSTALL
sudo mv firefox-developer /opt
sudo ln -s /opt/firefox-developer/firefox /usr/bin/firefox-developer

# DESKTOP INTEGRATION
echo -e "[Desktop Entry]\nEncoding=UTF-8\nName=Firefox Developer Edition\nComment=Firefox Developer Edition\nExec=/opt/firefox-developer/firefox %u\nTerminal=false\nIcon=/opt/firefox-developer/browser/chrome/icons/default/default128.png\nStartupWMClass=Firefox Developer\nType=Application\nCategories=Network;WebBrowser;\nMimeType=text/html;text/xml;application/xhtml+xml;application/xml;application/vnd.mozilla.xul+xml;application/rss+xml;application/rdf+xml;x-scheme-handler/http;x-scheme-handler/https;\nStartupNotify=true\n" | sudo tee -a /usr/share/applications/firefox-developer.desktop

# NOTIFY
echo "Installed!"
```

The issue with the two icons, has something to do with a file that has a .desktop file extension.

Here's mine:

```bash
[Desktop Entry]
Encoding=UTF-8
Name=Firefox Developer Edition
Comment=Firefox Developer Edition
Exec=/opt/firefox-developer/firefox %u
Terminal=false
Icon=/opt/firefox-developer/browser/chrome/icons/default/default128.png
StartupWMClass=Firefox Developer
Type=Application
Categories=Network;WebBrowser;
MimeType=text/html;text/xml;application/xhtml+xml;application/xml;application/vnd.mozilla.xul+xml;application/rss+xml;application/rdf+xml;x-scheme-handler/http;x-scheme-handler/https;
StartupNotify=true
```

You can find these .desktop files in your `/usr/share/applications/` directory.

Mine's called `firefox-developer.desktop`.

There's a line that says `STARTUPWMCLASS=Firefox Developer`

That line needs changed.

Run this command:

```bash
xprop WM_CLASS
```

This will turn your pointer or cursor into a little crosshairs thing. Move the crosshairs onto (anywhere on top of) your Firefox Developer browser window and click your mouse. Displayed in your terminal will be the WM_CLASS (whatever that is). My output said: `WM_CLASS(STRING) = "Navigator", "firefox-aurora"`.

With sudo privileges, I changed the line in my `firefox-dev.desktop` file.

Just do:

```bash
sudo nano /usr/share/applications/firefox-developer.desktop
```

The line that says `StartupWMClass`, I changed it to `"Navigator", "firefox-aurora"`. And that fixed my issue with the two icons!

Try running: `xprop` by itself and then clicking on your browser window. The output in your terminal has a lot more info for you. HaHa, even some pictures of the logo.
