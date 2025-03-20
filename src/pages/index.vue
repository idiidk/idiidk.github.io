<template>
  <OrbBackground :scattered="!store.menu"> </OrbBackground>
  <OrbOverlayMenu :open="store.menu"></OrbOverlayMenu>
</template>

<script lang="ts" setup>
import OrbOverlayMenu from "@/components/OrbOverlayMenu.vue";
import { useAppStore } from "@/stores/app";

const store = useAppStore();
</script>
