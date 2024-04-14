<template>
  <div class="page-title">
    <h1 class="title-text">{{ title }}</h1>
    <span>{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
    subtitle: String,
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  font-size: clamp(1rem, 4vw, 2rem);
  margin-top: 2rem;
  margin-bottom: 3rem;

  .title-text {
    margin-bottom: -0.5rem;
  }
}
</style>
