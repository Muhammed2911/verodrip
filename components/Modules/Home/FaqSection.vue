<template>
  <div class="main_faq_wrapper">
    <div class="container-fluid">
      <div class="box">
        <img
          src="~/assets/images/home/faq-s-01.png"
          class="shapes s_1"
          alt="shape"
        />
        <img
          src="~/assets/images/home/faq-s-02.png"
          class="shapes s_2"
          alt="shape"
        />
        <img
          src="~/assets/images/home/faq-s-03.png"
          class="shapes s_3"
          alt="shape"
        />
        <img
          src="~/assets/images/home/faq-s-04.png"
          class="shapes s_4"
          alt="shape"
        />

        <h3 class="mb-5">{{ $t('front.faq') }}</h3>
        <div class="accordion" role="tablist">
          <!-- //? Start Accordion  -->
          <div v-for="item in items" v-bind:key="item.id">
            <b-card no-body class="mb-4">
              <b-card-header header-tag="header" role="tab">
                <b-button
                  class="
                    tabs_button
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                  v-b-toggle="'accordion-' + item.id"
                  role="button"
                >
                  <span class="d-block">{{ item.text }}</span>
                  <div>
                    <svg class="icon icon_plus">
                      <use xlink:href="~/static/svg/sprite.svg#plus"></use>
                    </svg>
                    <svg class="icon icon_minus">
                      <use xlink:href="~/static/svg/sprite.svg#minus"></use>
                    </svg>
                  </div>
                </b-button>
              </b-card-header>
              <b-collapse
                accordion="my-accordion"
                role="tabpanel"
                :id="'accordion-' + item.id"
                visible
              >
                <b-card-body>
                  <b-card-text>{{ item.questions[0].text }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- //? End Accordion  -->
        </div>
      </div>
      <!-- end:: box -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqSection',
  props: ['items'],
}
</script>

<style lang="scss" scoped>
.main_faq_wrapper {
  margin-bottom: $main-margin;
  padding-top: 80px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: 400px;
    background-color: #008b780c;
  }

  .box {
    width: 80%;
    background-color: $white;
    margin: 0 auto;
    border-radius: 15px;
    position: relative;
    padding: 25px 0;
    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
    }
    .shapes {
      position: absolute;
      z-index: 5;
      &.s_1 {
        bottom: 0;
        right: 0;
      }
      &.s_2 {
        bottom: 0;
        left: -55px;
      }
      &.s_3 {
        top: 0;
        right: -55px;
      }
    }
    h3 {
      color: $second-color;
      font-weight: 600;
      font-size: 30px;
      max-width: 90%;
      margin: auto;
      @media (min-width: 320px) and (max-width: 768px) {
        margin: 40px auto 0;
        font-size: 25px;
        max-width: 100%;
        text-align: center;
      }
      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 16px;
      }
    }
    .accordion {
      max-width: 90%;
      margin: auto;
      max-height: 512px;
      overflow-y: auto;
      padding-right: 3rem;
      @media (min-width: 320px) and (max-width: 768px) {
        padding-right: 1rem;
      }
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #c2c2c2;
        border-radius: 10px;
      }
      .card {
        border: 1px solid rgba(0, 139, 120, 0.39);
        background-color: #fff;
        position: relative;
        z-index: 10;
      }
      .card-header {
        padding: 0;
        border: none;
        .tabs_button {
          width: 100%;
          background: none;
          border: none;
          background: $white;
          border-radius: 8px;
          color: $third-color;
          padding: 0.8rem;
          &:focus {
            box-shadow: none;
          }
          span {
            font-weight: 500;
            font-size: 16px;
          }
          .icon {
            width: 20px;
            height: 20px;
            fill: $third-color;
            &.icon_minus {
              fill: $second-color;
            }
          }
        }
        .collapsed {
          .icon {
            &.icon_plus {
              display: block;
            }
            &.icon_minus {
              display: none;
            }
          }
        }
        .not-collapsed {
          .icon {
            &.icon_plus {
              display: none;
            }
            &.icon_minus {
              display: block;
            }
          }
        }
      }
      .card-body {
        background: rgba(196, 196, 196, 0.03);
        color: $p-text-color;
        span {
          font-weight: 600;
          font-size: 16px;
          color: $third-color;
        }
      }
    }
  }
}
</style>
