---
layout: post
title: "Methodical HTML and CSS Development"
date:   2019-06-24 00:00:00 -0600
featured_image: tla.jpg
categories: programming
tags: ['html', 'css']
excerpt: Locking down a sensible, robust workflow for HTML and CSS development will save you time and agitation, no matter how much of a beginner you are
permalink: /:categories/:title
cta: true
attributions: []
---

Programming is difficult. Seasoned professionals can struggle for months on end to come up
with the correct solutions for turning input X into output Y. More often than not,
these computing tasks get so complex as to necessitate the use of programs that exist
for the sole purpose of validating the output of a program given a set of inputs:
unit tests, integration tests, end-to-end tests, the list goes on. These software
testing tools grant the programmer a sense of security: if the test suite is
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
now and then, you can benefit from a methodical approach.

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
83. Done! Just don't ask how

Maybe yours is similar? If it's working for you, that's great! The
rest of this article is probably not for you. But if you're tired of tying your virtual
shoelaces together, there are two ways to make this process less painful:

1. Get better at HTML
2. Get better at CSS
3. Structure your workflow to minimize repetition

Options 1 and 2 will work very well. Fluency with HTML and CSS will grant you much more
understanding and command of the web browser and reduce the amount of times you run into
dead ends in the development process and facilitate quick recovery from setbacks. But absent
a reliable workflow, setbacks are still inevitable. In the swirling vortex of uncertainty
that is user interface development, a structured approach is the key to sustainable,
predictable, and manageable progress.

## What you need to know

A methodical approach to HTML and CSS development rests on a foundational understanding of
CSS's `display` property. I cannot overstate how important this concept is. Here's the lowdown:

### Inline elements

### Block elements
