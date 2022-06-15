<template>
  <div class="card_details" v-if="itemObj">
    <img :src="itemObj.image" alt="projects" />
    <h4 class="text-center">{{ itemObj.summary }}</h4>
  </div>
</template>

<script>
export default {
  name: 'CardDetails',
  props: {
    itemObj: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.card_details {
  position: relative;
  display: flex;
  height: 260px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 2px 2px;
  }
  h4 {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.34);
    border-radius: 0px 0px 8px 8px;
    margin-bottom: 0;
    padding: 15px;
    color: $white;
    @media (min-width: 320px) and (max-width: 1200px) {
      padding: 15px;
      font-size: 16px;
    }
  }
}
</style>
