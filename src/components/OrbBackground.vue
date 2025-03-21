<template>
  <div class="wrapper">
    <div class="orbs">
      <canvas ref="backgroundCanvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isMobile, windowHeight, windowWidth } from "@/utils/window.util";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Configurable Parameters
const BLOB_MOVE_SPEED = 0.01;
const FAST_BLOB_MOVE_SPEED = 0.02; // Increased speed for scattering
const BLOB_SIZE_TRANSITION_SPEED_MOBILE = 0.01;
const BLOB_SIZE_TRANSITION_SPEED_DESKTOP = 0.005;
const BLOB_SIZE_PERCENTAGE_MAX_MOBILE = 65;
const BLOB_SIZE_PERCENTAGE_MIN_MOBILE = 45;
const BLOB_SIZE_PERCENTAGE_MAX_DESKTOP = 50;
const BLOB_SIZE_PERCENTAGE_MIN_DESKTOP = 35;

const rendering = ref(true);
const backgroundCanvas = ref<HTMLCanvasElement>();

const sizeTransitionSpeed = computed(() =>
  isMobile.value
    ? BLOB_SIZE_TRANSITION_SPEED_MOBILE
    : BLOB_SIZE_TRANSITION_SPEED_DESKTOP
);

//Helper to know when to stop checking
const allSettled = ref(false);

const props = defineProps<{ scattered: boolean }>();
const scattered = computed(() => props.scattered);

// Helper Functions
const randomBetweenFloat = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const lerp = (start: number, end: number, t: number): number =>
  start + (end - start) * t;

class Blob {
  ctx: CanvasRenderingContext2D;
  color: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  originalX: number; // Store original X position
  originalY: number; // Store original Y position
  radius: number;
  targetRadius: number;
  finalRadius: number;
  easing: number;
  sizeEasing: number;
  settled: boolean;
  settlementProgress: number;
  isMobile: Ref<boolean>;
  isSettledRef: Ref<boolean>;
  noShadow: boolean; // Added property for disabling shadow

  constructor(
    ctx: CanvasRenderingContext2D,
    color: string,
    sizeEasing: number,
    sizePercentage: number,
    isMobile: Ref<boolean>,
    isSettledRef: Ref<boolean>,
    noShadow: boolean // Added noShadow parameter
  ) {
    this.ctx = ctx;
    this.color = color;
    this.sizeEasing = sizeEasing;
    this.settled = false;
    this.settlementProgress = 0;
    this.isMobile = isMobile;
    this.isSettledRef = isSettledRef;
    this.noShadow = noShadow; // Set the noShadow property

    this.x = randomBetweenFloat(0, this.ctx.canvas.width);
    this.y = randomBetweenFloat(0, this.ctx.canvas.height);
    this.originalX = this.x; // Store original X position
    this.originalY = this.y; // Store original Y position

    this.targetX = this.isMobile.value ? this.ctx.canvas.width / 2 : 0;
    this.targetY = 0;

    const screenSize = Math.max(this.ctx.canvas.width, this.ctx.canvas.height);
    this.radius = screenSize;

    //Final size based on screen height
    this.finalRadius = (this.ctx.canvas.height * sizePercentage) / 100;
    this.targetRadius = this.finalRadius;
    this.easing = BLOB_MOVE_SPEED;
  }

  update() {
    //Conditionally changes the speed:
    this.easing = this.isSettledRef.value
      ? BLOB_MOVE_SPEED
      : FAST_BLOB_MOVE_SPEED;

    if (this.isSettledRef.value) {
      this.targetX = this.isMobile.value ? this.ctx.canvas.width / 2 : 0;
      this.targetY = 0;
      this.targetRadius = this.finalRadius;
    } else {
      this.targetX = this.originalX;
      this.targetY = this.originalY;
      const screenSize = Math.max(
        this.ctx.canvas.width,
        this.ctx.canvas.height
      );
      this.targetRadius = screenSize;
    }

    this.x = lerp(this.x, this.targetX, this.easing);
    this.y = lerp(this.y, this.targetY, this.easing);
    this.radius = lerp(this.radius, this.targetRadius, this.sizeEasing);

    const positionProgress =
      1 -
      Math.min(
        Math.abs(this.x - this.targetX) / (this.ctx.canvas.width / 2),
        1
      );
    const sizeProgress =
      1 -
      Math.min(
        Math.abs(this.radius - this.targetRadius) / (this.radius / 2),
        1
      );

    this.settlementProgress = (positionProgress + sizeProgress) / 2;

    const positionSettled =
      Math.abs(this.x - this.targetX) < 1 &&
      Math.abs(this.y - this.targetY) < 1;
    const sizeSettled = Math.abs(this.radius - this.targetRadius) < 1;

    this.settled = positionSettled && sizeSettled;

    if (this.settled) {
      this.settlementProgress = 1;
      this.x = this.targetX;
      this.y = this.targetY;
      this.radius = this.targetRadius;
    }
  }

  render() {
    this.update();

    this.ctx.beginPath();
    const gradient = this.ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.2,
      this.x,
      this.y,
      this.radius
    );

    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.5, `${this.color}66`);
    gradient.addColorStop(1, `${this.color}00`);

    this.ctx.fillStyle = gradient;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    // Conditionally apply shadow based on noShadow flag
    if (!this.noShadow) {
      this.ctx.shadowBlur = 20;
      this.ctx.shadowColor = this.color;
    } else {
      this.ctx.shadowBlur = 0;
      this.ctx.shadowColor = "transparent"; // Or any transparent color
    }

    this.ctx.fill();
  }
}

// Lifecycle Hooks
onBeforeUnmount(() => {
  rendering.value = false;
});

onMounted(() => {
  const canvas = backgroundCanvas.value;
  if (!canvas) throw new Error("No ref to background canvas");

  const ctx = canvas.getContext("2d")!; // Safe assertion, checked above
  ctx.globalCompositeOperation = "lighter"; // Enable better blending

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); //Detect if the browser is safari

  const baseColors = [
    "#f72585",
    "#b5179e",
    "#7209b7",
    "#560bad",
    "#480ca8",
    "#3a0ca3",
    "#3f37c9",
    "#4361ee",
    "#4895ef",
    "#4cc9f0",
  ];

  // Conditionally limit the number of blobs and disable shadows on Safari
  const colors = isSafari
    ? baseColors.slice(0, 10).sort(() => Math.random() - 0.5) // Shuffle array in place
    : baseColors.sort(() => Math.random() - 0.5); // Shuffle array in place

  let blobs: Blob[] = [];
  let resizeDebounce: number;

  const handleSizeChange = () => {
    clearTimeout(resizeDebounce);

    ctx.canvas.width = windowWidth.value;
    ctx.canvas.height = windowHeight.value;

    resizeDebounce = setTimeout(() => {
      if (blobs.length > 0) return;

      blobs = [];
      allSettled.value = false;

      const totalBlobs = colors.length;
      const sizePercentageMax = isMobile.value
        ? BLOB_SIZE_PERCENTAGE_MAX_MOBILE
        : BLOB_SIZE_PERCENTAGE_MAX_DESKTOP;
      const sizePercentageMin = isMobile.value
        ? BLOB_SIZE_PERCENTAGE_MIN_MOBILE
        : BLOB_SIZE_PERCENTAGE_MIN_DESKTOP;

      colors.forEach((color, index) => {
        const sizePercentage =
          sizePercentageMax -
          ((sizePercentageMax - sizePercentageMin) * index) / (totalBlobs - 1);
        blobs.push(
          new Blob(
            ctx,
            color,
            sizeTransitionSpeed.value,
            sizePercentage,
            isMobile,
            scattered,
            isSafari // Pass the isSafari flag to disable shadow in Safari
          )
        );
      });
    }, 100);
  };

  window.addEventListener("resize", handleSizeChange);
  window.addEventListener("orientationchange", () =>
    setTimeout(handleSizeChange, 200)
  );

  handleSizeChange();

  const render = () => {
    if (!rendering.value) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0,0.95)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!allSettled.value) {
      allSettled.value = blobs.every((blob) => blob.settled);
    }

    blobs.forEach((blob) => {
      if (!blob.settled) {
        blob.sizeEasing = sizeTransitionSpeed.value;
      }
      blob.render();
    });

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  canvas {
    display: block;
  }

  .orbs {
    position: relative;
  }
}
</style>
