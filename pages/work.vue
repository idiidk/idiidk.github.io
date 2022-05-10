<template>
  <v-container>
    <div class="title-wrapper">
      <h1>My work</h1>
      <span>This is the work I'm most proud of, please take a look!</span>
    </div>

    <WorkList :work="work" />
  </v-container>
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

<style lang="scss" scoped>
.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: clamp(1rem, 4vw, 2rem);
  margin-top: 2rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 1263px) {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
