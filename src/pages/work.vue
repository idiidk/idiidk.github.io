<template>
  <div class="wrapper">
    <WorkList></WorkList>
  </div>
</template>

<script setup lang="ts">
import WorkList from "@/components/WorkList.vue";
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0;
}
</style>
