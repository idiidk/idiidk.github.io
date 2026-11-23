<template>
  <figure
    class="shot"
    :class="`shot--${frame}`"
  >
    <div
      class="frame"
      :style="{ '--width': `${props.image.width}px` }"
    >
      <div
        v-if="frame === 'browser'"
        class="bar"
        aria-hidden="true"
      >
        <span /><span /><span />
      </div>
      <img
        v-fade-in
        :src="props.image.src"
        :width="props.image.width"
        :height="props.image.height"
        :alt="props.caption ?? ''"
        :loading="props.eager ? 'eager' : 'lazy'"
        :fetchpriority="props.eager ? 'high' : 'auto'"
        decoding="async"
      >
    </div>
    <figcaption v-if="props.caption">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import type { Picture, ShotFrame } from "@/models/work.model";
import { vFadeIn } from "@/utils/fade-in.directive";

const props = defineProps<{
  image: Picture;
  caption?: string;
  frame?: ShotFrame;
  /** Load straight away, for an image at the top of the page. */
  eager?: boolean;
}>();

const frame = computed(() => props.frame ?? "browser");
</script>

<style lang="scss" scoped>
.shot {
  margin: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  figcaption {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    opacity: 0.6;
  }
}

.shot--browser .frame,
.shot--window .frame {
  border-radius: 10px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 24px 48px -16px rgba(0, 0, 0, 0.6);
}

// Never wider than the image itself. The width comes from the image's size
// rather than the loaded file, so the space is right before it arrives.
.shot--bare .frame {
  border-radius: 10px;
  overflow: hidden;
  width: min(100%, var(--width));
}

.shot--browser .bar {
  display: flex;
  gap: 6px;
  padding: 10px 12px;
  background: #2a2a2e;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
  }
}
</style>
