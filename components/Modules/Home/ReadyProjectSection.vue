<template>
  <div class="main_project_wrapper">
    <div class="container-fluid">
      <div class="content">
        <h4>{{ items.header }}</h4>
        <p>
          {{ items.paragraph }}
        </p>
        <div
          class="
            text-center
            start_project
            mt-3
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <span class=""> {{ items.button }}</span>
          <svg class="icon">
            <use xlink:href="~/static/svg/sprite.svg#arrow_right"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadyProjectSection',
  props: ['items'],
}
</script>

<style lang="scss" scoped>
.main_project_wrapper {
  min-height: 720px;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 140%;
    background-image: url('../../../assets/images/home/ready2.png');
    width: 50%;
    z-index: 6;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &::after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    height: 100%;
    background-image: url('../../../assets/images/home/ready.png');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 4;
    width: 80%;
  }
  .content {
    position: absolute;
    top: 40%;
    left: 10%;
    text-align: center;
    z-index: 7;
    width: 50%;
    h4 {
      color: $second-color;
      font-weight: 600;
      font-size: 36px;
      line-height: $line-height;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        top: -10px;
        left: calc(50% - 35px);
        height: 2px;
        width: 70px;
        background-color: $second-color;
      }
    }
    p {
      font-weight: 500;
      font-size: 30px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .start_project {
      color: $second-color;
      cursor: pointer;
      .icon {
        width: 17px;
        height: 17px;
        fill: $second-color;
      }
    }
  }
}
</style>
