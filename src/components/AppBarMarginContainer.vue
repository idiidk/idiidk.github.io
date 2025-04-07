<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const barHeight = computed(() => `${appStore.barHeight + 16}px`);
</script>

<style scoped>
.wrapper {
  margin-top: v-bind(barHeight);
  margin-bottom: v-bind(barHeight);
}
</style>
