<template>
  <v-container class="wrapper">
    <WorkList></WorkList>
  </v-container>
</template>

<script setup lang="ts">
import WorkList from "@/components/WorkList.vue";
import { useAppStore } from "@/stores/app";

const store = useAppStore();
const barHeight = computed(() => `${store.barHeight}px`);
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: v-bind(barHeight);
}
</style>
