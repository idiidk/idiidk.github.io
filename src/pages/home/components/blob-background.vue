<template>
  <div>
    <canvas class="canvas" ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Application, Graphics, NoiseFilter } from "pixi.js";

const canvas = ref(null);

interface Blob extends Graphics {
  vx: number;
  vy: number;
  opacityDelta: number;
}

let app: Application;

onBeforeUnmount(() => {
  console.log("goodbye");
  app.destroy();
});

onMounted(() => {
  if (canvas.value === null) {
    throw new Error("Did not get canvas ref correctly");
  }

  const blobs = [] as Blob[];
  const colors = ["dc07ff", "3f8efc", "2667ff", "3b28cc"];
  const numberColors = colors.map((e) => parseInt("0x" + e)).sort(() => Math.random() - 0.5);

  const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x121212,
    resizeTo: window,
    view: canvas.value,
  });

  app.stage.filters = [new NoiseFilter(0.02)];

  const createBlob = (index: number) => {
    const blob = new Graphics() as Blob;

    blob.beginFill(numberColors[index]);
    blob.drawCircle(0, 0, (Math.random() + 1) * (app.screen.width / 5));
    blob.x = Math.random() * app.screen.width;
    blob.y = Math.random() * app.screen.height;
    blob.vx = (Math.random() - 0.5) * 3;
    blob.vy = (Math.random() - 0.5) * 2;
    blob.opacityDelta = -1;

    blobs.push(blob);
    app.stage.addChild(blob);
  };

  for (let i = 0; i < colors.length; i++) {
    createBlob(i);
  }

  app.ticker.add(() => {
    for (const blob of blobs) {
      // update the blob's position
      blob.x += blob.vx;
      blob.y += blob.vy;

      // bounce off the edges of the screen
      if (blob.x < 0 || blob.x > app.screen.width) {
        blob.vx *= -1;
      }
      if (blob.y < 0 || blob.y > app.screen.height) {
        blob.vy *= -1;
      }
    }
  });
});
</script>

<style lang="scss" scoped>
.canvas {
  filter: blur(100px);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 95%);
}
</style>
