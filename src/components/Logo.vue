<template>
  <h1
    @click="
      store.menu = false;
      $router.push('/');
    "
    class="logo text-funnel"
  >
    idiidk
  </h1>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<style scoped>
.logo {
  font-optical-sizing: auto;

  font-weight: 500;

  cursor: pointer;
}
</style>
