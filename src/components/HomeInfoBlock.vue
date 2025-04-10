<template>
  <div class="wrapper" :class="{ mobile: isMobile }">
    <b class="text-funnel name">Vincent Brouwer</b>
    <p>
      founder of <a href="https://codebrouwers.github.io/">De Codebrouwers</a>
    </p>
    <p>vincent@codebrouwers.nl</p>
    <p><a href="#" @click="openRandomSocial">@idiidk</a> on everything</p>
  </div>
</template>

<script setup lang="ts">
import { isMobile } from "@/utils/window.util";
import { useSocialStore } from "@/stores/social";

const socialStore = useSocialStore();

let currentLink = 0;
const openRandomSocial = () => {
  const randomLink = socialStore.socials[currentLink++];
  if (currentLink > socialStore.socials.length - 1) {
    currentLink = 0;
  }

  window.open(randomLink, "_blank");
};
</script>

<style lang="scss" scoped>
.wrapper {
  a {
    color: white;
  }

  .name {
    font-size: 1.5rem;
  }
}
</style>
