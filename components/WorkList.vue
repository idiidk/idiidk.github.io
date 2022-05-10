<template>
  <v-row>
    <v-col v-for="project of work" :key="project.slug" cols="12" sm="6" md="4">
      <v-card>
        <v-img height="250" :src="project.img"></v-img>

        <v-card-title>{{ project.title }}</v-card-title>

        <v-card-text>
          {{ project.description }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WorkList',
  props: {
    work: Array,
  },
  watch: {
    work(work) {
      console.log(work)
    },
  },
  mounted() {
    console.log(this.work)
  },
}
</script>

<style lang="scss" scoped></style>
