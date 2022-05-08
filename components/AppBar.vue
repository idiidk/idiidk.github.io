<template>
  <v-app-bar dark color="rgba(255,255,255,0)" elevate-on-scroll app>
    <v-toolbar-title>Vincent Brouwer</v-toolbar-title>

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
}
</script>

<style lang="scss" scoped></style>
