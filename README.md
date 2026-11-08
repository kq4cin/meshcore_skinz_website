# 📡 MeshCore Skinz

A one-page showcase of the themed MeshCore companion-radio apps, with screenshots and one-tap launch links.

| Skin | App | Source |
| --- | --- | --- |
| 🦅 USA (MeshCore Client) | [Launch](https://kq4cin.github.io/MESHCORE_SKINZ/) | [kq4cin/MESHCORE_SKINZ](https://github.com/kq4cin/MESHCORE_SKINZ) |
| 🌮 Taco (Taco Core) | [Launch](https://kq4cin.github.io/meshcore-_skinz_taco/) | [kq4cin/meshcore-_skinz_taco](https://github.com/kq4cin/meshcore-_skinz_taco) |
| 🛸 Alien (Galaxy Core) | [Launch](https://kq4cin.github.io/meshcore_skinz_ufo/) | [kq4cin/meshcore_skinz_ufo](https://github.com/kq4cin/meshcore_skinz_ufo) |
| 📣 Game Day (TN Ties) | [Launch](https://kq4cin.github.io/meshcore_skinz_game_day/) | [kq4cin/meshcore_skinz_game_day](https://github.com/kq4cin/meshcore_skinz_game_day) |

## Design: the elephant & goldfish model

The page is built for two kinds of visitor:

- **Goldfish** have a few seconds of attention. Everything they need is in the first screen: a one-line headline, four skin cards with a screenshot, and a big **Launch** button on each. No scrolling needed.
- **Elephants** read deeply and come back. Below the fold, each skin has a full screenshot gallery (tap to enlarge), a source-code link, the shared feature list, setup and install steps, and a repo table. The site also **remembers** which skin you launched last (in `localStorage`) and offers a "Welcome back" shortcut on your next visit.

## Files

- `index.html` — page content (works without JavaScript)
- `styles.css` — styles
- `app.js` — welcome-back memory and screenshot lightbox
- `assets/screenshots/<skin>/` — WebP screenshots copied from each skin repo's `docs/screenshots`
- `assets/icons/<skin>/icon.svg` — app icons from each skin repo

## Run locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

`.github/workflows/deploy.yml` publishes the site to GitHub Pages on every push to `main`. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

## Updating screenshots

Screenshots come from each skin repo's `docs/screenshots/*.png`. They are resized (phones to 390 px wide, desktop to 1280 px) and converted to WebP to keep the page fast.
