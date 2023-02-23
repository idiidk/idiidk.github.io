<template>
  <div class="wrapper">
    <title-block overline="Ontwikkeling met vertrouwen" title="Wij ontwikkelen met passie software op maat.">
      <div class="buttons">
        <button class="button">contact</button>
        <button class="button accent">ons werk</button>
      </div>
    </title-block>
  </div>

  <blob-background class="background"></blob-background>
</template>

<script setup lang="ts">
import BlobBackground from "@/pages/home/components/blob-background.vue";
import TitleBlock from "@/components/title-block.vue";
</script>

<style scoped lang="scss">
.wrapper {
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  height: 95vh;
}

.background {
  z-index: 0;

  position: fixed;
  top: 0;
}

.buttons {
  display: flex;
  gap: 1rem;

  margin-top: 2rem;
}
</style>
