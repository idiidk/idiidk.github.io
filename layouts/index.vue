<template>
  <v-app>
    <AppBar ref="appBar" />

    <v-main class="main">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'IndexLayout',
  layout: 'index',
}
</script>

<style scoped>
.main {
  padding-top: 0 !important;
  height: 100vh !important;

  overflow: hidden;
}
</style>
