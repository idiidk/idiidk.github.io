<template>
  <v-container class="container">
    <div class="title-wrapper">
      <PageTitle :title="work.title" :subtitle="work.description" />
      <v-btn @click="$router.go(-1)" outlined class="back-button">back</v-btn>
    </div>

    <v-row>
      <v-col cols="12" md="6">
        <nuxt-content class="content" :document="work" />
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          aspect-ratio="1"
          class="image"
          :src="'/work/' + work.img"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'WorkPageSlug',
  async asyncData({ $content, params }) {
    const work = await $content('work', params.slug).fetch()

    return { work }
  },
  methods: {
    capitalizeFirstLetter(text) {
      return text.charAt(0).toUpperCase() + text.slice(1)
    },
  },
  components: {
    PageTitle,
  },
}
</script>

<style lang="scss" scoped>
.container {
  .title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: flex-start;

      .back-button {
        margin-top: -3rem;
        margin-bottom: 4rem;
      }
    }
  }
}
</style>
