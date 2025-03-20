<template>
  <div :class="['bar', { mobile: isMobile }]">
    <v-img
      inline
      :width="`${isMobile ? '45' : '50'}px`"
      :src="logo"
      class="logo"
    />
    <v-btn
      @click="store.menu = !store.menu"
      icon
      color="white"
      class="menu-btn"
    >
      <v-icon v-if="!store.menu" icon="mdi-menu"></v-icon>
      <v-icon v-else icon="mdi-menu-close"></v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from "@/utils/window.util";
import { useAppStore } from "@/stores/app";
import logo from "@/assets/idiidk.png";

const store = useAppStore();
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
