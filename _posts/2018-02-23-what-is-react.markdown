---
layout: post
title: What is a React component?
date: 2018-02-23 00:00:00 -0600
featured_image: foo.jpg
categories: programming
tags: ['javascript', 'react']
excerpt: A deep dive into React internals wrapped inside a beginner's tutorial.
cta: true
---

I put the title of this article into a search engine, this is what I got back:

> Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

Cool.  This is good, we can work with this.  FYI, that snippet is from the excellent [reactjs.org](https://reactjs.org/docs/components-and-props.html) documentation.  We'll break it down a bit further:

## Conceptually, components are like JavaScript functions

Well, yeah, kinda.  A component is technically a function.  But most people wouldn't use the term, "function" to describe a component.  It's really a class:

```js
class MyComponent extends React.Component {
  render () {
    return <ul>
      <li>There could be any number of these on the screen</li>
      <li>We can just put `<MyComponent>` inside of our JSX code</li>
    </ul>
  }
}
```
