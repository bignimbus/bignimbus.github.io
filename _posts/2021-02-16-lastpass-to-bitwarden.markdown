---
layout: post
title: "How to move from LastPass to Bitwarden in ten minutes"
date:   2021-02-17 16:56:00 -0500
featured_image: lastpass-to-bitwarden.jpg
categories: misc
tags: ['security', 'lastpass', 'bitwarden']
excerpt: LastPass recently changed their products and pricing.  For those in search of an alternative, switching to Bitwarden can be done surprisingly quickly.  This is a quick summary of how I moved all my password data and set up autocomplete on my iPhone in a few minutes.
permalink: /:categories/:title
cta: true
---

LastPass recently notified users that their free product will drastically
changeon 2021-03-16 in
[a recent blog post](https://blog.lastpass.com/2021/02/changes-to-lastpass-free/).
I believe
this change is being made irresponsibly,
but you can read my opinion in a follow-up post I'm planning.
Many non-paying users are looking around
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

1. On a desktop or laptop, log into LastPass.
2. Open the navigation panel on the left side of the screen.
3. Tap <strong>Advanced Options</strong>.  A new menu will appear to the right.
4. Tap <strong>Export</strong>.  You will be prompted to enter your master password.
5. The screen may appear unresponsive for a short time.  That is normal.

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

<ol start="6">
<li>The browser window will turn white and black text will appear.  This text contains all the usernames, passwords, etc. you store in LastPass.</li>
<li>Leave this window open for a moment.</li>
<li>Open a plain text editor.  If you're not sure what a plain text editor is,
don't worry.  You have one installed on your operating system.
[See this link](https://www.fedoraoutlier.com/the-built-in-text-editors-on-windows-and-macs/)
for more information.</li>
<li>Highlight and copy all the text from the open LastPass window.  Paste
it into your text editor.</li>
<li>Save the file as `export.csv`.</li>

To avoid inadvertently pasting this sensitive information somewhere
else, copy some other text as a safeguard.

## Sign up for Bitwarden

Go to [bitwarden.com](https://bitwarden.com).  Tap "Get Started" in the top
right corner.  You will be prompted to enter your email address and to set
a master password, much like LastPass.  I recommend using a password that
is different from your LastPass master password.

Once you have completed registration and confirmed your email address,
log into Bitwarden again.

1. Tap <strong>Tools</strong> at the top of the window.
2. On the left, tap <strong>Import Data</strong>.
3. Under <strong>1. Select the format of the import file</strong>, select
"LastPass (csv)."
4. Under <strong>2. Select the import file</strong>, select the `export.csv` file you created earlier.  Tap the button labeled <strong>Import Data</strong>.

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
      Copy the LastPass export into <code>exports.csv</code> using a plain text editor like Notepad, TextEdit, or Vim.  Tap <strong>Tools</strong> 👉  <strong>Import Data</strong> and upload <code>exports.csv</code>.
    </span>
  </figcaption>
</figure>

Your data should now be available.  According to Bitwarden's documentation,
some users have experienced issues with the encoding of certain special
characters in passwords:

> Warning
>
> Some users have reported a bug which changes special characters in your passwords (&, <, >, etc.) to their HTML-encoded values (for example, `&amp;` in the printed export.
>
> If you observe this bug in your exported data, use a text editor to find and replace all altered values before importing into Bitwarden.

I haven't come across anything like that yet, but I transitioned very recently.
I will update this post if I come across anything unusual.

## iOS users: update AutoFill

If you're not an iOS user, [skip this section](#delete-your-lastpass).

As an iOS user, I am accustomed to using LastPass to autofill passwords.
After installing the
[Bitwarden app](https://apps.apple.com/us/app/bitwarden-password-manager/id1137397744):

1. Go into <strong>Settings</strong>.
2. Tap on <strong>Passwords</strong>.
3. Tap on <strong>AutoFill Passwords</strong>.
4. Tap on <strong>Bitwarden</strong>.
5. Follow the prompts.

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
      <strong>Bitwarden</strong>
    </span>
  </figcaption>
</figure>

<div id="delete-your-lastpass"></div>
## Delete your LastPass (after a while)

It's a good idea to hold onto your LastPass free account for a short time,
at least until you are reasonably certain Bitwarden is meeting your needs and
that all of your data was copied over successfully.  I haven't done this part
yet, but
[the documentation](https://lastpass.com/delete_account.php)
makes it seem pretty simple.
