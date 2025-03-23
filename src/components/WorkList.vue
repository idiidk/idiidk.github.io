<template>
  <v-container class="wrapper">
    <masonry-wall :items="items" :ssr-columns="1" :column-width="300" :gap="32">
      <template #default="{ item, index }">
        <div class="card-wrapper">
          <v-card
            :color="store.baseColors[index]"
            variant="tonal"
            class="card"
            :class="{ 'fade-in': fadeIn[index] }"
          >
            <div class="image-wrapper">
              <v-img class="image" :src="item.src"></v-img>
            </div>

            <v-card-title class="title">{{ item.title }}</v-card-title>
            <v-card-text class="description">{{
              item.description
            }}</v-card-text>
          </v-card>
        </div>
      </template>
    </masonry-wall>
  </v-container>
</template>

<script setup lang="ts">
import MasonryWall from "@yeger/vue-masonry-wall";
import { ref, onMounted, computed } from "vue"; // Import onMounted

import b302 from "@/assets/work/b302.nl.png";
import kahootTools from "@/assets/work/kahoot-tools.png";

import { useAppStore } from "@/stores/app";

const store = useAppStore();
const barHeight = computed(() => `${store.barHeight + 32}px`);

const items = [
  {
    title: "B302 - Website",
    description: "Blah ".repeat(25),
    src: b302,
  },
  { title: "Kahoot Tools", description: "Blah ".repeat(25), src: kahootTools },
];

const fadeIn = ref(Array(items.length).fill(false));

onMounted(async () => {
  if (store.menuPromise) {
    await Promise.all([store.menuPromise]);
  }

  items.forEach((_, index) => {
    setTimeout(() => {
      fadeIn.value[index] = true;
    }, 100 * index); // Adjust delay (100ms per item) as needed
  });
});
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: v-bind(barHeight);
  margin-bottom: v-bind(barHeight);

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

      .title {
        font-family: "Funnel Display", sans-serif;
      }

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
