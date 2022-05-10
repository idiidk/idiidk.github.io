<template>
  <v-app>
    <AppBar />

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
  height: 100vh !important;
}
</style>
