import { createRouter, createWebHashHistory } from "vue-router";
import { handleHotUpdate, routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
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
