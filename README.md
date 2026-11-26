# giulia_tringali

Personal academic website, built with Jekyll and published at
<https://giuliatringali.github.io/giulia_tringali/>.

## Editing the site

Each tab in the navigation bar is one Markdown file in [`_pages/`](_pages):

| Tab           | File                        |
|---------------|-----------------------------|
| about         | `_pages/about.md`           |
| research      | `_pages/research.md`        |
| talks         | `_pages/talks.md`           |
| miscellaneous | `_pages/miscellaneous.md`   |

Edit the text below the `---` block and push to `master`: GitHub Actions rebuilds and publishes the site.

- **Add a tab:** copy one of the files, change `title`, `permalink` and `nav_order` (the tab's position).
- **Hide a tab:** set `nav: false`.
- **Images and PDFs:** put them in `assets/img/` (or create `assets/pdf/`) and link them with
  `{{ '/assets/img/photo.jpg' | relative_url }}`.
- **Name, email, social links:** in `_config.yml`.

## Preview locally

Needs Ruby 3.2 (with Devkit on Windows). Once:

```
bundle install
```

Then:

```
bundle exec jekyll serve
```

and open <http://127.0.0.1:4001/giulia_tringali/>.
