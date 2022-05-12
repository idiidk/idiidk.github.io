<template>
  <div class="header">
    <HeaderPixiBackground ref="headerPixiBackground" />
    <HeaderOverlay />
  </div>
</template>

<script>
import HeaderOverlay from './HeaderOverlay.vue'
import HeaderPixiBackground from './HeaderPixiBackground.vue'

export default {
  name: 'Header',
  components: {
    HeaderOverlay,
    HeaderPixiBackground,
  },
  methods: {
    destroyPixi() {
      this.$refs.headerPixiBackground.destroy()
    },
  },
}
</script>

<style lang="scss" scoped></style>
