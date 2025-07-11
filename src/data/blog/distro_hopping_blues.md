---
title: Distro Hopping Blues
author: B. Burt
slug: distro_hopping_blues
draft: true
tags:
    - linux
    - distro-hopping
    - config
descriptions: Setting up a linux distro the way I like it
---

For those of you who might not know, the term distro-hopping refers to the act of switching from one Linux operating system, aka distro (distribution), to another. And some of us (at least I hope I'm not alone in this) do it all time!

This blog post documents all the stuff I do setting up a fresh install of Manjaro (an Arch Linux-based distro) and getting it the way I like it. Mostly for my own future reference.

- Install keepassxc password manager along with git, base-devel because Ruby depends on it and flatpak.
- Install the other Extension Manager, the blue one, then install the GNOME shell extension Caffeine.
- Configure git:
    - `$ git config --global user.name "B. Burt"`
    - `$ git config --global user.email 162539390+beeburrt@users.noreply.github.com`
    - `$ git config --global init.defaultBranch main`
    - `$ git config --global pull.rebase false`
    - `$ git config --global commit.gpgsign true`
    - `$ git config --global gpg.format ssh`
    - `$ git config --global user.signingkey /home/user/.ssh/id_ed25519.pub`

Now I just have to remember to add the `-S` when I commit. Maybe I'll add an alias for that.

- generate ssh key pair: `$ ssh-keygen -t ed25519` and `$ ssh-add`
- add ssh public key to GitHub and pwn.college
- install bat, fd, eza
- configure Firefox:
- ...
