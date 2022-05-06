<template>
  <div ref="pixiWrapper"></div>
</template>

<script>
import { KawaseBlurFilter } from '@pixi/filter-kawase-blur'

function randomBetweenFloat(min, max) {
  return Math.random() * (max - min + 1) + min
}

function randomBetweenInt(min, max) {
  return Math.floor(randomBetweenFloat(min, max))
}

class Blob {
  constructor(graphics) {
    // velocity
    this.vx = randomBetweenFloat(1, 2) * randomBetweenInt(-1, 1) || 1
    this.vy = randomBetweenFloat(1, 2) * randomBetweenInt(-1, 1) || -1

    // pixi graphics element
    this.gr = graphics
  }
}

export default {
  name: 'PixiHeader',
  data() {
    return {
      colors: ['0x22577a', '0x38a3a5', '0x57cc99', '0x80ed99', '0xc7f9cc'],
    }
  },
  mounted() {
    const app = new PIXI.Application({ resizeTo: window })
    this.$refs.pixiWrapper.appendChild(app.view)

    const container = new PIXI.Container()
    container.filters = [new KawaseBlurFilter(30, 10, true)]

    const blobs = []
    for (let i = 0; i < 50; i++) {
      const graphics = new PIXI.Graphics()

      const randomColor =
        this.colors[randomBetweenInt(0, this.colors.length - 1)]
      graphics.beginFill(randomColor)
      graphics.drawCircle(
        randomBetweenFloat(0, app.view.width),
        randomBetweenFloat(0, app.view.height),
        randomBetweenFloat(30, 150)
      )
      graphics.endFill()

      blobs.push(new Blob(graphics))
      container.addChild(graphics)
    }

    app.ticker.add(() => {
      for (const blob of blobs) {
        blob.gr.x += blob.vx
        blob.gr.y += blob.vy

        const centerX = blob.gr.getBounds().x + blob.gr.getBounds().width / 2
        const centerY = blob.gr.getBounds().y + blob.gr.getBounds().height / 2

        if (centerX > app.view.width || centerX < 0) blob.vx *= -1
        if (centerY > app.view.height || centerY < 0) blob.vy *= -1
      }
    })

    app.stage.addChild(container)
  },
}
</script>

<style lang="scss" scoped></style>
