<template>
  <div>
    <OrbBackground :scattered="!appStore.menu"> </OrbBackground>
    <HomeInfoBlock class="info" :style="{ mobile: isMobile }"></HomeInfoBlock>
  </div>
</template>

<script lang="ts" setup>
import { isMobile } from "@/utils/window.util";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
</script>

<style lang="scss" scoped>
.info {
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  text-align: right;

  &.mobile {
    text-align: center;
    right: unset;
    width: 100%;

    right: 0;
    bottom: 2rem;
  }
}
</style>
