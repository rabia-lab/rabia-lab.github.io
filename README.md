# Rabia Precision Agriculture Lab website

A plain static site (HTML, CSS, a little JavaScript, images). No build step. It works as is on GitHub Pages.

## Put it on GitHub (user site: rabia-lab.github.io)
1. Open the repository `rabia-lab/rabia-lab.github.io` on github.com.
2. Remove the old site files first (the old Jekyll files such as `_config.yml`, `_layouts`, `_posts`, `_includes` would clash). In the repo, open each old file or folder and delete it, or start from a new empty repository with the same name.
3. Click **Add file > Upload files**. Drag in everything from this folder, including the `images`, `assets`, `people`, `gallery` and other page folders. Keep the folder structure. Commit to `main`.
4. In **Settings > Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`. The site goes live at https://rabia-lab.github.io/ within a few minutes.

With git instead:
```bash
git clone https://github.com/rabia-lab/rabia-lab.github.io.git
cd rabia-lab.github.io
git rm -r --quiet .            # remove the old site
cp -R /path/to/this/folder/. . # copy the new site in (includes .nojekyll)
git add -A && git commit -m "New site" && git push
```

## What is where
- `index.html` is the home page. Each other page is a folder with its own `index.html`:
  `research/`, `equipment/`, `software/`, `publications/`, `people/` (and `people/dr-rabia/`), `gallery/`, `media/`, `join/`.
- `assets/site.css` holds every style. `assets/site.js` holds the menu and the photo viewer.
- `images/web/` holds the photos (small AVIF files). `images/og-share.jpg` is the picture shown when a link is shared.
- `404.html` is the "page not found" page. `robots.txt` and `sitemap.xml` help search engines.
- `.nojekyll` tells GitHub Pages to publish the files exactly as they are.

## Everyday edits
- Change text: open the page's `index.html` on GitHub, click the pencil icon, edit, commit.
- Add a news item: open `media/index.html`, find `<h2 id="media-news">News</h2>` and replace the "Nothing new yet" line.
- Add a photo: see the separate maintenance kit (`IMAGES-README.md`). Every photo needs alt text.
- Custom domain later: replace `https://rabia-lab.github.io/` with the new address in `sitemap.xml`, `robots.txt` and the `canonical`/`og:` lines of each page.
