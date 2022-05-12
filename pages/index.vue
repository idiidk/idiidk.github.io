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
    console.log('we leavin')
    this.$refs.indexHeader.destroyPixi()
    next()
  },
}
</script>

<style lang="scss" scoped></style>
