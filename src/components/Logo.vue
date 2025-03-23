<template>
  <h1
    @click="
      store.menu = false;
      $router.push('/');
    "
    class="logo"
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
  font-family: "Funnel Display", sans-serif;
  font-optical-sizing: auto;

  font-weight: 500;

  cursor: pointer;
}
</style>
