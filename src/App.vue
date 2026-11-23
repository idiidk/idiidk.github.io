<template>
  <AppBar />

  <main>
    <OverlayMenu
      v-model="appStore.menu"
      class="menu"
    />

    <RouterView v-slot="{ Component }">
      <Transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.menu {
  z-index: 8;
}

.fade-enter-from,
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
