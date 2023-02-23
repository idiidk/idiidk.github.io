<template>
  <div class="wrapper">
    <span v-if="overline" class="overline">{{ overline }}</span>
    <h1 v-if="title" class="title">{{ title }}</h1>
    <h2 v-if="subtitle" class="subtitle">{{ subtitle }}</h2>
    <slot></slot>
  </div>
</template>

<script setup>
const { overline, title, subtitle } = defineProps({
  overline: String,
  title: String,
  subtitle: String,
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 1rem;

  margin: 0 6vw;
  text-align: center;
  max-width: 1000px;

  .overline {
    font-size: clamp(1rem, 5vw, 1.3rem);
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }

  .title {
    font-size: clamp(2rem, 10vw, 4rem);
    font-weight: bold;

    margin: 0;
  }

  .subtitle {
    font-size: clamp(1.5rem, 10vw, 2rem);
    font-weight: 400;
  }
}
</style>
