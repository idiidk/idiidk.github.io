<template>
  <h1 class="title text-funnel">{{ props.title }}</h1>
</template>

<script setup lang="ts">
const props = defineProps<{ title?: string }>();
</script>

<style scoped>
.title {
  font-size: clamp(2rem, 4vw, 4rem) !important;
  font-weight: 500;
}
</style>
