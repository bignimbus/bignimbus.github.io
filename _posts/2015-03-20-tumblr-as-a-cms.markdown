---
layout: post
title: Tumblr as a CMS
date:   2015-03-20 00:00:00 -0600
featured_image: http://jdauriemma.com/media/tcms.png
categories: javascript
tags: ['javascript', 'backbone', 'blogging']
excerpt: How I hacked together a blogging solution using Tumblr as a headless CMS.  Backbone.js handled state and markup parsing on the client side.
permalink: /:categories/:title
---

<p>
I once used WordPress to publish a blog, and why not?  It was and is the go-to CMS and had syndication, organization and a robust community out of the box.  A few months back I was warned about the security risks, but I lazily carried on.
</p>
<p>
As if on cue, my installation suffered a security failure and some jerk broke into my server (quite easily) and inserted a bunch of adware on my site.  That was my sign: I exported my WordPress DB, temporarily shut down my blog and searched for another solution.  I didn’t want to host a framework built on PHP - the risks seemed too high, particularly when considering that WordPress is also built on PHP.
</p>
<h4>What I needed</h4>
<p>
Out of the box, my new system needed to have:
</p><ul><li>A stable, modern API</li>
<li>Syndication</li>
<li>Security</li>
</ul><p>
My fondest wish was to spin up some static page generation magic using node and some interesting modules I’ve come across, but my cheap-o shared server doesn’t support node.  I also strongly considered <a href="//help.github.com/articles/using-jekyll-with-pages/">Github’s Jekyll</a>.  In the end, though, I decided to use <a href="//tumblr.com">Tumblr</a>.
</p>
<h4>How I did it</h4>
<p>
I recently refactored my site as an exercise in building a Backbone app.  One of the nice things about working with Backbone is its elegant way of hooking into APIs and modifying data structures via the <code>parse</code> method.  Using the a simple GET request to <a href="https://www.tumblr.com/docs/en/api/v1">Tumblr’s v1 API</a>, I pull down a well-structured JSON blob with all the data I need to populate a template.  There’s barely any parsing to be done.  Observe:
</p>
```javascript
// collections/blog-posts.js
define(['models/post'],
function (PostModel) {
    'use strict';
    return Backbone.Collection.extend({
        "model": PostModel,
        "url": 'php/data/tumblr.json',
        "parse": function (response) {
            return response.posts;
        }
    });
});
```
<p>
Tumblr’s API is good enough, but I also wanted to create a browse page.  As it stands, there’s no thumbnail or snippet text that we get for free with each post.  So, every blog post model comes with these methods:
</p>
``` javascript
// <a href="https://github.com/bignimbus/jdauriemma.com/blob/master/js/models/post.js">https://github.com/bignimbus/jdauriemma.com/blob/master/js/models/post.js</a>
// models/post.js
define([], function () {
    'use strict';
    return Backbone.Model.extend({
        "initialize": function () {
            this.setHeroImage();
            this.setTextSnippet();
        },
        "setHeroImage": function () {
            var post = this.get('regular-body'),
                img = post.slice(post.indexOf('&lt;img '));
            img = img.slice(0, img.indexOf('&gt;') + 1);
            this.set('heroImage', img);
        },
        "setTextSnippet": function () {
            var post = this.get('regular-body'),
                text = /&lt;p&gt;((?:.|[\r\n])*?)&lt;\/p&gt;/g.exec(post);
            text = text[1] &amp;&amp; text[1].replace(/&lt;(?:.|\n)*?&gt;/gm, '');
            text = text.slice(0, 100) + '...';
            this.set('snippet', text);
        }
    });
});
```
<h4>What the user sees</h4>
<p>
Right now, it’s pretty basic (I have plans - big plans!).  There are two views: single post, and browse.  Browse can show all of my blog posts, or indexed by tag.
</p>
<img src="http://jdauriemma.com/media/blog-post.png"><br><img src="http://jdauriemma.com/media/blog-browse.png"><p>
So, for the time being, this solution serves my purpose. I'm no longer hosting a security risk on my site, and I actually get more control over my content than if I had continued using WordPress.
</p>
<h4>Tweet me</h4>
<p>
<a href="https://twitter.com/jbones3000">@jbones3000</a>
</p></p>
