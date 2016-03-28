---
layout: post
title: An Overlooked Benefit of rem in CSS
date:   2015-12-20 00:00:00 -0600
featured_image: http://i.imgur.com/sk3UnQy.jpg
categories: programming
tags: ['css', 'scss']
excerpt: Should you choose rem, px, em, etc?  There's lots of nuance in this discussion.  Use of the rem unit can offer savings in the form of payload weight.  Here's how.
---

<p>
<img src="http://i.imgur.com/sk3UnQy.jpg" alt="css rem">
Should I use <code>rem</code>, <code>px</code>, or (gasp!) <code>em</code>?  This debate has lots of nuance and I'm not here to choose one for you.  I've read a lot of good material on the subject thanks in part to my wondeful coworker Moises Montenegro, including <a href="http://benfrain.com/just-use-pixels/">this</a> and also <a href="https://mindtheshift.wordpress.com/2015/04/02/r-i-p-rem-viva-css-reference-pixel/">this</a> (both articles favor <code>px</code>).  Much of the discussion centers around the nuts and bolts of how the browser interprets each unit, but I'd like to add another dimension to this discussion: that of payload weight.

</p><p>
Note: this article assumes that you are using some sort of CSS preprocessing: perhaps Sass, LESS or Stylus.  
</p>
<h3>A note about CSS weight</h3>
<p>
When writing preprocessed CSS, consider the output of what you're writing: it's usually quite predictable.  For example: deep nesting tends to produce larger CSS files.  Consider:
</p>
```scss
/* style.scss */
$font-size: 16px;

.container {
  .another-container {
    .standard-heading {
      color: #fff;
      font-size: $font-size;
    }
  }
}
```
```css
/* style.css size: 85B */
.container .another-container .standard-heading {
  color: #fff;
  font-size: 16px;
}
```
<p>
Assuming <code>.standard-heading</code> is used in the same context everywhere on the page, it is better not to nest it so deep.  Our file becomes lighter weight and our stylesheet more reusable:
</p>
```scss
$font-size: 16px;

.standard-heading {
  color: #fff;
  font-size: $font-size;
}
```
```css
/* style.css size: 55B */
.standard-heading {
  color: #fff;
  font-size: 16px;
}
```
<p>
Of course, saving 30 bytes is nothing to write home about.  But keeping these possible savings in mind while writing your application's stylesheets can significantly lighten your CSS payload, keeping page load times down and user experience positive.
</p>
<h3>Responsive design and media queries</h3>
<p>
OK, so let's add some design requirements into the mix.  What if your requirement is to scale down font sizes when the viewport is narrower than <code>460px</code>?  Here are two approaches:
</p>
```scss
/* style.scss */

$base-font-size: 16px;
$small-font-size: 14px;
$mobile-width: 460px;

@mixin standard-fonts($size: $base-font-size) {
  p {
    font-size: $size;
  }
  
  h1 {
    font-size: $size * 3;
  }
  
  h2 {
    font-size: $size * 2;
  }
  
  h3 {
    font-size: $size * 1.5;
  }
  
  footer p {
    font-size: $size * .8;
  }
}

@include standard-fonts();

@media only screen and (max-width: $mobile-width) {
  @include standard-fonts($small-font-size);
}
```
```css
/* style.css size: 354B */

p {
  font-size: 16px;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 24px;
}

footer p {
  font-size: 12.8px;
}

@media only screen and (max-width: 460px) {
  p {
    font-size: 14px;
  }
  h1 {
    font-size: 42px;
  }
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 21px;
  }
  footer p {
    font-size: 11.2px;
  }
}
```
<p>
This first approach is simple and effective.  We have satisfied the requirement and our mobile users are experiencing wonderfully optimized font sizes.  We are using <code>px</code>, which is universally supported in all browsers.  Why rock the boat?  Consider this:
</p>
```scss
/* style.scss */

$mobile-width: 460px;

html {
  font-size: 16px;
  
  @media only screen and (max-width: $mobile-width) {
    font-size: 14px;
  }
}

p {
  font-size: 1rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}
  
footer p {
  font-size: .8rem;
}
```
```css
/* style.css size: 251B */
html {
  font-size: 16px;
}

@media only screen and (max-width: 460px) {
  html {
    font-size: 14px;
  }
}

p {
  font-size: 1rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

footer p {
  font-size: .8rem;
}
```
<p>
The original example using <code>px</code> totaled 354 bytes of CSS.  The <code>rem</code> example totaled 251 bytes of CSS.  In this context, <code>rem</code> allowed us a way to scale our fonts in a media query without the use of redundant CSS output.  These simple optimizations could mean serious reductions in CSS payload when applied to an entire code base.  Of course, if you need to support &lt;=IE8, you're out of luck - <code>rem</code> is IE9 and up.
</p>
<h3>Rem can help in unexpected ways</h3>
<p>
Consider the benefits <code>rem</code> can offer your stylesheets, particularly when scaling values.  You could potentially shave many kB while writing arguably more elegant CSS.
</p>
<h3>Tweet your thoughts</h3>
<p>
How are you using <code>px</code> or <code>rem</code> in your stylesheets?  Let me know <a href="https://twitter.com/jbones3000">@jbones3000</a>!
</p>
