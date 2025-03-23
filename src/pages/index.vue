<template>
  <OrbBackground :scattered="!store.menu"> </OrbBackground>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>

<style scoped></style>
