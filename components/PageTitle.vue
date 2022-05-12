<template>
  <div class="page-title">
    <h1>{{ title }}</h1>
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
