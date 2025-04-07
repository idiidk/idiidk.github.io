<template>
  <AppBarMarginContainer>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <PageTitle title="B302 - Website"></PageTitle>
          <v-btn
            href="https://b302.nl"
            target="_blank"
            rel="noopener noreferrer"
            icon="mdi-open-in-new"
            variant="outlined"
            size="small"
          >
          </v-btn>

          <v-card elevation="4" class="my-16">
            <v-carousel cycle height="400" hide-delimiters show-arrows="hover">
              <template v-slot:prev="{ props }">
                <v-btn
                  v-bind="props"
                  icon="mdi-menu-left"
                  variant="outlined"
                  size="small"
                ></v-btn>
              </template>

              <template v-slot:next="{ props }">
                <v-btn
                  v-bind="props"
                  icon="mdi-menu-right"
                  variant="outlined"
                  size="small"
                ></v-btn>
              </template>

              <v-carousel-item v-for="(item, i) in work?.images" :key="i">
                <v-img
                  :src="item"
                  cover
                  height="100%"
                  class="carousel-img-top-aligned"
                >
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>

          <section class="mb-8">
            <h2 class="text-h4 mb-4 text-funnel">Project Overview</h2>
            <p class="text-body-1">
              {{ work?.overview }}
            </p>
          </section>

          <v-divider class="my-16"></v-divider>

          <section class="mb-8">
            <h2 class="text-h4 mb-6 text-funnel">Key Features</h2>
            <v-row>
              <v-col
                v-for="(feature, i) in work?.keyFeatures"
                :key="i"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card outlined variant="tonal" :color="nextBaseColor()">
                  <div class="d-flex align-center pa-2">
                    <v-icon left class="ma-2" color="white">{{
                      feature.icon
                    }}</v-icon>
                    <span class="font-weight-medium text-body-1 text-white">{{
                      feature.title
                    }}</span>
                  </div>
                  <v-card-text class="pt-0 text-body-2 text-white">{{
                    feature.description
                  }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </section>

          <v-divider class="my-16"></v-divider>

          <section class="mb-8">
            <h2 class="text-h4 mb-6 text-funnel">Technology Stack</h2>
            <div class="tech-stack-chips">
              <v-chip
                v-for="(tech, i) in work?.techStack"
                :key="i"
                :color="nextBaseColor()"
                label
                variant="flat"
              >
                {{ tech }}
              </v-chip>
            </div>
          </section>

          <section class="mt-16">
            <v-btn
              href="https://b302.nl"
              target="_blank"
              rel="noopener noreferrer"
              prepend-icon="mdi-open-in-new"
              variant="tonal"
              color="primary"
              size="small"
            >
              <span class="text-funnel">visit the website</span>
            </v-btn>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </AppBarMarginContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "@/stores/app";
import { useWorkStore } from "@/stores/work";
import type { WorkModel } from "@/models/work.model";

const appStore = useAppStore();
const workStore = useWorkStore();

const route = useRoute<"/work/[slug]">();
const router = useRouter();

const work = ref<WorkModel | null>(null);

watch(
  route,
  (route) => {
    const foundWork = workStore.work.find((e) => e.slug === route.params.slug);
    if (!foundWork) {
      return router.push("/work");
    }

    work.value = foundWork;
  },
  { immediate: true }
);

let currentBaseColor = Math.floor(Math.random() * appStore.baseColors.length);
const nextBaseColor = () => {
  if (currentBaseColor > appStore.baseColors.length - 1) {
    currentBaseColor = 0;
  }

  return appStore.baseColors[currentBaseColor++];
};
</script>

<style scoped>
:deep(.carousel-img-top-aligned .v-img__img--cover) {
  /* Use object-position for <img> tags with object-fit: cover */
  object-position: top center !important; /* Or top left, top */
}

/* Ensure v-img takes full height */
.carousel-img-top-aligned {
  height: 100%;
  width: 100%;
}

.tech-stack-chips {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
</style>
