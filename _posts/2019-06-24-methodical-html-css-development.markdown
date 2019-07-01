---
layout: post
title: "How to write HTML and CSS correctly the first time"
date:   2019-06-24 00:00:00 -0600
featured_image: tla.jpg
categories: programming
tags: ['html', 'css']
excerpt: Beginners and experts alike can run in circles trying to make their user interface look the way it's supposed to look. A methodical approach to HTML and CSS will remove this agitation and keep you making steady progress.
permalink: /:categories/:title
cta: true
attributions: []
---

Programming is difficult. Seasoned professionals can struggle for months trying to turn
input X into output Y. More often than not,
these computing tasks get so complex that developers use other programs in order to
test their own programs. These tools
can automate tasks such as unit testing, integration testing, and end-to-end testing, which
can grant us a sense of security: if the test suite is
well-written, then we can be fairly confident that our program meets its requirements
if every test is passing.

HTML and CSS offer no such comfort. Robust test suites for validating colors, fonts,
positioning, and other peculiar aspects of user interfaces simply don't exist. Just as
da Vinci couldn't ask a machine whether _Mona Lisa_ was ready for the public - though I'm
sure he probably sketched such a machine at some point - UI developers must also determine
the correctness of their work by manually inspecting it. Instead of a single canvas, however,
we must check our work on a variety of media, any or all of phones, tablets, laptops,
desktops, screen readers, smart TVs and game consoles. The lack of computable acceptance
criteria and the diversity of media that can view an hypertext document makes coding
HTML and CSS a frustratingly imprecise art.

There is no reason to despair, though. Despite HTML and CSS's limitations, we can borrow
ideas from programming best practices in order to add structure to the UI development
process. Whether you're a dyed-in-the-wool front-end developer,
a hobbyist, a designer who dabbles, or a project manager that needs to ship an A/B test every
now and then, a methodical approach can keep you reasonably certain that the code you're
writing now is not messing up the code you've already written.

## Sample workflow

In the past, my workflow looked a bit like this:

1. Do the thing
2. Do another thing
3. Thing 1 is messed up so I need to do it again but differently now
4. Adjust spacing on thing 2
5. The way I was gonna do the next thing is now not going to work for some reason
6. Coffee
7. I have a fantastic idea, it's gonna work

...

83\. Done! Just don't ask how

Maybe yours is similar? If it's working for you, that's great! The
rest of this article is probably not for you. But if you're tired of tying your virtual
shoelaces together, there are three ways to make this process less painful:

1. Get better at HTML
2. Get better at CSS
3. Structure your workflow to minimize having to go back and fix things that were working fine before

Options 1 and 2 will work very well. Fluency with HTML and CSS will grant you much more
understanding and command of the web browser and reduce the amount of times you run into
dead ends in the development process. Improving your fluency will also facilitate quick
recovery from setbacks. But absent
a reliable workflow, setbacks are still inevitable. In the swirling vortex of uncertainty
that is user interface development, a structured approach is the key to sustainable,
predictable, and manageable progress.

## What you need to know

A methodical approach to HTML and CSS development rests on a foundational understanding of
CSS's `display` property. I cannot overstate how important this concept is.

### Inline elements

Inline elements can be simply described as "linear." By default, they will take as much
horizontal space as necessary until reaching the maximum width allowed by their container,
at which point they will overflow into a line break. Conceptually, inline elements have
no set height or width; instead, they will take up only the space that they require.

**(image goes here)**

### Block elements

Block elements are not linear; in fact, they are rectangles. As such, they often behave
more intuitively than inline elements in the web browser, which is an inherently
two-dimensional medium. These types of elements are the ones that respect
the __CSS box model__: they have defined width, height, positioning, and spacing.

**(image goes here)**

### Caveat emptor

Well, that was simple, right? Inline is _like a line_ and block is _like a box_. There
are many other possible values for `display`, however: `inline-block`, `table`, `flex`,
`grid`, and `inline-flex` come to mind right away. These types of elements, however, will
generally fall under one of the two semantic categories we previously discussed. If
you're not much of a
CSS aficionado, please understand that you can ignore the rest of this paragraph as it
is not essential to understanding the main point of this piece. According to the
[W3C spec](https://www.w3.org/TR/css-display-3/#the-display-properties), CSS3's
`display` property is overloaded. There are _inner display types_ and
_outer display types_. In most cases, your favorite `display` value is actually `block` on
the outside and something else on the inside (`flex` is the poster child for this).
To complicate things further, there are six types of `display`
values: outside, inside, listitem, internal, box, and legacy. Please feel free to spend
the rest of your day nerding out inside the W3C spec but we have a job to do, so
let's move on. Suffice it to say that, despite the diversity in the CSS3 specification for
`display`, boiling down our process to `inline` and `block` elements is sufficient for all
but the most arcane of edge cases.


### Inline vs. block idioms

I said before that understanding inline vs. block is the foundational principle of this method.
Now let's dive a little deeper into the types of properties that are idiomatic of these
elements, then we'll unpack what this means for your user interface development workflow.

<table>
  <thead>
    <tr>
      <th>
        <strong>Idiomatic properties of element types</strong>
      </th>
    </tr>
    <tr>
      <th>
        Inline elements
      </th>
      <th>
        Block elements
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul>
          <li><code>font*</code></li>
          <li><code>line-height</code></li>
          <li><code>color</code></li>
          <li><code>letter-spacing</code></li>
          <li><code>text-decoration</code></li>
        </ul>
      </td>
      <td>
        <ul>
          <li><code>background-color</code></li>
          <li><code>border</code></li>
          <li><code>bottom | left | right | top</code></li>
          <li><code>flex</code></li>
          <li><code>height</code></li>
          <li><code>margin</code></li>
          <li><code>padding</code></li>
          <li><code>position</code></li>
          <li><code>text-align</code></li>
          <li><code>transform</code></li>
          <li><code>width</code></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Now what do we mean when we say "idiomatic?" It's not like you can't declare a `color`
inside a block-level element, after all. The big idea to take away from this
not-at-all-exhaustive chart is that block-level elements should be selected for styles
that target properties of boxes, and inline-level elements should be selected for styles
that target properties of lines of content (usually text). Adding non-idiomatic
styles to a given element will create conditions that are ripe for having to go back
and fix something later.

## Seven step method

With our inline vs. block distinction fresh in our minds, let's walk through seven steps
that will guide us through UI development using HTML and CSS with minimal frustration.

### Example spec

We will be using this simple design comp as our "spec" to implement using our seven steps.
Behold:

<<<<<<< HEAD
(Comp goes here)
=======
**(images go here)**
>>>>>>> a474303... More content

For simplicity's sake, we won't be listing all the different quantitative values like
`font-size` - just trust that we're using the "correct" values in the following demonstration.

### Step 1: Content

Get all the content on the page, with the bare minimum of markup necessary.

```jsx
import React from 'react';
import pepper from './pepper.jpg';
<<<<<<< HEAD
=======
import './App.css';
>>>>>>> a474303... More content

const App = () => {
  return (
    <div>
      <img
        src={pepper}
        alt='Pepper'
      />
      Pepper
      Pepper is a domestic shorthair.  This is funny because she has
      long hair in real life.  She enjoys being pet until she's done with
      that and bites me.  She also seems to like meetings, because she
      joins almost all of them.
      <button
        type='button'
      >
        Pet Pepper
      </button>
    </div>
  );
};

export default App;
```
