<template>
  <div class="header-overlay">
    <h1 ref="animate-1" class="header-title white--text">
      Hi and welcome to my space
    </h1>
    <span ref="animate-2" class="header-subtitle white--text">
      My name is Vincent Brouwer <br />
      I run a company called
      <a
        class="white--text"
        href="https://codebrouwers.github.io/"
        target="_blank"
        ><b>De Codebrouwers</b></a
      >
      based in the Netherlands
    </span>

    <div ref="animate-3" class="buttons">
      <v-btn @click="navigate('work')" dark outlined>my work</v-btn>
      <v-btn @click="navigate('about')" dark outlined>about</v-btn>
    </div>
  </div>
</template>

<script>
import gsap, { Power3 } from 'gsap'

export default {
  name: 'HeaderOverlay',
  methods: {
    async navigate(routeName) {
      const promises = []
      const reverseAnimate = this.animate.reverse()

      for (let i = 0; i < reverseAnimate.length; i++) {
        promises.push(
          gsap.to(reverseAnimate[i], {
            autoAlpha: 0,
            delay: 0.1 * i,
            ease: Power3.easeOut,
          })
        )
      }

      await Promise.all(promises)

      this.$router.push({ name: routeName })
    },
  },
  mounted() {
    setTimeout(() => {
      for (let i = 0; i < this.animate.length; i++) {
        gsap.fromTo(
          this.animate[i],
          { autoAlpha: 0, y: -50 },
          {
            autoAlpha: 1,
            y: 0,
            delay: 0.1 * i,
            duration: 1,
            ease: Power3.easeOut,
          }
        )
      }
    }, 500)
  },
  computed: {
    animate() {
      return Object.keys(this.$refs)
        .filter((k) => k.startsWith('animate'))
        .map((e) => this.$refs[e])
    },
  },
}
</script>

<style lang="scss" scoped>
.header-overlay {
  display: flex;
  position: absolute;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  top: 0;
  left: 0;

  width: calc(100% - 30vw);
  height: 100vh;

  margin: 0 15vw;

  font-size: clamp(1rem, 3vw, 2rem);

  .header-title {
    line-height: 1;
    margin-bottom: 1rem;

    opacity: 0;
  }

  .header-subtitle {
    opacity: 0;
  }

  .buttons {
    margin-top: 1rem;

    opacity: 0;
  }
}
</style>
