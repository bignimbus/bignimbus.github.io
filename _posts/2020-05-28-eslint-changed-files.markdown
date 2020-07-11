---
layout: post
title: "Using Git to run ESLint on changed files in a feature branch"
date:   2020-05-28 00:22:00 -0500
featured_image: git-lint.jpg
categories: programming
tags: ['git', 'eslint', 'ci']
excerpt: TIL how to run static analysis only on files that have been changed in a feature branch, and it's helping us roll out new rules with minimal disruption.
permalink: /:categories/:title
cta: true
---

I lied a bit in the title: this works for any static analysis tool.
So if you're a
[RuboCop](https://rubocop.org/),
[Pylint](https://www.pylint.org/),
or [insert awesome static analysis util here] user, this solution
has you covered.  The impetus for this post was
[ESLint](https://eslint.org/),
though, so I'll use that for the sake of a specific example.

I found myself in the unenviable position of trying to introduce
a new linter rule.  The reason this was such a pain was because
there were over 4,000 violations in our codebase, and this particular
rule didn't have an automated fix available.  The manual fix wasn't
just a matter of style, either &mdash; it would require regression-testing
every module it touched.  That's out of the question.  Ignoring the
error was impossible, too, because our CI build runs `eslint` against
all of our frontend code.  And making it a warning would not sufficiently
incentivize the team to fix the underlying issues this rule is supposed
to police.  What to do?

## Transitional config

First, I set up a "transitional" config file:

```yaml
# .eslintrc.transitional
extends: ./.eslintrc
rules:
  my-new-rule: error
```

Note that this extends our existing configuration, adding just one
modification.  To ensure that any text editor integrations register
the rule so that it's visible, I also modified the main config:

```yaml
# .eslintrc
# ...
rules:
  # ...
  my-new-rule: warn
```

Ok, so the groundwork is there.  Next, I set up a new script in
`package.json`:

```json
{
  "scripts": {
    "lint:transitional": "eslint -c ./.eslintrc.transitional --no-error-on-unmatched-pattern"
  }
}
```

## Using git diff

Then, the secret sauce: in the same CI build step as where we run
`eslint` against our entire frontend codebase, I added a step
where we run `lint:transitional` only on files that have been
changed in that particular branch.  `git` to the rescue!  One hiccup
we ran into is that deleted file paths were being checked, which caused
`eslint` to return an error code.  Adding `--no-error-on-unmatched-pattern`
resolved this issue.


```sh
# get a list of js/ts files that are different from master
# at the merge-base
DIFFED_FILES_TO_LINT=$(git diff master... --name-only -- "*.ts" "*.tsx" "*.js" "*.jsx")

# execute eslint with the "transitional" rules
# only on touched files.
yarn lint:transitional $DIFFED_FILES_TO_LINT
```

For more info on that `git` command, check out this
[explainshell](https://explainshell.com/explain?cmd=git+diff+master...my-branch+--name-only+--+%22*.ts%22+%22*.tsx%22+%22*.js%22+%22*.jsx%22).
[This StackOverflow answer](https://stackoverflow.com/questions/20808892/git-diff-between-current-branch-and-master-but-not-including-unmerged-master-com/20809283#20809283)
is also illuminating.

## What did that accomplish?

We can now introduce a painful but ultimately helpful new rule 
gradually.  When a team touches a file with which they are
familiar, paying down the technical debt pointed out by the new
rule becomes a matter of necessity.  Since (presumably) developers
are only touching files that are relevant to the work they are
shipping, the chance of a regression is lower than it would be if
some intrepid but less-familiar engineer took it upon themselves
to try to update the whole code base at once.  The total number
of violations will gradually decrement, and so too will the
as-of-now unknown pain points that may be associated with fixing them.
