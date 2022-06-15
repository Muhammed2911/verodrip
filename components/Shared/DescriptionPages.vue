<template>
  <div class="description_page text-center">
    <div class="title_search" :class="{ with_filter: with_filter }">
      <h6 v-if="title" class="title">{{ title }}</h6>
      <!-- //? start search wrapper  -->
      <div class="search_wrapper">
        <div class="main_search_inputs">
          <input @input="show_search" type="text" placeholder="Search..." />
          <svg class="icon">
            <use xlink:href="~/static/svg/sprite.svg#search"></use>
          </svg>
          <div class="search_results" v-if="show_search_result">
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name long</span>
            <span class="d-block">Subcategory name long name..</span>
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name long</span>
            <span class="d-block">Subcategory name long name..</span>
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name</span>
            <span class="d-block">Subcategory name long</span>
            <span class="d-block">Subcategory name long name..</span>
            <span class="d-block">Subcategory name</span>
          </div>
        </div>
      </div>
      <!-- //?  end search wrapper  -->
    </div>
    <div class="main_content">
      <p v-if="description" :class="{ with_filter: with_filter }">
        {{ description }}
      </p>
      <BaseAppButton v-if="button_text" class="without_bg mt-3">{{
        button_text
      }}</BaseAppButton>
      <BaseAppButton v-if="with_link" class="without_bg mt-3">{{
        button_text
      }}</BaseAppButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionPages',
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
    description: {
      type: String,
      default: '',
      required: false,
    },
    button_text: {
      type: String,
      default: '',
      required: false,
    },
    with_filter: {
      type: Boolean,
      default: false,
      required: false,
    },
    with_link: {
      type: Boolean,
      default: false,
      required: false,
    },
    button_link: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {
      show_search_result: false,
    }
  },
  methods: {
    show_search() {
      this.show_search_result = !this.show_search_result
    },
  },
}
</script>

<style lang="scss" scoped>
.description_page {
  .main_content {
    width: 60%;
    margin: auto;
    @media (min-width: 320px) and (max-width: 991px) {
      width: 100%;
      margin: auto;
    }
  }
  .title_search {
    display: flex;
    justify-content: flex-end;
    position: relative;
    &.with_filter {
      display: block;
      .search_wrapper {
        @media (min-width: 320px) and (max-width: 991px) {
          justify-content: center;
        }
      }
      .title {
        @media (min-width: 320px) and (max-width: 991px) {
          position: unset;
          left: auto;
          transform: translateX(0);
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
    .search_wrapper {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: flex-end;
      @media (min-width: 320px) and (max-width: 767px) {
        justify-content: unset;
      }
      .main_search_inputs {
        width: fit-content;
        position: relative;
        .search_results {
          position: absolute;
          width: 100%;
          left: 0;
          max-height: 200px;
          z-index: 99999;
          overflow-y: auto;
          text-align: center;
          padding: 8px;
          background-color: $white;
          box-shadow: 0px 15px 38px -21px rgba(0, 0, 0, 0.25);
          border-radius: 0px 0px 10px 10px;
          span {
            color: #6a6d70;
            margin-bottom: 5px;
            font-size: 12px;
            font-weight: 300;
          }
          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #c2c2c2;
            border-radius: 10px;
          }
        }
        .icon {
          fill: $third-color;
          width: 17px;
          height: 17px;
          cursor: pointer;
        }
        input {
          border: none;
          outline: none;
          border-bottom: 1px solid $third-color;
          color: $p-text-color;
          &::placeholder {
            color: rgba(0, 139, 120, 0.46);
            font-size: 14px;
          }
        }
      }
    }
    .title {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      font-weight: 700;
      font-size: 30px;
      color: #ff8f15;
      width: 100%;
      // z-index: -1;
    }
  }
  p {
    color: $p-text-color;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    margin-top: 50px;
    @media (min-width: 320px) and (max-width: 991px) {
      width: 100%;
    }
    &.with_filter {
      margin-top: 25px;
    }
  }
}
</style>
