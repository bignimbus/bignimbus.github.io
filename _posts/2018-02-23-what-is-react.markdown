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

## First, a JavaScript functions primer

If you're already familiar with JavaScript functions, constructors, and classes, feel free to skip this section.  If you could use a refresher, or are learning this stuff for the first time, read on.

As in other programming languages, a JavaScript function returns a value.

```js
function myFunction () {
  return 'my value';
}
```

Functions are pretty useless unless you invoke them.  Now that we've defined `myFunction`, let's invoke it and test that its value matches that which we expect:

```js
myFunction() === 'my value'; // true
```

Functions are also objects, so they can have properties of their own.  No invocation necessary:

```js
myFunction.myValue = 'my value';
myFunction.myValue === 'my value';
// true
```

Most developers don't store properties on functions, though.  It's just not what functions are made for.  If we want to store values, we typically just use plain variables or objects.  So let's stick to the defining feature of a function: returning a value.  Functions often have *parameters*, which are used inside the function body.  Parameters are necessary if the function needs to return a value based on data that you won't have until later:

```js
function addOne (num) {
  return num + 1;
}

addOne(1);
// 2
```

Note that when we pass `1` into our function `addOne`, we get `2` back.  So the function took a parameter called `num`, and we passed `1` as the *argument* to satisfy that parameter.

### Constructors

Remember how we mentioned that functions could store values themselves?  Yeah, that's still not a good idea.  But there is an idiomatic way to do that in JavaScript, and that's through *constructor functions*.  _Constructor functions_ are a bit tricky to understand, so the first thing to remember is that they create an object:

```js
function ProgrammingLanguage (language, isFun) {
  this.language = language;
  this.isFun = isFun;
  // No return statement necessary! Using `this` is fine.
}
```

`this` is a keyword that, in this context, means "the object we're creating."  That's the second thing to remember: constructor functions are invoked using the `new` keyword, which creates a new object *instance*:

```js
// Here's one instance of `ProgrammingLanguage`
const js = new ProgrammingLanguage('JavaScript', true);

// And here's another
const rb = new ProgrammingLanguage('Ruby', true);

js.language === 'JavaScript';
rb.language === 'Ruby';
js.isFun === true;
rb.isFun === true;
// all true
```

Though this is pretty sophisticated compared to our previous `myFunction.myValue` example, the magic of constructor functions is apparent when we use the JavaScript `class` keyword.

### JavaScript classes

Let's write the exact same `ProgrammingLanguage` constructor function using `class`:

```js
// This is exactly the same as the above, rewritten to use `class`
class ProgrammingLanguage {
  constructor (language, isFun) {
    this.language = language;
    this.isFun = isFun;
  }
}
```

The nice thing about `class`es is that we can define `methods`, which are functions that are intended to be used for `ProgrammingLanguage` instances only.  Consider this:

```js
class ProgrammingLanguage {
  constructor (language, isFun) {
    this.language = language;
    this.isFun = isFun;
  }

  getFun () {
    if (this.isFun) {
      return 'is fun';
    else {
      return 'is not fun';
    }
  }
}

const js = new ProgrammingLanguage('JavaScript', true);
// In this example, `this` refers to the `js` variable
js.getFun() === 'is fun';
// true
```

In this example, `getFun` is a method that any instance of `ProgrammingLanguage` can access.  Note the use of `this`, which is referring to the object we created (`js`).  This pattern can be used to great effect when writing applications using JavaScript.

## So, what is a React component?

I put the title of this article into a search engine, this is what I got back:

> Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

Cool.  FYI, that snippet is from the excellent [reactjs.org](https://reactjs.org/docs/components-and-props.html) documentation.  I'll break it down a bit further:

## Are components really like JavaScript functions?

A component is technically a function.  But most people wouldn't use the term, "function" to describe a component.  Instead, they'd call it a "class:"

```js
class MyComponent extends React.Component {
  render () {
    return <p>This is my component with cool property { this.props.coolProp }.</p>
  }
}
```

Note that we're literally using the term, "class."  Using that class, we can instantiate any number of `MyComponent`s into the UI:

```js
ReactDOM.render(
  <div>
    <MyComponent coolProp='foo' />
    <MyComponent coolProp='bar' />
    <MyComponent coolProp='baz' />
  </div>
)
```
