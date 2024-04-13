<template>
  <v-container>
    <PageTitle title="About me" subtitle="Who is this" />

    <nuxt-content :document="about" />
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'AboutPage',
  async asyncData({ $content }) {
    const about = await $content('about').fetch()

    return { about }
  },
  components: {
    PageTitle,
  },
}
</script>

<style lang="scss" scoped></style>
