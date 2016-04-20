---
layout: post
title: A few tricks with JavaScript generator functions
date:   2016-04-18 00:00:00 -0600
featured_image: factory-1311075-1279x850.jpg
categories: programming
tags: ['javascript']
excerpt: 
permalink: /:categories/:title
cta: true
attributions: [{asset_name: 'Hero image', asset_url: 'http://www.freeimages.com/photo/factory-1311075', author: Ehsan Namavar, license_name: 'FreeImages.com Content License'}]
---

Many modern browsers and runtimes are in substantial compliance with the ECMAScript2015 spec.  One of my favorite new additions to JavaScript in ES2015 is the generator function.  The expressive capabilities of these functions are significant.  [Axel Rauschmayer wrote a great, in-depth article](http://www.2ality.com/2015/03/es6-generators.html) discussing generators, what they are, and how they can be used in JavaScript.  For those who are pretty comfortable using generators, this next part is for you.  Here are a couple of tricks, along with some basic examples of how they might be relevant to a modern JavaScript application.

### Composing large data structures with generators 

Conventional structures such as arrays and objects can use lots of memory when the data set is unconventionally large.  Here's an array containing every possible latitude and longitude on Earth, incremented by 0.1.  For those who can't count that fast, that's an array of 6,485,401 arrays of two floating-point numbers.

```js
function getCoords () {
  let coords = [];
  for (let lat = -90; lat <= 90;) {
    for (let lon = -180; lon <= 180;) {
      coords.push([lat, lon]);
      lon = parseFloat(lon + 0.1, 10);
    }
    lat = parseFloat(lat + 0.1, 10);
  }
  return coords;
}
```

In Chromium v. 52.0.2707.0 (64-bit), the coords array took up roughly half a gigabyte of memory.  Here's the same data, expressed as a generator function:

```js
function * coords () {
  for (let lat = -90; lat <= 90;) {
    for (let lon = -180; lon <= 180;) {
      yield [lat, lon];
      lon = parseFloat(lon + 0.1, 10);
    }
    lat = parseFloat(lat + 0.1, 10);
  }
}
```

In the same browser, this took up about one kilobyte of memory.  Because generator functions are evaluted only when they are incremented, you avoid having to store all of your data in memory.  This is called [lazy evaluation](http://odetocode.com/blogs/scott/archive/2015/03/09/lazy-evaluation-of-generators-in-es6.aspx), and it is key to understanding the fundamental difference between generators and traditional JavaScript objects.

Iterating over millions of data points will still consume considerable CPU resources, but the savings in memory can open up new possibilities.  The above code snippet is a generalized use case, but you may find that the lazy evalution paradigm indispensibe when working with large data sets on the client or in Node.

### Recursion in generators

It is possible to use recursion inside a generator function with the use of the `*` sigil after your `yield` statement.  [MDN goes into more detail](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*) on how this works.

```js
const lyrics = ['du', 'hast', 'mich'];
// context: https://www.youtube.com/watch?v=W3q8Od5qJio
// you should probably wear headphones

function * rammstein (words, singThis = '') {
  yield singThis;
  if (!words.length) return;

  // yield * yields all the yield statements of the specified generator.
  // In this case, the generator is rammstein itself.  This is a simple
  // example of using recursion in a generator function
  yield * rammstein(words, `singThis + ${words.shift()} `);
}

function karaokeMachine (songGenerator) {
  // iterates over all the yield statements in the rammstein generator
  for (let word of songGenerator()) {
    alert(word);
  }
}

// bind a copy of the lyrics array to the first argument of the rammstein generator
let rammsteinIterable = rammstein.bind(null, [...lyrics]));

karaokeMachine(rammsteinIterable);
```

90s industrial metal fans\* rejoice!  Again, this is a simple example for demonstration purposes.  I'm working on something at the moment that will help demonstrate the power of this pattern, but it's not quite finished yet.  More to come.

### Custom iterators

Let's say you're making an app that is a calendar of concerts at which 90s industrial metal bands\* are playing.  The API response contains an array of objects, each object representing a concert that is happening in the current calendar year.  Something like this:

```json
{
  "data": {
    "concerts": [
      {
        "timestamp": 1461011753,
        "bands": ["rammstein"],
        "location": [41.8851600, -87.6607320]
      }, {
        "timestamp": 1461875683,
        "bands": ["rob zombie", "marilyn manson"],
        "location": [42.8851600, -87.6607320]
      }, {
        "timestamp": 1487453724,
        "bands": ["nine inch nails"],
        "location": [41.8851600, -86.6607320]
      }
    ]
  }
}
```

Let's parse this data structure:

```js
let concerts = response.data.concerts;
// pretend we have a template for this example
template.render(concerts);
```

It would be simple enough to put a comparison inside your template or in your parse function to only display dates that are in the future, but where's the fun in that?  Let's compose an object with an iterator instead!

```js
function concertFactory (concerts) {
  var obj = {};
  obj[Symbol.iterator] = function * () {
    for (let concert of concerts) {
      if (new Date(concert.date) > new Date()) yield concert;
    }
  }
  return obj;
}

let concerts = concertFactory(response.data.concerts);
template.render(concerts);
```

So, why choose this option over `Array.prototype.map`?  In many cases, the difference is negligible and it comes down to a matter of taste.  Ask yourself these questions:

1. Do I want to preserve the original data structure without redundancy?
2. Do your users need up-to-the-second updates?

If the answer to either of these questions is "yes," consider using generator functions to compose custom iterators over your data set.  Speaking to point 1, composing an iteration protocol will conform to data immutability best practices.  Say you want to show 90s industrial metal fans\* the total number of concerts for a calendar year; all you need to do is get the `length` of the source data set, which has not changed.  Point 2 is all about _when_ the iterator is invoked.  `Array.prototype.map` callbacks are put into the event loop immediately.  Generators, on the other hand, are lazy-evaluted: the date comparison happens at the precise moment your app renders the data.  In a reactive template or socket.io app, this may be a relevant concern.

\* DISCLAIMER: I am not a 90s industrial metal fan
