# idiidk.nl

My personal site and portfolio: [idiidk.nl](https://idiidk.nl).

Built with Vue 3, Vue Router, Pinia and Vite. No UI framework: the styling is plain CSS (SCSS) in the components.

## Running it

You need [Bun](https://bun.sh).

```bash
bun install
bun run dev      # dev server at http://localhost:3000
bun run build    # type-check, then build to dist/
bun run preview  # serve the built site
bun run lint     # eslint, with fixes
```

## Where things are

| Path | What's in it |
| --- | --- |
| `src/pages/` | One file per page. Routes come from the file names (`work/[slug].vue` is `/work/:slug`). |
| `src/components/` | Used in templates without importing them. |
| `src/stores/work.ts` | All projects and the content of their pages. |
| `src/models/work.model.ts` | The shape of a project and the blocks a project page is built from. |
| `src/assets/work/<project>/` | Screenshots, as `.webp`. |
| `src/styles/main.scss` | Global styles: reset, fonts, page colour. |

`vue` and `vue-router` functions such as `ref`, `computed` and `useRoute` are auto-imported too.

## Adding a project

1. Put the screenshots in `src/assets/work/<project>/` as `.webp`.
2. Import them in `src/stores/work.ts` with `?as=metadata`, so each image comes with its width and height:
   ```ts
   import fooHome from "@/assets/work/foo/home.webp?as=metadata";
   ```
3. Import the cover a second time with `?w=720&format=webp`. That's the small version for the card on the overview.
4. Add an entry to the `work` list, and build the page out of blocks (`text`, `shot`, `shots`, `numbers`, `points`, `aside`, `video`). `work.model.ts` explains each one.

The order of the list is the order on the site.

## Deploying

Every push to `main` builds the site with GitHub Actions and publishes `dist/` to the `gh-pages` branch, served at idiidk.nl. See `.github/workflows/deploy.yml`.
