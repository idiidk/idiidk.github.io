<template>
  <AppBar></AppBar>

  <v-main>
    <OverlayMenu v-model="store.menu" class="menu"></OverlayMenu>

    <router-view v-slot="{ Component }">
      <v-fade-transition>
        <component :is="Component"></component>
      </v-fade-transition>
    </router-view>
  </v-main>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<style lang="scss" scoped>
.menu {
  z-index: 8;
}
</style>
