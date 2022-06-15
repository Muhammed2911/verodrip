<template>
  <div class="hero_wrapper" :class="{ busy: busy }">
    <div class="container-fluid">
      <div class="main_container">
        <div class="hero_photo">
          <img class="img" :src="items.image" alt="landing" draggable="false" />
        </div>
        <div class="hero_description">
          <h2 class="title" v-html="items.header"></h2>
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
        <div class="every_item">
          <h6>
            {{ items.customers_number }}
            <span> +</span>
          </h6>
          <span class="part text-capitalize">{{ items.customers }}</span>
        </div>
        <!-- end:: item -->
        <div class="every_item">
          <h6>
            {{ items.finished_projects_number }}
            <span> +</span>
          </h6>
          <span class="part text-capitalize">{{
            items.finished_projects
          }}</span>
        </div>
        <!-- end:: item -->
        <div class="every_item">
          <h6>
            {{ items.locations_number }}
            <span> +</span>
          </h6>
          <span class="part text-capitalize">{{ items.locations }}</span>
        </div>
        <!-- end:: item -->
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
  name: 'HeroSectionDemo',
  components: { ICountUp },
  props: ['items', 'busy'],
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
      counters: [
        { name: 'Finished Projects', num: 140 },
        { name: 'Customers', num: 50 },
        { name: 'Locations', num: 200 },
      ],
    }
  },
  mounted() {
    this.counters[0].name = this.items.finished_projects
    this.counters[0].num = this.items.finished_projects_number

    this.counters[1].name = this.items.customers
    this.counters[1].num = this.items.customers_number

    this.counters[2].name = this.items.locations
    this.counters[2].num = this.items.locations_number
  },
}
</script>

<style lang="scss" scoped>
.hero_wrapper {
  height: 500px;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.65);
    border-radius: 10px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.25s;
  }
  &.busy::before {
    opacity: 1;
    visibility: visible;
    z-index: 100;
  }
  .container-fluid {
    padding-left: 0;
    padding-right: 0;
  }
  .main_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 45;
    flex-direction: row-reverse;
    //? Description
    .hero_description {
      padding-left: 30px;
      width: 40%;
      margin-bottom: 20px;
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
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
      .img {
        width: 110%;
        transform: translateX(-10%);
        display: block;
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
    .every_item {
      margin-right: 3rem;
      h6 {
        color: $main-color;
        font-weight: 600;
        font-size: 50px;
        margin-bottom: 1rem;
        span:last-child {
          color: $second-color;
        }
      }
      .part {
        color: $third-color;
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 991px) {
  .hero_wrapper {
    display: none;
  }
}
</style>