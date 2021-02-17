---
layout: post
title: "How to move from LastPass to Bitwarden in ten minutes"
date:   2021-02-15 23:30:00 -0500
featured_image: lastpass-to-bitwarden.jpg
categories: misc
tags: ['security', 'lastpass', 'bitwarden']
excerpt: LastPass recently changed their products and pricing.  For those in search of an alternative, switching to Bitwarden can be done surprisingly quickly.  This is a quick summary of how I moved all my password data and set up autocomplete on my iPhone in a few minutes.
permalink: /:categories/:title
cta: false
attributions: []
---

LastPass recently notified users that their free product will drastically
change very soon in
[a recent blog post](https://blog.lastpass.com/2021/02/changes-to-lastpass-free/).
I believe
[this change is being made irresponsibly](#),
but you can read more about that below.
The changes are so restrictive that many non-paying users are looking around
for alternatives.  [Bitwarden](https://bitwarden.com/) fits the bill nicely
for me: it has desktop, mobile, and web apps with the same features as LastPass,
plus it has the benefit of being largely
[open-source software](https://github.com/bitwarden)
distributed under GPL/AGPL licenses.

Bitwarden's help docs have a decent
[guide to help users import data from LastPass](https://bitwarden.com/help/article/import-from-lastpass/)
but if you need some additional resources, please read on.

## Export your LastPass data

Before we get started, be aware that you will be downloading a file containing
all the username/password combinations you have stored in LastPass.  This
file will not be encrypted - the passwords will be in plain text.
Once you're done copying your data into Bitwarden, delete all the data you
downloaded from LastPass so that it is no longer available on your computer.

On a desktop or laptop, log into LastPass.  Open the navigation panel
on the left side of the screen.  Tap <strong>Advanced Options</strong>.
A new menu will appear to the right.  Tap <strong>Export</strong>.  You will
be prompted to enter your master password.  Once that's done, the screen
may appear unresponsive for a short time.  That is normal.  The browser window
will turn white and black text will appear.  This text contains all the
usernames, passwords, etc. you store in LastPass.

<figure>
  <div style="display: flex; flex-wrap: wrap; justify-content: center;">
    <section>
      <img
        loading="lazy"
        decoding="async"
        style="display: block; max-height: 400px"
        alt="LastPass interface showing the left navigation bar open and 'Advanced Options' highlighted"
        src="/assets/images/posts/lastpass-to-bitwarden/desktop-1.png"
      >
    </section>
    <section>
      <img
        loading="lazy"
        decoding="async"
        style="display: block; max-height: 400px"
        alt="LastPass interface showing the left navigation bar open and 'Export' highlighted"
        src="/assets/images/posts/lastpass-to-bitwarden/desktop-2.png"
      >
    </section>
  </div>
  <figcaption style="text-align: center">
    <span style="font-style: italic">
      Use the left navigation to drill down: <strong>Advanced Options</strong> 👉 <strong>Export</strong>
    </span>
  </figcaption>
</figure>

<figure>
  <div style="display: flex; flex-wrap: wrap; justify-content: center;">
    <section>
      <img
        loading="lazy"
        decoding="async"
        style="display: block; max-height: 400px"
        alt="Text editor showing a file called 'export.csv' with data"
        src="/assets/images/posts/lastpass-to-bitwarden/desktop-3.png"
      >
    </section>
    <section>
      <img
        loading="lazy"
        decoding="async"
        style="display: block; max-height: 400px"
        alt="Bitwarden interface showing the 'Tools' section open and 'Import Data' highlighted"
        src="/assets/images/posts/lastpass-to-bitwarden/desktop-4.png"
      >
    </section>
  </div>
  <figcaption style="text-align: center">
    <span style="font-style: italic">
      Copy the LastPass export into <code>exports.csv</code> using a plain text editor like Notepad, TextEdit, or Vim.  Tap <strong>Tools</strong> 👉  <strong>Import Data</strong> and upload <code>exports.csv</code>
    </span>
  </figcaption>
</figure>

<figure>
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center">
    <section>
      <img
        loading="lazy"
        decoding="async"
        style="display: block; max-width: 200px"
        alt="iOS Settings menu with 'Passwords' highlighted"
        src="/assets/images/posts/lastpass-to-bitwarden/ios-1.jpg"
      >
    </section>
    <section>
      <img
        loading="lazy"
        decoding="async"
        style="display: block; max-height: 200px"
        alt="iOS Passwords menu"
        src="/assets/images/posts/lastpass-to-bitwarden/ios-2.jpg"
      >
    </section>
    <section>
      <img
        loading="lazy"
        decoding="async"
        style="display: block; max-height: 200px"
        alt="iOS AutoFill Passwords menu with Bitwarden selected"
        src="/assets/images/posts/lastpass-to-bitwarden/ios-3.jpg"
      >
    </section>
  </div>
  <figcaption style="text-align: center">
    <span style="font-style: italic">
      <strong>Settings</strong> 👉
      <strong>Passwords</strong> 👉
      <strong>Autofill Passwords</strong> 👉
      <strong>Bitwarden</strong>,
      then follow the prompts.
    </span>
  </figcaption>
</figure>
