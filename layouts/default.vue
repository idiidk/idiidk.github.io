<template>
  <v-app>
    <AppBar transparent dark />

    <v-main class="main">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'IndexLayout',
  components: {
    AppBar,
  },
}
</script>

<style scoped>
.main {
  padding-top: 0 !important;
  height: 100vh !important;
}
</style>
