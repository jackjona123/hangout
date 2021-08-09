# Jack Jona Hangouts Website

The official website for my hangout. You can join my Discord ([here](https://discord.gg/NhUJhND32E).

## View The Live Site [Here](https://hangout.jackjona.live)

## Software & Resources

- React
- Gatsby
- Gatsby Plugins
- Styled Components

### Develop Locally

1. `git clone git@github.com:jackjona123/hangout.git`
2. `npm install`
3. `npm run develop`
4.  Go to http://localhost:8000

#### Adding a new resource

1. Create a markdown page in the appropriate location. For example `/src/content/docs/example/test.md`
2. Add the required frontmatter for the post. [More info here](#frontmatter)
3. Write your main content.
4. Add `external_resources` about the subject if possible.
5. Run through the [setup steps](#setup) if possible to make sure your changes look ok.
6. Create a pull request.

#### Frontmatter

Frontmatter is the optional metadata attached to every markdown file, like the list of authors or the creation date of the file. It is essentially just yaml syntax inside `---` delimiters within a markdown file. If you're not familiar with yaml you can find some refreshers [here](https://learnxinyminutes.com/docs/yaml/)

An example frontmatter might look like this

```md
---
authors:
  - "Xetera#0001"
title: "Working with Lists in Elixir"
created_at: 2020/01/30
external_resources:
  - text: Elixir docs: List
    href: "https://hexdocs.pm/elixir/List.html"
---
