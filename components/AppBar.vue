<template>
  <v-app-bar
    :dark="dark"
    :color="transparent ? 'rgba(255,255,255,0)' : 'white'"
    elevation="0"
    app
  >
    <v-toolbar-title class="app-bar-title" @click="$router.push('/')">
      Vincent Brouwer
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn href="https://github.com/idiidk" icon>
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn href="https://www.linkedin.com/in/vincent-brouwer-150587144/" icon>
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>

    <AppBarContactModal></AppBarContactModal>
  </v-app-bar>
</template>

<script>
import AppBarContactModal from '@/components/AppBarContactModal.vue'

export default {
  name: 'AppBar',
  props: {
    dark: Boolean,
    transparent: Boolean,
  },
  components: { AppBarContactModal },
}
</script>

<style lang="scss" scoped>
.app-bar-title {
  cursor: pointer;
}
</style>
