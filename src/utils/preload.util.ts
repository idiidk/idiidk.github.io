/**
 * Loads and decodes an image, so it can be shown straight away. Resolves
 * either way: a broken image shouldn't keep a page from opening.
 */
export function preloadImage(src: string): Promise<void> {
  const img = new Image();
  img.src = src;
  return img.decode().catch(() => {});
}

/** Starts loading the site's fonts, so text doesn't reflow when they arrive. */
export function preloadFonts(): Promise<unknown> {
  return Promise.all([
    document.fonts.load('1em "Inter"'),
    document.fonts.load('600 1em "Funnel Display"'),
  ]).catch(() => {});
}

/** Waits for `promise`, but no longer than `ms`. */
export function atMost(promise: Promise<unknown>, ms: number): Promise<unknown> {
  return Promise.race([promise, new Promise((r) => setTimeout(r, ms))]);
}
