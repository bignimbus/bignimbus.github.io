---
layout: post
title: "GraphQL SDL makes good on UML's broken promise"
date:   2025-10-22 11:00:00 -0400
featured_image: graphql-uml.png
categories: programming
tags: ['graphql', 'uml', 'architecture']
excerpt: GraphQL and UML are very different in practice, but GraphQL solves a lot of problems that UML tried to deal with decades ago through its Schema Definition Language. Why did GraphQL succeed where UML failed?
permalink: /:categories/:title
cta: true
---

For a brief moment in the 1990s, a significant portion of the software development world thought it had found the Holy Grail. I am referring, of course, to UML. The field had matured enough to crave predictability and discipline, and the Unified Modeling Language (UML) was prophesized to deliver it. At last, there would be a way to describe software systems with the rigor of an electrical diagram or a set of blueprints. It was a truly romantic vision for the software development lifecycle. UML promised to unify a messy landscape of competing notations into a single common language, one that could capture the essence of a system before a line of code was written. Architects could speak it. Managers could read it. And developers could supposedly generate entire systems from it. Software would finally behave like a proper engineering discipline.

It didn’t turn out that way. UML calcified into an ornamental layer above the real work, a PowerPoint aesthetic draped over code that refused to behave as neatly as its diagrams. Tools multiplied, semantics diverged, and the diagrams grew more ceremonial than descriptive. UML’s vision splintered into dozens of incompatible interpretations. The dream of a living model became a tedious exercise in drawing boxes. And somewhere between the Rational Rose installer and the thirteenth factory pattern, the whole movement got swallowed by Enterprise Java Hell. The only thing UML ever truly unified was the suffering of developers forced to generate stale diagrams from even staler XML.

Decades later, I think it’s safe to declare UML dead. Its promise, however, remains alive in the visualization tools, network maps, and diagramming systems that still seek to render complexity visible and make structure legible. From architecture maps to service dependency graphs, the impulse to draw what we cannot fully see continues to echo UML’s original intent, only now with living data and interactive visualizations replacing the static diagrams of the past.

UML and all its spiritual descendents all share a common limitation: they are lossy representations of reality. They are visual conveniences that inevitably discard detail and context. However sophisticated the visualization or network map, none of them are guaranteed to reflect (or predictably manipulate) the true state of the system. They are human approximations, not empirical reflections.

Ironically, a technology with a very different heritage has already made good on all of the above. GraphQL can model complex systems, is capable of being robustly visualized, is a reliable representation of running code, and has widespread adoption among developers. Nobody talks about it this way, and considering UML’s reputation maybe that's for the best. But I find the concepts behind UML compelling, and everyone I’ve talked to seems to be of a similar mind. So if you like the ideas behind UML but don’t ever want to actually put it in your SDLC, take a closer look at GraphQL with me.

## Modeling a system

To understand how GraphQL’s Schema Definition Language (SDL) succeeded where UML failed, it helps to revisit what UML was actually trying to accomplish. In the mid-1990s, object-oriented programming had reached its peak of self-importance. Everyone was drawing circles and arrows to represent classes and inheritance hierarchies, and every methodology seemed to have its own way of doing it. Rational Software saw a market opportunity and decided to merge the best ideas of Booch, Rumbaugh, and Jacobson into a single universal notation.

UML’s goal was to capture the totality of software structure and behavior. You could diagram data models, object interactions, dependencies, even deployment environments. The language was meant to be general enough for banks and air-traffic control systems alike. You could generate code from your models, reverse-engineer diagrams from existing code, and in theory, keep the two in sync forever. It was an optimistic vision that envisioned a high ceiling for the “engineering” half of software engineering.

By the time web development arrived, UML already felt like a relic of a slower age. Developers didn’t want to model entire systems; they wanted to ship features. Or perhaps it’s more cynical/accurate to say that developers were not incentivized to behave like big-e Engineers; we were to be Agile, our mantra was to Move Fast And Break Things. Now we are at the dawn of the vibe coding era, and UML’s legacy lives only in documentation templates, forgotten in practice.

GraphQL’s SDL began from a very different place. It wasn’t designed to model everything; it was supposed to describe the structure of a JSON object. A lingua franca so that a client and a server could agree on what to send, what shape it should take, and where it should come from. Yet in solving that narrow problem, SDL stumbled into an outcome that UML had been chasing for decades. The GraphQL schema defines objects, relationships, and boundaries in a way that’s concise, readable, and enforceable by machines. In a few lines, you can express entities and their associations more clearly than any diagramming tool ever managed. More importantly, the schema doesn’t sit in a binder, design document, or whiteboard. It powers a live system.

That executability is what separates SDL from every modeling language that came before it. A GraphQL schema isn’t an artist’s rendering of an API: it is the API. It can be validated. It lives in version control. It can be generated from code or authored directly. It can be visualized in hypertext and in a visualization In doing so, GraphQL quietly inverted UML’s hierarchy of abstraction. UML began with design and hoped to generate implementation. GraphQL begins with implementation and distills it into a design that remains truthful and malleable. The model doesn’t precede the system; it emerges from it. And because it’s executable, it never goes stale.

## On round-trip engineering

Point of order: UML sorta-kinda supported a similar workflow in the form of “round-trip engineering.”  ” You could generate code from diagrams, then edit the code and automatically regenerate the diagrams. In theory, model and implementation would remain forever synchronized. In practice, it was a recursive headache of mismatched semantics and fragile toolchains that didn’t ever quite work well together. Engineers working in polyglot codebases didn’t have the “It Just Works” experience, so they were incentivized to work around, not with, the tooling.

GraphQL achieved UML’s dream almost by accident. Developers can generate types, stubs, and client models from the SDL; they can also generate the SDL itself from introspection or schema composition. The schema and the implementation reflect one another naturally because both are built on the same underlying contract. When the contract changes, the ecosystem reacts. It’s a much more human-centric workflow. This subtle symmetry gives GraphQL developers a robust and immediate feedback loop. A schema that doesn’t match its implementation fails validation. Queries that rely on outdated types break at compile time. The same language can be used to propose changes, map a system, and enforce a contract between client and server.

The irony is that UML’s downfall came from trying to model too much. It wanted to represent structure and behavior and interaction all at once. Maybe UML would have gone further with the robust DevOps and CI/CD tools and infrastructure available today. But I think the real headline is that GraphQL limits itself to the system’s boundary, the contract between participants. That narrowness is its strength. Though I may be speaking too soon: some teams have built massive Server-Driven User Interface (SDUI) frameworks in GraphQL, styling and all.

## Conway’s Law and GraphQL Federation

If GraphQL’s SDL solved UML’s problems at the level of a single service, GraphQL Federation solved them at the scale of entire organizations. UML diagrams once tried to capture system-of-systems complexity with dotted lines and package dependencies, Federation composes real, executable graphs from many contributors. Each subgraph owns a piece of the model; composition stitches them into a coherent whole. The result is a living systems diagram. You can query the architecture itself and grasp which teams own which entities, trace a field’s lineage across boundaries, or validate a dependency in CI. The schema is the documentation, the integration test, and the contract all at once. In other words, GraphQL Federation embraces Conway’s Law. It accepts team boundaries as a given and gives teams a social contract in the form of supergraph composition.

Though there is an ecosystem of code generation, UML does not build in the sort of distributed responsibilities that GraphQL Federation assumes. So it’s important to note that UML’s collapse wasn’t purely a technical failure. It was cultural. It presumed that software would be developed by top-down mandate, not empowered small teams with defined ownership. UML represented bureaucracy disguised as design. The language of the architect had little to do with the language of the builder. GraphQL’s success followed the opposite path. It spread bottom-up through usefulness, not decree. Front-end developers adopted it because it solved real pain. The schema existed to serve running code, not to document it (and yet, it documents code extremely well). Over time, those schemas became the most reliable source of truth organizations had. And Federation gave a means of distributing responsibility for that truth without constraining teams.

This reversal explains a lot about modern software culture. UML assumed that design comes before code. GraphQL assumes design and code evolve together. A schema isn’t a prerequisite to development; it’s the byproduct of it. That feedback loop is why GraphQL is alive and growing.

## UML talks, SDL walks

I decided to re-read the Agile Manifesto. Here’s the meat of it:

> We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:

> Individuals and interactions over processes and tools
> Working software over comprehensive documentation
> Customer collaboration over contract negotiation
> Responding to change over following a plan

> That is, while there is value in the items on the right, we value the items on the left more.

It might as well say “UML is on the right, GraphQL is on the left.” There are enough distinctions between the two technologies that it’s not a tidy comparison. And I want to acknowledge that I’m hand-waving around a significant amount of nuance. But I think it’s worth thinking about GraphQL in the context of what UML was, very admirably, trying to accomplish. The Schema Definition Language fulfills UML’s central promise by narrowing it. It doesn’t try to capture everything; it captures just enough to make systems interoperable. It’s readable enough for humans to reason about, strict enough for machines to enforce, and flexible enough for both to evolve together. It sits precisely at the border between comprehension and computation. And with complementary tooling like code generation and Federation, the value to developers is immense. That balance is what makes GraphQL feel so natural. It functions as a description of software but feels like a developer tool.
