<template>
  <v-row dense>
    <v-col
      v-for="(project, index) of work"
      :key="project.slug"
      cols="12"
      md="6"
    >
      <div ref="projectWrappers" class="project-image-wrapper">
        <v-img aspect-ratio="1" class="image" :src="'/' + project.img"></v-img>
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
  mounted() {
    setTimeout(() => {
      for (let i = 0; i < this.$refs.projectWrappers.length; i++) {
        let delay = 0

        // If the layout consists of two images next to each other,
        // apply a small delay to the second image for a nice effect
        if (this.breakpoint >= 2) {
          delay = i % 2 === 0 ? 0 : 0.3 * i
        } else if (this.breakpoint === 0) {
          delay = i * 0.3
        }

        const element = this.$refs.projectWrappers[i]

        gsap.to(element.getElementsByClassName('image')[0], {
          scrollTrigger: {
            trigger: element,
          },
          autoAlpha: 1,
          scale: 1,
          delay: delay,
          duration: 1,
          ease: Power3.easeOut,
        })
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
