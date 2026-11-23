const MOBILE_MAX_WIDTH = 768;

export const windowWidth = ref(window.innerWidth);
export const windowHeight = ref(window.innerHeight);

window.addEventListener(
  "resize",
  () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  },
  { passive: true }
);

export const isMobile = computed(() => windowWidth.value <= MOBILE_MAX_WIDTH);
