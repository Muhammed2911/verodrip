<template>
  <div id="loading">
    <b-skeleton animation="wave" class="loading title" width="90%"></b-skeleton>
    <b-skeleton animation="wave" class="loading text" width="70%"></b-skeleton>
    <b-skeleton
      animation="wave"
      class="loading editor"
      width="90%"
    ></b-skeleton>
  </div>
</template>

<script>
export default {
  name: 'BaseLoading',
}
</script>

<style lang="scss" scoped>
#loading {
  padding: 35px 0;
  .loading {
    margin-bottom: 10px;
    &.title {
      height: 1.8rem;
    }
    &.text {
      height: 1.2rem;
      margin-bottom: 15px;
    }
    &.editor {
      height: 3.5rem;
    }
  }
}
</style>