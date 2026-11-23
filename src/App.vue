<template>
  <AppBar />

  <main>
    <OverlayMenu
      v-model="appStore.menu"
      class="menu"
    />

    <!-- Keyed by path, so going from one project to the next fades too,
         instead of swapping the content in place. -->
    <RouterView v-slot="{ Component, route }">
      <Transition
        name="fade"
        mode="out-in"
        appear
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </Transition>
    </RouterView>
  </main>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
// Keep the pages' top margin inside <main>. Otherwise it collapses through
// to <body>, which then moves down when the first page appears.
main {
  display: flow-root;
}

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
