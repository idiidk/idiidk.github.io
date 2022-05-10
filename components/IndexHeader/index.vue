<template>
  <div class="header">
    <HeaderPixiBackground />
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
}
</script>

<style lang="scss" scoped></style>
