<template>
  <div class="hero_section">
    <div class="container-fluid">
      <div class="main_container">
        <div class="hero_photo">
          <img class="img" :src="items.image" alt="landing" draggable="false" />
        </div>
        <div class="hero_description">
          <h2 class="title">{{ items.header }}</h2>
          <p class="text">
            {{ items.paragraph }}
          </p>
          <BaseAppButton class="action_btn solid bg_yellow mt-4">
            <span> {{ items.button }} </span>
            <svg class="icon">
              <use xlink:href="~/static/svg/sprite.svg#circled_arrow"></use>
            </svg>
          </BaseAppButton>
        </div>
      </div>
      <div class="hero_details">
        <div class="every_item" v-for="(i, index) in counters" :key="index">
          <h6>
            <ICountUp :delay="delay" :endVal="i.num" :options="options" />
            <span>+</span>
          </h6>
          <span class="part text-capitalize">{{ i.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importing components
import ICountUp from 'vue-countup-v2'

export default {
  name: 'HeroSection',
  components: { ICountUp },
  props: ['items'],
  data() {
    return {
      delay: 500,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
        duration: 30,
      },
      counters: [],
    }
  },
  mounted() {
    const counter_array = [
      {
        num: parseFloat(this.items.finished_projects_number),
        name: this.items.finished_projects,
      },
      {
        num: parseFloat(this.items.customers_number),
        name: this.items.customers,
      },
      {
        num: parseFloat(1000),
        name: this.items.locations,
      },
    ]
    this.counters = counter_array
  },
}
</script>

<style lang="scss" scoped>
.hero_section {
  padding-top: 7rem;
  height: 750px;
  position: relative;
  overflow: hidden;
  @media (min-width: 320px) and (max-width: 991px) {
    height: auto;
  }
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    left: 0;
    background-image: url('~/assets/images/home/02.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 8;
  }
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    bottom: -10%;
    left: -10%;
    height: 100%;
    background-image: url('../../../assets/images/home/tree.png');
    background-repeat: no-repeat;
    z-index: 2;
    filter: opacity(0.1) grayscale(1);
  }
  .main_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 45;
    flex-direction: row-reverse;
    @media (min-width: 320px) and (max-width: 991px) {
      flex-wrap: wrap;
    }
    //? Description
    .hero_description {
      padding-left: 30px;
      width: 40%;
      margin-bottom: 20px;
      @media (min-width: 320px) and (max-width: 991px) {
        order: 1;
        flex-grow: 1;
        width: 100%;
        text-align: center;
      }
      .title {
        color: $third-color;
        font-weight: 600;
        font-size: 48px;
        letter-spacing: 0.04em;
        position: relative;
        line-height: $line-height;
        &::first-letter {
          color: $second-color;
        }
      }
      .text {
        color: $main-color;
        font-weight: 400;
        font-size: 25px;
        margin-bottom: 5px;
        width: 80%;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        @media (min-width: 320px) and (max-width: 991px) {
          width: 100%;
        }
      }
      .action_btn {
        padding: 15px 30px;
        font-size: 17px;
        font-weight: 300;
        .icon {
          width: 30px;
          height: 30px;
          margin-left: 10px;
        }
      }
    }
    // Image
    .hero_photo {
      position: relative;
      width: 60%;
      @media (min-width: 320px) and (max-width: 991px) {
        order: 2;
        flex-grow: 1;
        width: 100%;
        text-align: center;
        margin: 50px 0;
      }
      @media (min-width: 320px) and (max-width: 576px) {
        height: 240px;
      }
      .img {
        width: 110%;
        transform: translateX(-10%);
        display: block;
        @media (min-width: 320px) and (max-width: 991px) {
          width: 100%;
          transform: translateX(0);
        }
        @media (min-width: 320px) and (max-width: 576px) {
          height: 100%;
        }
      }
    }
  }
  .hero_details {
    position: absolute;
    width: 100%;
    bottom: 30px;
    display: flex;
    z-index: 45;
    padding-left: 30px;
    gap: 3rem;
    @media (min-width: 320px) and (max-width: 991px) {
      position: relative;
      justify-content: center;
      padding: 30px 0;
    }
    @media (min-width: 320px) and (max-width: 576px) {
      gap: 0.7rem;
    }
    .every_item {
      // margin-right: 3rem;
      @media (min-width: 320px) and (max-width: 576px) {
        text-align: center;
      }
      h6 {
        color: $main-color;
        font-weight: 600;
        font-size: 50px;
        margin-bottom: 1rem;
        span:last-child {
          color: $second-color;
        }
        @media (min-width: 320px) and (max-width: 576px) {
          font-size: 18px;
        }
      }
      .part {
        color: $third-color;
        font-weight: 400;
        font-size: 16px;
        @media (min-width: 320px) and (max-width: 576px) {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
