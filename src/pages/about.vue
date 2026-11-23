<template>
  <AppBarMarginContainer>
    <article class="about">
      <header class="hero">
        <div class="intro">
          <h1 class="title text-funnel">
            Hi, I'm Vincent.
          </h1>
          <p class="lede">
            I build software from Zutphen, in the Netherlands. When I'm not
            doing that, I make drum and bass under the name idiidk.
          </p>
        </div>

        <div class="photos">
          <img
            :src="vincent1"
            alt="Vincent Brouwer"
            width="350"
            height="350"
          >
          <img
            :src="vincent2"
            alt="Vincent Brouwer holding a keyboard up to the camera"
            width="350"
            height="350"
          >
        </div>
      </header>

      <section class="sides">
        <div
          class="side"
          style="--accent: #4895ef"
        >
          <span class="label">Code</span>
          <h2 class="text-funnel">
            Full-stack, front to back.
          </h2>
          <p>
            I like the whole road from an idea to something people actually
            use: how it looks and feels, and the parts nobody sees, like speed
            and data.
          </p>
          <p>
            I do this through my company, De Codebrouwers. We build custom
            software, and help clients work out what to build in the first
            place.
          </p>
          <a
            href="https://codebrouwers.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >De Codebrouwers ↗</a>
        </div>

        <div
          class="side"
          style="--accent: #f72585"
        >
          <span class="label">Music</span>
          <h2 class="text-funnel">
            Drum and bass, as idiidk.
          </h2>
          <p>
            Same name as this site. What I like about drum and bass is how much
            it asks of you: sound design that has to be precise, and a feel for
            rhythm and groove that can't be.
          </p>
          <a
            href="https://open.spotify.com/artist/5SIPahYMtvwQdrwvGJ4N1w"
            target="_blank"
            rel="noopener noreferrer"
          >Listen on Spotify ↗</a>
        </div>
      </section>

      <section class="overlap">
        <h2 class="text-funnel">
          Not that different, really
        </h2>
        <p>
          Both are about building something big out of small parts: lines of
          code into an app, layers of sound into a track. Both take patience, a
          lot of trying again, and a clear picture of where you want to end
          up.
        </p>
      </section>

      <dl class="facts">
        <div>
          <dt>Based in</dt>
          <dd>Zutphen, NL</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>
            <a href="mailto:vincent@codebrouwers.nl">vincent@codebrouwers.nl</a>
          </dd>
        </div>
        <div>
          <dt>Elsewhere</dt>
          <dd class="links">
            <a
              v-for="link in links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
            >{{ link.label }}</a>
          </dd>
        </div>
      </dl>

      <nav class="next">
        <RouterLink to="/work">
          <span class="label">Next</span>
          <span class="name text-funnel">See what I've built →</span>
        </RouterLink>
      </nav>
    </article>
  </AppBarMarginContainer>
</template>

<script setup lang="ts">
import vincent1 from "@/assets/about/vincent-1-min.webp";
import vincent2 from "@/assets/about/vincent-2-min.webp";

const links = [
  { label: "GitHub", href: "https://github.com/idiidk" },
  { label: "Instagram", href: "https://www.instagram.com/idiidk/" },
  { label: "SoundCloud", href: "https://soundcloud.com/idiidk" },
  { label: "LinkedIn", href: "https://linkedin.com/in/idiidk" },
];
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
  padding: 0 1rem 4rem;

  > * {
    width: 100%;
    max-width: 64rem;
  }
}

.label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.55;
}

h2 {
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.25;
}

p {
  line-height: 1.7;
  opacity: 0.85;
}

.hero {
  display: grid;
  gap: 3rem;
  align-items: center;
  padding-top: 2rem;

  @media (min-width: 860px) {
    grid-template-columns: 1.25fr 1fr;
  }

  .title {
    font-size: clamp(3rem, 7vw, 5rem);
    font-weight: 600;
    line-height: 1.05;
  }

  .lede {
    margin-top: 1.25rem;
    font-size: clamp(1.2rem, 2.2vw, 1.5rem);
    line-height: 1.5;
    opacity: 1;
  }
}

// Two photos, loosely stacked like prints on a table. They drop in one
// after the other and settle at their angle.
.photos {
  position: relative;
  height: 320px;
  max-width: 380px;
  width: 100%;
  margin: 0 auto;

  img {
    position: absolute;
    width: 62%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 24px 48px -16px rgba(0, 0, 0, 0.7);
    transition:
      rotate 0.3s ease,
      scale 0.3s ease;
    // "backwards" only holds the first frame during the delay, so the
    // hover below still works once the animation is done.
    animation: 0.7s cubic-bezier(0.2, 0.8, 0.3, 1.25) backwards;
  }

  img:first-child {
    top: 0;
    left: 0;
    rotate: -4deg;
    animation-name: drop-left;
    animation-delay: 0.2s;
  }

  img:last-child {
    right: 0;
    bottom: 0;
    rotate: 3deg;
    animation-name: drop-right;
    animation-delay: 0.38s;
  }

  img:hover {
    rotate: 0deg;
    scale: 1.03;
    z-index: 1;
  }

  @media (max-width: 500px) {
    height: 260px;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      animation: none;
    }
  }
}

@keyframes drop-left {
  from {
    opacity: 0;
    translate: -12px -28px;
    scale: 1.1;
    rotate: -14deg;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
    rotate: -4deg;
  }
}

@keyframes drop-right {
  from {
    opacity: 0;
    translate: 12px -28px;
    scale: 1.1;
    rotate: 12deg;
  }
  to {
    opacity: 1;
    translate: 0 0;
    scale: 1;
    rotate: 3deg;
  }
}

.sides {
  display: grid;
  gap: 1.5rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .side {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 12px;
    background: color-mix(in srgb, var(--accent) 10%, #121212);
    box-shadow: inset 0 0 0 1px
      color-mix(in srgb, var(--accent) 30%, transparent);

    .label {
      color: var(--accent);
      opacity: 1;
    }

    a {
      align-self: flex-start;
      margin-top: auto;
      padding-top: 0.5rem;
      text-decoration-color: var(--accent);
      text-underline-offset: 3px;
    }
  }
}

.overlap {
  max-width: 44rem;

  h2 {
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.1rem;
  }
}

.facts {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);

  dt {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.5;
  }

  dd {
    margin-top: 0.25rem;
  }

  a {
    text-underline-offset: 3px;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1rem;
  }
}

.next a {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-decoration: none;

  .name {
    font-size: 2rem;
    transition: color 0.2s;
  }

  &:hover .name {
    color: #4895ef;
  }
}
</style>
