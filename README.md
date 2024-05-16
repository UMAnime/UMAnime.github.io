# UMAnime Website
This website is modified from https://getbootstrap.com/docs/3.4/examples/cover/

## Structure
- `Assets/`: Pictures and Videos
- `css/`: minimum version of Bootstrap and customized CSS
    - `cover.css`: modified CSS from the original Cover theme, which is shared among HTMLs  
    Overrides are defined in the separate CSS section in the respective HTML
    - ~~`sakura.css`: used for sakura petals effect~~ Currently unused
- `js/`: Helper JavaScript functions
    - ~~`sakura.js`~~ Currently unused due to weird bugs
    - `event.js`: Main content in the `events.html`
- `markdown/`: Markdown file for the content of event page 
- `CNAME`: GitHub Pages wants this file for proper DNS CNAME registration
- `events.html`: Events page skeleton
- `index.html`: Index page
- `staff.html`: Staff information page

The most frequently changed page, namely the events page, its content is populated by `events.md`.

Other pages, like the index and staff page, which are less frequently modified, are written in HTML.

## Events Page Technical Implementation
Markdown files are gathered separately on the client browser side, then parsed using [commonmark.js](https://github.com/commonmark/commonmark.js/) into HTML. 

All `img` tags in the parsed HTML are injected with the local CSS class `.responsive-img`. When the viewport is wider than 768px, the image width will be 50% for a better view experience on the desktop.

Then the HTML is injected into the `main` tag with the id of `main`.
