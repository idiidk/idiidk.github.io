<template>
  <AppBar></AppBar>

  <v-main>
    <OverlayMenu v-model="store.menu" class="menu"></OverlayMenu>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
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

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
