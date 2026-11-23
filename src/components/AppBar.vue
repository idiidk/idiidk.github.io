<template>
  <div
    ref="bar"
    :class="['bar', { mobile: isMobile }]"
  >
    <Logo class="logo" />
    <button
      type="button"
      class="menu-btn"
      :aria-label="store.menu ? 'Close menu' : 'Open menu'"
      :aria-expanded="store.menu"
      @click="store.menu = !store.menu"
    >
      <!-- Material Design Icons: menu and close -->
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        aria-hidden="true"
      >
        <path
          v-if="!store.menu"
          d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
        />
        <path
          v-else
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        />
      </svg>
    </button>
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

  position: absolute;
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
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-left: auto;
  z-index: 12;
  border: 1px solid currentColor;
  border-radius: 50%;
  background: transparent;
  color: white;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:active {
    transform: scale(0.94);
  }

  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  svg {
    fill: currentColor;
  }
}
</style>
