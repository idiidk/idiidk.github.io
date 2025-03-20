import { useWindowSize } from "@vueuse/core";

export const { width: windowWidth, height: windowHeight } = useWindowSize();

const MOBILE_MAX_WIDTH = 768;
export const isMobile = computed(() => windowWidth.value <= MOBILE_MAX_WIDTH);
