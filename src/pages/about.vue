<template>
  <AppBarMarginContainer>
    <div class="container">
      <PageTitle title="About me" />

      <div class="photos">
        <img
          v-if="!isMobile"
          :src="vincent1"
          alt="Vincent Brouwer"
          width="350"
          height="350"
        >
        <img
          :src="vincent2"
          alt="Vincent Brouwer holding a keyboard"
          width="350"
          height="350"
        >
      </div>

      <p>
        My name is Vincent Brouwer, and I build things. Based in Zutphen,
        Netherlands, my primary craft is Full-Stack Development. I enjoy the
        entire process of bringing digital ideas to life, tackling everything
        from front-end aesthetics and usability to back-end performance and data
        management.
      </p>

      <br>

      <p>
        This work finds its professional expression through
        <a
          href="https://codebrouwers.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >De Codebrouwers</a>, my company dedicated to providing clients with thoughtful full-stack
        development, custom software creation, and strategic digital concepts.
        We aim to be more than just implementers; we strive to be creative
        partners, building solutions that are both technically sound and
        conceptually strong.
      </p>

      <br>
      <br>

      <p>
        But my drive to create extends beyond the digital realm of web
        applications. I'm also involved in the world of electronic music,
        specifically producing Drum and Bass, also under the name
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/artist/5SIPahYMtvwQdrwvGJ4N1w"
        >idiidk</a>. The energy, complexity, and sonic possibilities within DnB fascinate
        me. It's a genre that demands both technical precision in sound design
        and a feel for rhythm and groove – a different kind of full-stack
        challenge, in a way.
      </p>

      <br>

      <p>
        For me, coding and music production aren't entirely separate worlds.
        Both involve building intricate systems from smaller parts, whether it's
        lines of code forming an application or layers of sound creating a
        track. Both require patience, problem-solving, and a vision for the
        final outcome.
      </p>

      <br>

      <p>
        This portfolio highlights my development projects – I invite you to
        <a href="/#/work">take a look.</a>
      </p>
    </div>
  </AppBarMarginContainer>
</template>

<script setup lang="ts">
import vincent1 from "@/assets/about/vincent-1-min.webp";
import vincent2 from "@/assets/about/vincent-2-min.webp";

import { isMobile } from "@/utils/window.util";
</script>

<style lang="scss" scoped>
.photos {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin: 20px 0 44px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
}
</style>
