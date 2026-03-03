# Repository Guidelines

## Project Structure & Module Organization
This repository is a Jekyll-powered personal site.
- Content posts live in `_posts/` and follow `YYYY-MM-DD-slug.markdown`.
- Shared templates are in `_layouts/` and `_includes/`.
- Styles are split across Sass partials in `_sass/` and compiled by Jekyll.
- Client-side behavior lives in `assets/javascripts/main.js`.
- Static assets (images, audio, fonts, generated resume PDF) live under `assets/`.
- Site configuration is in `_config.yml`; build/test automation is in `Rakefile`.

## Build, Test, and Development Commands
Run commands from the repository root.
- `bundle install` installs Ruby dependencies from `Gemfile`.
- `npm install` installs Node tools used for resume generation.
- `bundle exec jekyll serve` starts a local dev server with incremental feedback.
- `bundle exec rake generate` builds `assets/resume.pdf` and the site into `_site/`.
- `bundle exec rake test` runs `html-proofer` link/content checks against `_site/`.
- `npm run resume:build` regenerates only the resume PDF.

## Coding Style & Naming Conventions
- Use 2-space indentation in JavaScript, YAML, and Markdown front matter.
- Keep Sass/CSS formatting consistent with existing partials (property-per-line, grouped selectors).
- Prefer clear, descriptive function/variable names in JS (`toggleMenuState`, `setContentVisibility`).
- Name new posts and assets with lowercase, hyphen-separated slugs.

## Testing Guidelines
There is no unit test suite; validation is build + HTML checks.
- Before opening a PR, run: `bundle exec rake generate && bundle exec rake test`.
- Ensure new links/media in posts resolve correctly and do not introduce `html-proofer` failures.
- For UI/content-heavy changes, also verify locally in `jekyll serve`.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit messages (`Fix broken link`, `Add hero image`, `Update _config.yml`).
- Keep subject lines concise and action-oriented.
- Group related changes into a single commit when practical.
- PRs should include: purpose, key files changed, local verification steps run, and screenshots for visual/layout updates.
- Link the related issue when one exists.

## Security & Configuration Tips
- Do not commit secrets or tokens; this repo is publicly published.
- Keep `CNAME`, `.well-known/`, and `robots.txt` changes intentional and reviewed.
- Large media additions should be optimized before commit (see `rake optimize_images`).
