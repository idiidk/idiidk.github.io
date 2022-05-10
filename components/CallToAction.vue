<template>
  <div class="call-to-action">
    <v-btn dark text large>my work</v-btn>
    <v-btn dark text large>about me</v-btn>
  </div>
</template>

<script>
export default {
  name: 'CallToAction',
}
</script>

<style lang="scss" scoped>
.call-to-action {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  button {
    font-size: 1.25rem;
  }
}
</style>
