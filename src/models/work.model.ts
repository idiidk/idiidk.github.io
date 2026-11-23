/** How a screenshot is presented. */
export type ShotFrame =
  | "browser" // a website: gets a little browser bar on top
  | "window" // already a desktop app window: just rounded and lifted
  | "bare"; // a render or mock-up that brings its own framing

/** An image with its size, read at build time (`?as=metadata` imports). */
export interface Picture {
  src: string;
  width: number;
  height: number;
}

export interface Shot {
  image: Picture;
  caption?: string;
  frame?: ShotFrame;
}

/** The pieces a project page is built from, in the order they're listed. */
export type WorkBlock =
  /** Running text. `body` is a list of paragraphs. */
  | { type: "text"; heading?: string; body: string[] }
  /** One screenshot. `wide` lets it break out of the text column. */
  | ({ type: "shot"; wide?: boolean } & Shot)
  /** Two or three screenshots side by side. */
  | { type: "shots"; items: Shot[] }
  /** A row of big numbers. */
  | { type: "numbers"; items: { value: string; label: string }[] }
  /** Short named points, e.g. the parts that were interesting to build. */
  | { type: "points"; heading?: string; items: { title: string; body: string }[] }
  /** A side story, set apart from the main text. */
  | { type: "aside"; label: string; body: string }
  /** A video, played inline. */
  | { type: "video"; src: string; poster?: string; caption?: string };

export interface WorkModel {
  slug: string;
  title: string;
  /** One line under the title: what it is, in plain words. */
  tagline: string;
  /** The project's own colour, used for accents on its page and card. */
  accent: string;
  /** Left out when unknown. */
  year?: string;
  role: string;
  client?: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
  /** Image at the top of the page. */
  cover: Shot;
  /** Smaller versions of the cover for the overview card, as a srcset. */
  thumb: string;
  blocks: WorkBlock[];
}
