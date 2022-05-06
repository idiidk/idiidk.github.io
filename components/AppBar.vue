<template>
  <v-app-bar dark color="rgba(255,255,255,0)" elevate-on-scroll app>
    <v-toolbar-title>Vincent Brouwer</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-github</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-linkedin</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
}
</script>

<style lang="scss" scoped></style>
