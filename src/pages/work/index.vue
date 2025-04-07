<template>
  <AppBarMarginContainer>
    <WorkList :work="workStore.work"></WorkList>
  </AppBarMarginContainer>
</template>

<script setup lang="ts">
import WorkList from "@/components/WorkList.vue";
import { useWorkStore } from "@/stores/work";

const workStore = useWorkStore();
</script>

<style lang="scss" scoped></style>
