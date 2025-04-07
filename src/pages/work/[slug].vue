<template>
  <AppBarMarginContainer>
    <v-container>
      <v-row>
        <v-col md="6" cols="12">
          <PageTitle :title="work?.title"></PageTitle>
          <h2 class="text-h5 mt-4">{{ work?.description }}</h2>
        </v-col>

        <v-col md="2" cols="0"></v-col>

        <v-col md="4" cols="12">
          <v-img :src="work?.src"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </AppBarMarginContainer>
</template>

<script setup lang="ts">
import { useWorkStore } from "@/stores/work";

const route = useRoute<"/work/[slug]">();
const router = useRouter();
const workStore = useWorkStore();

const slug = computed(() => route.params.slug);
const work = computed(() => workStore.work.find((e) => e.slug === slug.value));

watch(
  work,
  (value) => {
    if (value === undefined) {
      router.push("/work");
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.title {
  font-family: "Funnel Display", sans-serif;
  font-size: clamp(1rem, 4vw, 4rem) !important;
}
</style>
