<template>
  <div ref="bar" :class="['bar', { mobile: isMobile }]">
    <Logo class="logo"></Logo>
    <v-btn
      @click="store.menu = !store.menu"
      icon
      color="white"
      class="menu-btn"
      variant="outlined"
    >
      <v-icon v-if="!store.menu" icon="mdi-menu"></v-icon>
      <v-icon v-else icon="mdi-close"></v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from "@/utils/window.util";
import { useAppStore } from "@/stores/app";

const store = useAppStore();
const bar = ref<HTMLDivElement>();

onMounted(() => {
  store.barHeight = bar.value?.clientHeight || 80;
});
</script>

<style lang="scss" scoped>
.bar {
  padding: 1rem;

  position: absolute !important;
  top: 0;
  width: 100vw;

  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile {
  padding-top: 2rem;

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.menu-btn {
  margin-left: auto;
  z-index: 12;
}
</style>
