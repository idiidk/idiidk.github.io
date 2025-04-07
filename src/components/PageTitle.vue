<template>
  <h1 class="title">{{ props.title }}</h1>
</template>

<script setup lang="ts">
const props = defineProps<{ title?: string }>();
</script>

<style scoped>
.title {
  font-family: "Funnel Display", sans-serif;
  font-size: clamp(1rem, 4vw, 4rem) !important;
  font-weight: 500;
}
</style>
