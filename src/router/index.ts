import { createRouter, createWebHistory } from "vue-router";
import { handleHotUpdate, routes } from "vue-router/auto-routes";

import { useWorkStore } from "@/stores/work";
import { atMost, preloadFonts, preloadImage } from "@/utils/preload.util";

// Links from when the site used hash routing (/#/work/lasers) still work.
if (location.hash.startsWith("#/")) {
  history.replaceState(null, "", location.hash.slice(1));
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Before a page opens, load what's at the top of it: the fonts and, on a
// project page, the cover. The old page stays up meanwhile, and the new one
// fades in complete instead of building itself up in front of you. A slow
// connection waits at most 1.5 seconds; the rest fades in as it arrives.
router.beforeResolve(async (to) => {
  const waits = [preloadFonts()];

  if (to.name === "/work/[slug]") {
    const work = useWorkStore().work.find((w) => w.slug === to.params.slug);
    if (work) {
      waits.push(preloadImage(work.cover.image.src));
      const first = work.blocks[0];
      if (first?.type === "split" && first.media.image) {
        waits.push(preloadImage(first.media.image.src));
      }
    }
  }

  await atMost(Promise.all(waits), 1500);
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

// After a deploy, an open tab can ask for a page chunk that no longer exists.
// Reload once to pick up the new build.
const RELOAD_KEY = "dynamic-import-reload";

router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem(RELOAD_KEY)) {
      localStorage.setItem(RELOAD_KEY, "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem(RELOAD_KEY);
});

export default router;
