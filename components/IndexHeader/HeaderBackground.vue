<template>
  <div class="wrapper">
    <canvas ref="backgroundCanvas"></canvas>
    <div class="noise-overlay"></div>
  </div>
</template>

<script>
function randomBetweenFloat(min, max) {
  return Math.random() * (max - min + 1) + min
}

function randomBetweenInt(min, max) {
  return Math.floor(randomBetweenFloat(min, max))
}

class Blob {
  constructor(ctx, color) {
    this.ctx = ctx
    this.color = color

    this.x = randomBetweenFloat(0, this.ctx.canvas.width)
    this.y = randomBetweenFloat(0, this.ctx.canvas.height)

    const totalSize = this.ctx.canvas.width + this.ctx.canvas.height

    this.radius = randomBetweenFloat(totalSize / 4, totalSize / 8)

    // velocity
    this.vx = randomBetweenFloat(1, 2) * randomBetweenInt(-1, 1) || 1
    this.vy = randomBetweenFloat(1, 2) * randomBetweenInt(-1, 1) || -1
  }

  render() {
    this.ctx.beginPath()
    const g = this.ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.1,
      this.x,
      this.y,
      this.radius
    )
    g.addColorStop(0, this.color)
    g.addColorStop(1, `${this.color}00`)
    this.ctx.fillStyle = g
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.ctx.fill()

    this.x += this.vx
    this.y += this.vy

    if (this.x > this.ctx.canvas.width || this.x < 0) this.vx *= -1
    if (this.y > this.ctx.canvas.height || this.y < 0) this.vy *= -1
  }
}

export default {
  name: 'HeaderPixiBackground',
  mounted() {
    const canvas = this.$refs.backgroundCanvas
    const ctx = canvas.getContext('2d')

    ctx.globalCompositeOperation = 'saturation'

    const colors = [
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
    ].map((e) => `#${e}`)
    let blobs = []
    const blobCount = 15

    let resizeDebounce = null
    const resize = () => {
      clearTimeout(resizeDebounce)
      ctx.canvas.width = window.innerWidth
      ctx.canvas.height = window.innerHeight

      resizeDebounce = setTimeout(() => {
        blobs = []
        for (let i = 0; i < blobCount; i++) {
          blobs.push(
            new Blob(ctx, colors[randomBetweenInt(0, colors.length - 1)])
          )
        }
      }, 100)
    }

    window.addEventListener('resize', resize)
    resize()

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = colors[0]
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const blob of blobs) {
        blob.render()
      }

      requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.noise-overlay {
  top: 0;
  left: 0;
  position: absolute;

  width: 100%;
  height: 100%;

  background-size: 24px;
  background-size: 24px;

  @media only screen and (max-width: 1200px) {
    background-size: 16px;
    background-size: 16px;
  }

  @media only screen and (max-width: 700px) {
    background-size: 8px;
    background-size: 8px;
  }

  background-image: url('/noise.png');
  background-repeat: repeat;

  opacity: 0.2;
}
</style>
