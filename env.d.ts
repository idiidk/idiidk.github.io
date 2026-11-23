/// <reference types="vite/client" />

// Images imported through vite-imagetools.
declare module "*?as=metadata" {
  const picture: import("@/models/work.model").Picture;
  export default picture;
}

// A srcset string with several widths, e.g. "a.webp 720w, b.webp 1440w".
declare module "*&as=srcset" {
  const srcset: string;
  export default srcset;
}
