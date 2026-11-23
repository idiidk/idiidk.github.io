import type { Directive } from "vue";

/**
 * Fades an image in once it has loaded, instead of letting it pop in. The
 * image needs a width and height so its space is kept while it loads.
 *
 * `<img v-fade-in ...>`
 */
export const vFadeIn: Directive<HTMLImageElement> = {
  mounted(img) {
    // Already there, e.g. from the cache or preloaded before the page opened.
    if (img.complete && img.naturalWidth > 0) {
      return;
    }

    img.classList.add("fade-in");
    const show = () => img.classList.add("fade-in--loaded");
    img.addEventListener("load", show, { once: true });
    // On an error, show the alt text rather than nothing.
    img.addEventListener("error", show, { once: true });
  },
};
