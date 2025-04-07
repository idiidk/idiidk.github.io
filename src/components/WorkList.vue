<template>
  <v-container class="wrapper">
    <masonry-wall
      :items="props.work"
      :ssr-columns="1"
      :column-width="300"
      :gap="32"
    >
      <template #default="{ item, index }">
        <div class="card-wrapper">
          <v-card
            :color="appStore.baseColors[index]"
            :class="{ 'fade-in': fadeIn[index] }"
            @click="$router.push(`/work/${item.slug}`)"
            variant="tonal"
            class="card"
          >
            <div class="image-wrapper">
              <v-img class="image" :src="item.images[0]"></v-img>
            </div>

            <v-card-title class="title text-funnel">{{
              item.title
            }}</v-card-title>
            <v-card-text class="description">{{
              item.overview.slice(0, 128) + "..."
            }}</v-card-text>
          </v-card>
        </div>
      </template>
    </masonry-wall>
  </v-container>
</template>

<script setup lang="ts">
import MasonryWall from "@yeger/vue-masonry-wall";

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
    }, 100 * index); // Adjust delay (100ms per item) as needed
  });
});
</script>

<style lang="scss" scoped>
.wrapper {
  padding-left: 1rem !important;
  padding-right: 1rem !important;

  .card-wrapper {
    transition: transform 0.1s;

    cursor: pointer;

    &:hover,
    &:active {
      transform: scale(0.95) !important;
      z-index: 1;
    }

    .card {
      opacity: 0;

      .title,
      .description {
        color: white;
      }

      .image-wrapper {
        padding: 1rem;

        .image {
          border-radius: 2px;
        }
      }
    }
  }
}

.fade-in {
  animation: fadeInAnimation 0.5s forwards; /* Adjust duration */
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
