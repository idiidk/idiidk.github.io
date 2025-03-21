<template>
  <div class="menu" v-if="showing">
    <div class="overlay" ref="overlayRef"></div>

    <div class="list" ref="listRef">
      <h1 @click="navigateToRoute('/')">Home</h1>
      <h1 @click="navigateToRoute('/work')">My Work</h1>
      <h1>About Me</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";
import gsap from "gsap";

const router = useRouter();

const model = defineModel<boolean>();

const showing = ref(false);

const overlayRef = ref<HTMLDivElement | null>(null);
const listRef = ref<HTMLDivElement | null>(null);

const animationDuration = 0.5;
const staggerAmount = 0.15;
const overlayFadeInDuration = 0.3;
const overlayFadeOutDuration = 0.3; // Reduced to match fadeIn for consistency

const overlayTween = ref<gsap.core.Tween | null>(null);
const listTween = ref<gsap.core.Tween | null>(null);

const navigateToRoute = (to: RouteLocationRaw) => {
  router.push(to);
  model.value = false;
};

// Function to safely kill a tween
const killTween = (tween: gsap.core.Tween | null) => {
  if (tween && tween.isActive()) {
    tween.kill();
  }
};

watch(model, async (value) => {
  // Kill any existing tweens before starting new ones.
  killTween(overlayTween.value);
  killTween(listTween.value);

  if (value) {
    showing.value = true;
    await nextTick();

    // Before animating in, set the initial y position.
    if (listRef.value && listRef.value.children) {
      Array.from(listRef.value.children).forEach((el) => {
        gsap.set(el, { y: -20, opacity: 0 }); // set initial state
      });
    }

    await animateOverlay(true);
    await animateListItems(true);
  } else {
    await animateListItems(false);
    await animateOverlay(false);

    // Delay hiding the element until the fadeOut is complete AND the item animations are complete.
    await Promise.all([
      new Promise<void>((resolve) =>
        setTimeout(resolve, overlayFadeOutDuration * 1000)
      ),
      new Promise<void>((resolve) => {
        if (listTween.value) {
          listTween.value.eventCallback("onComplete", () => {
            resolve();
          });
        } else {
          resolve(); // If there's no listTween, resolve immediately.
        }
      }),
    ]);
    showing.value = false;
  }
});

const animateOverlay = (animateIn: boolean): Promise<void> => {
  return new Promise((resolve) => {
    if (!overlayRef.value) {
      resolve();
      return;
    }

    const duration = animateIn ? overlayFadeInDuration : overlayFadeOutDuration;

    overlayTween.value = gsap.to(overlayRef.value, {
      duration: duration,
      opacity: animateIn ? 1 : 0,
      ease: "linear", // Changed to linear
      onComplete: () => resolve(), // Resolve the promise when animation completes
    });
  });
};

const animateListItems = (animateIn: boolean): Promise<void> => {
  return new Promise((resolve) => {
    if (!listRef.value || !listRef.value.children) {
      resolve();
      return;
    }

    const targets = Array.from(listRef.value.children);

    // Check if there are any targets to animate
    if (targets.length === 0) {
      resolve();
      return;
    }

    const staggerFrom = animateIn ? "start" : "end";

    listTween.value = gsap.to(targets, {
      opacity: animateIn ? 1 : 0,
      y: 0,
      stagger: {
        each: staggerAmount,
        from: staggerFrom,
      },
      duration: animationDuration,
      ease: "linear", // Changed to linear
      onComplete: () => resolve(), // Resolve the promise when animation completes
    });
  });
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: transparent;

  .overlay {
    z-index: 8;

    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(25px);

    position: absolute;

    width: 100%;
    height: 100%;

    opacity: 0;
  }

  .list {
    z-index: 9;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-family: "Funnel Display", sans-serif;
      font-optical-sizing: auto;
      font-size: clamp(2rem, 4vw, 4rem);
      opacity: 0;
      margin: 0.15em 0;

      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 0.75);
      }
    }
  }
}
</style>
