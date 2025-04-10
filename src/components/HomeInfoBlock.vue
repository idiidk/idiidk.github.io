<template>
  <div ref="wrapper" class="wrapper" :class="{ mobile: isMobile }">
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
import gsap from "gsap";

const socialStore = useSocialStore();

const wrapper = ref<HTMLDivElement>();

let currentLink = 0;
const openRandomSocial = () => {
  const randomLink = socialStore.socials[currentLink++];
  if (currentLink > socialStore.socials.length - 1) {
    currentLink = 0;
  }

  window.open(randomLink, "_blank");
};

onMounted(() => {
  if (!wrapper.value) {
    return console.error("HomeInfoBlock wrapper ref not found");
  }

  gsap.to(wrapper.value, {
    opacity: 1,
    duration: 3,
  });
});
</script>

<style lang="scss" scoped>
.wrapper {
  opacity: 0;

  a {
    color: white;
  }

  .name {
    font-size: 1.5rem;
  }
}
</style>
