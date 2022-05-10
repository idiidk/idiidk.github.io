<template>
  <div>
    <WorkList :work="work" />
  </div>
</template>

<script>
import WorkList from '~/components/WorkList.vue'

export default {
  name: 'WorkPage',
  components: { WorkList },
  async asyncData({ $content }) {
    const work = await $content('work').fetch()

    return { work }
  },
}
</script>

<style lang="scss" scoped></style>
