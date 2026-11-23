/// <reference types="vite/client" />

// Images imported through vite-imagetools.
declare module "*?as=metadata" {
  const picture: import("@/models/work.model").Picture;
  export default picture;
}

declare module "*&format=webp" {
  const src: string;
  export default src;
}
