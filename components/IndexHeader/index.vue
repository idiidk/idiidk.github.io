<template>
  <div class="header">
    <HeaderBackground ref="background" class="background" />
    <HeaderOverlay />
  </div>
</template>

<script>
import HeaderOverlay from './HeaderOverlay.vue'
import HeaderBackground from './HeaderBackground.vue'

export default {
  name: 'Header',
  components: {
    HeaderOverlay,
    HeaderBackground,
  },
  methods: {
    stopRenderer() {
      this.$refs.background.stopRenderer()
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  .background {
    width: 100%;
    height: 100vh;
  }
}
</style>
