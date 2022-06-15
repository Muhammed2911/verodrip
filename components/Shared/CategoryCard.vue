<template>
  <div class="category_card" v-if="items">
    <img class="d-block img" :src="items.cover" alt="category" />
    <h3 class="title">{{ items.name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ['items'],
}
</script>

<style lang="scss" scoped>
.category_card {
  position: relative;
  background: transparent;
  height: 230px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  // flex-wrap: wrap;
  // justify-content: center;
  @media (min-width: 567px) and(max-width:767px) {
    max-width: 90%;
  }
  @media (min-width: 320px) and(max-width:767px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  &::before {
    position: absolute;
    content: '';
    width: 70%; // ! test before card
    right: 0;
    top: 0;
    height: 100%;
    background-color: $white;
    border-radius: 20px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 20px 0;
    height: auto;
    &::before {
      width: 65%; // ! test before card
    }
    @media (min-width: 320px) and (max-width: 350px) {
      &::before {
        display: none; // ! test before card
      }
    }
  }
  .img {
    position: relative;
    z-index: 22;
    width: 50%;

    height: 180px;
    border-radius: 20px;
    box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
    @media (min-width: 320px) and(max-width:767px) {
      width: 180px;
    }
  }

  .title {
    position: relative;
    z-index: 22;
    color: $main-color;
    font-weight: 600;
    font-size: 22px;
    white-space: nowrap;
    overflow: hidden;
    // @media (min-width: 320px) and (max-width: 567px) {
    //   font-size: 16px;
    // }
  }
}
</style>
