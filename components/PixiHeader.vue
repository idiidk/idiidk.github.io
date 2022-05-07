<template>
  <div ref="pixiWrapper"></div>
</template>

<script>
function randomBetweenFloat(min, max) {
  return Math.random() * (max - min + 1) + min
}

function randomBetweenInt(min, max) {
  return Math.floor(randomBetweenFloat(min, max))
}

class Blob {
  constructor(graphics) {
    // velocity
    this.vx = randomBetweenFloat(0.5, 1) * randomBetweenInt(-1, 1) || 1
    this.vy = randomBetweenFloat(0.5, 1) * randomBetweenInt(-1, 1) || -1

    // pixi graphics elementy
    this.gr = graphics
  }
}

export default {
  name: 'PixiHeader',
  data() {
    return {
      colors: [
        'f72585',
        'b5179e',
        '7209b7',
        '560bad',
        '480ca8',
        '3a0ca3',
        '3f37c9',
        '4361ee',
        '4895ef',
        '4cc9f0',
      ].map((e) => `0x${e}`),
    }
  },
  mounted() {
    const PIXI = this.$PIXI

    const app = new PIXI.Application({
      resizeTo: window,
      backgroundColor: this.colors[0],
    })
    this.$refs.pixiWrapper.appendChild(app.view)

    app.stage.filters = [
      new PIXI.filters.KawaseBlurFilter(30, 10, true),
      new PIXI.filters.NoiseFilter(0.03, 0.2),
    ]

    const blobs = []
    for (let i = 0; i < 15; i++) {
      const graphics = new PIXI.Graphics()

      const randomColor =
        this.colors[randomBetweenInt(0, this.colors.length - 1)]
      graphics.beginFill(randomColor)
      graphics.drawCircle(
        randomBetweenFloat(0, app.view.width),
        randomBetweenFloat(0, app.view.height),
        randomBetweenFloat(200, 350)
      )
      graphics.endFill()

      blobs.push(new Blob(graphics))
      app.stage.addChild(graphics)
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
  },
}
</script>

<style lang="scss" scoped></style>
