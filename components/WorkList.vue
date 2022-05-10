<template>
  <v-row no-gutters>
    <v-col
      v-for="(project, index) of work"
      :key="project.slug"
      cols="12"
      md="6"
    >
      <div ref="projectWrappers" class="project-image-wrapper">
        <v-img class="image" :src="project.img"></v-img>

        <div class="overlay">
          <v-row>
            <h1 class="white--text">{{ project.title }}</h1>
          </v-row>
          <v-row>
            <span class="white--text">{{ project.description }}</span>
          </v-row>
          <v-row>
            <v-btn class="read-more" dark outlined>read more</v-btn>
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import gsap, { Power3 } from 'gsap'

export default {
  name: 'WorkList',
  props: {
    work: Array,
  },
  watch: {
    work(work) {
      console.log(work)
    },
  },
  mounted() {
    setTimeout(() => {
      for (let i = 0; i < this.$refs.projectWrappers.length; i++) {
        let delay = 0

        // If the layout consists of two images next to each other,
        // apply a small delay to the second image for a nice effect
        if (this.breakpoint >= 2) {
          delay = i % 2 === 0 ? 0 : 0.3 * i
        }

        const element = this.$refs.projectWrappers[i]
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
          },
        })

        timeline.to(
          element.getElementsByClassName('image')[0],
          {
            autoAlpha: 1,
            scale: 1,
            delay: delay,
            duration: 1,
            ease: Power3.easeOut,
          },
          'start'
        )

        timeline.fromTo(
          element.getElementsByClassName('overlay')[0],
          {
            x: -20,
          },
          {
            autoAlpha: 1,
            x: 0,
            delay: delay + 0.1,
            duration: 1,
            ease: Power3.easeOut,
          },
          'start'
        )
      }
    }, 100)
  },
  computed: {
    breakpoint() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 0
        case 'sm':
          return 1
        case 'md':
          return 2
        case 'lg':
          return 3
        case 'xl':
          return 4
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.project-image-wrapper {
  position: relative;

  .image {
    height: 100vh;

    opacity: 0;
    transform: scale(0.95);

    padding: 2rem;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;

    opacity: 0;

    padding: clamp(1rem, 5vw, 4rem);
  }

  .read-more {
    margin-top: 2rem;
  }
}
</style>
