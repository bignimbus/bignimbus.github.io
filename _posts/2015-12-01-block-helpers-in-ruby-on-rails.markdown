---
layout: post
title: Block Helpers in Ruby on Rails
date:   2015-12-01 00:00:00 -0600
featured_image: OCD3Hwk.png
categories: programming
tags: ['ruby', 'rails']
excerpt: "From a Rails newcomer's point of view: how to use block helpers effectively."
permalink: /:categories/:title
---

I'm still pretty new at Ruby, but my coworker and all-around good guy Derek Schaefer pointed this tip out to me when reviewing a recent pull request of mine.
<h3>Context</h3>
<p>
I am trying to show a visual element side-by-side with a corresponding CSS code snippet.  Using rouge, I apply syntax highlighting to a plain text code sample.
</p>
<img src="https://i.imgur.com/MNTgWYK.png" alt="Visual Element"><h3>Before</h3>
<p>
My first approach was ugly.  It looked something like this:
</p>

```erb
<!-- view.html.erb -->
<section class="code-sample">
  <div class="container">
<%= highlight(
'.example {
  color: $example-color;
}',
'scss'
)%>
  </div>
</section>
```

```ruby
# helper.rb
def highlight(language, code)
  Rouge.highlight(code, language.downcase, 'html').html_safe
end
```
<p>
Notice how I had to break the indentation in the markup, and how ugly the arguments look.  It was a pain in the neck to write (particularly in my auto-indenting vim setup), and is not pleasant to look at.
</p>
<h3>After</h3>
<p>
There is a better way!  The <code>&amp;block</code> keyword allows you to capture a blob of ruby code as a string, resulting in a much prettier way of handling complex content.  Observe:
</p>
```erb
<!-- view.html.erb -->
<section class="code-sample">
  <div class="container">
    <%= highlight 'scss' do %>
      .example {
        color: $example-color;
      }
    <% end %>
  </div>
</section>
```

```ruby
# helper.rb
def highlight(language, &amp;block)
  code = capture(&amp;block).strip_heredoc.strip
  Rouge.highlight(code, language.downcase, 'html').html_safe
end
```
<p>
This approach is much more intuitive and nicer-looking.  Thanks to Derek for a great tip.  For a more in-depth look at blocks and their general use in ruby, <a href="http://stackoverflow.com/questions/814739/whats-this-block-in-ruby-and-how-does-it-get-passed-in-a-method-here">this Stack Overflow thread</a> had some good information.
</p>
<h3>Keep the conversation going</h3>
<p>
Anything to add?  Tweet me <a href="http://twitter.com/jbones3000">@jbones3000</a>!
</p>
