<template>
  <AppBarMarginContainer>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="header">
            <PageTitle :title="work?.title"></PageTitle>

            <v-btn
              :href="work?.href"
              class="href"
              target="_blank"
              rel="noopener noreferrer"
              icon="mdi-open-in-new"
              variant="text"
            >
            </v-btn>
          </div>

          <section class="my-16">
            <swiper-container autoplay-delay="2500" effect="fade">
              <swiper-slide v-for="image of work?.images">
                <v-card>
                  <v-img :src="image"></v-img>
                </v-card>
              </swiper-slide>
            </swiper-container>
          </section>

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

          <section class="mt-8">
            <v-chip
              :href="work?.href"
              label
              variant="tonal"
              target="_blank"
              rel="noopener noreferrer"
              prepend-icon="mdi-open-in-new"
              color="primary"
            >
              <span class="text-funnel">Visit the live product</span>
            </v-chip>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </AppBarMarginContainer>
</template>

<script setup lang="ts">
import { register } from "swiper/element/bundle";
import { useAppStore } from "@/stores/app";
import { useWorkStore } from "@/stores/work";
import type { WorkModel } from "@/models/work.model";

register();

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

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;

  gap: 1rem;

  .href {
    transform: translateY(5px);
  }
}

:deep(.carousel-img-top-aligned .v-img__img--cover) {
  /* Use object-position for <img> tags with object-fit: cover */
  object-position: top center !important; /* Or top left, top */
}

.tech-stack-chips {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
</style>
