<template>
  <div class="container wrapper">
    <div class="grid">
      <RouterLink
        v-for="(item, index) in props.work"
        :key="item.slug"
        :to="`/work/${item.slug}`"
        class="card"
        :class="{ 'fade-in': fadeIn[index] }"
        :style="{ '--accent': item.accent }"
      >
        <div class="image">
          <img
            :src="item.cover.image.src"
            :srcset="item.thumb"
            sizes="(min-width: 1100px) 340px, (min-width: 700px) calc(50vw - 64px), calc(100vw - 64px)"
            :alt="item.title"
            width="720"
            height="450"
            :loading="index < 3 ? 'eager' : 'lazy'"
            decoding="async"
          >
        </div>

        <div class="body">
          <div class="top">
            <h2 class="title text-funnel">
              {{ item.title }}
            </h2>
            <span
              v-if="item.year"
              class="year"
            >{{ item.year }}</span>
          </div>
          <p class="tagline">
            {{ item.tagline }}
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import type { WorkModel } from "@/models/work.model";

const appStore = useAppStore();

const props = defineProps<{
  work: WorkModel[];
}>();

const fadeIn = ref(Array(props.work.length).fill(false));

onMounted(async () => {
  if (appStore.menuPromise) {
    await Promise.all([appStore.menuPromise]);
  }

  props.work.forEach((_, index) => {
    setTimeout(() => {
      fadeIn.value[index] = true;
    }, 100 * index);
  });
});
</script>

<style lang="scss" scoped>
.wrapper {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card {
  display: flex;
  flex-direction: column;
  opacity: 0;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  background: color-mix(in srgb, var(--accent) 14%, #121212);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 30%, transparent);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: inset 0 0 0 1px var(--accent);

    .image img {
      transform: scale(1.03);
    }
  }

  &:active {
    transform: scale(0.98);
  }

  .image {
    padding: 1rem 1rem 0;

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      object-position: top center;
      border-radius: 6px;
      transition: transform 0.4s ease;
    }
  }

  .body {
    padding: 1.25rem 1.25rem 1.5rem;
  }

  .top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
  }

  .title {
    font-size: 1.6rem;
    font-weight: 600;
  }

  .year {
    flex-shrink: 0;
    font-size: 0.85rem;
    opacity: 0.6;
  }

  .tagline {
    margin-top: 0.4rem;
    opacity: 0.8;
    line-height: 1.45;
  }
}

.fade-in {
  animation: fadeInAnimation 0.5s forwards;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
