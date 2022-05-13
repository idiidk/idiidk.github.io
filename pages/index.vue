<template>
  <div>
    <IndexHeader ref="indexHeader" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'no-overflow',
  beforeRouteLeave(_, __, next) {
    // clean up canvas renderer
    this.$refs.indexHeader.stopRenderer()
    next()
  },
}
</script>

<style lang="scss" scoped></style>
