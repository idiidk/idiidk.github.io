<template>
  <v-container>
    <PageTitle
      title="My work"
      subtitle="This is the work I'm most proud of, please take a look!"
    />

    <WorkList :work="work" />
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import WorkList from '~/components/WorkList.vue'

export default {
  name: 'WorkPage',
  components: { WorkList },
  async asyncData({ $content }) {
    const work = await $content('work').sortBy('updatedAt').fetch()

    return { work }
  },
  components: {
    PageTitle,
    WorkList,
  },
}
</script>

<style lang="scss" scoped></style>
