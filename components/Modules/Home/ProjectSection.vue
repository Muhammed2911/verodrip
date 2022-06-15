<template>
  <div class="main_projects_wrapper">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-5 col-sm-12">
          <div class="info_wrapper">
            <div class="section_header">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#dots"></use>
              </svg>
              <h3 class="title">{{ items.header }}</h3>
              <p class="normal">
                {{ items.paragraph }}
              </p>
            </div>
            <!-- end:: section_header -->

            <div class="project_info">
              <div class="d-flex mb-3">
                <h4 class="title">Project Names</h4>
                <nuxt-link to="" class="project_button">
                  <svg class="icon">
                    <use xlink:href="~/static/svg/sprite.svg#long_arrow"></use>
                  </svg>
                </nuxt-link>
              </div>
              <div class="line">
                <span>Year :</span>
                <span>May, 2010</span>
              </div>
              <div class="line">
                <span>Location : </span>
                <span>Cairo,Egypt</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Hendrerit condimentum facilisis lacus ullamcorper pellentesque
                at facilisi. Ac nisl felis condimentum diam. Proin faucibus vel
                malesuada a, habitasse. Arcu id eu quam nec donec maecenas
              </p>
              <nuxt-link to="" class="projects_page_button">
                <span>{{ items.button }}</span>
                <svg class="icon">
                  <use xlink:href="~/static/svg/sprite.svg#arrow_right"></use>
                </svg>
              </nuxt-link>
            </div>
            <!-- end:: project_info -->
          </div>
        </div>
        <!-- end:: col -->

        <div class="col-lg-7 col-sm-12">
          <div class="gallery_wrapper">
            <img
              src="~/assets/images/home/projects-01.png"
              class="main_img"
              alt="thumb"
            />
            <img
              src="~/assets/images/home/projects-02.png"
              class="sub sub_img1"
              alt="thumb"
            />
            <img
              src="~/assets/images/home/projects-03.png"
              class="sub sub_img2"
              alt="thumb"
            />
            <button type="button" class="btn btn_next">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#arrow_right"></use>
              </svg>
            </button>
            <button type="button" class="btn btn_prev">
              <svg class="icon">
                <use xlink:href="~/static/svg/sprite.svg#arrow_left"></use>
              </svg>
            </button>
          </div>
        </div>
        <!-- end:: col -->
      </div>
      <!-- end:: row -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsSection',
  props: ['items'],
}
</script>

<style lang="scss" scoped>
.main_projects_wrapper {
  padding: 80px 0;
  position: relative;
  padding-bottom: 300px;
  .info_wrapper {
    // header wrapper
    .section_header {
      position: relative;
      padding-left: 80px;
      margin-bottom: 50px;
      @media (min-width: 320px) and (max-width: 991px) {
        padding-left: 0;
      }
      .icon {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 30px;
        top: 5px;
        transform: rotate(-90deg);
        @media (min-width: 320px) and (max-width: 991px) {
          left: 0;
        }
      }
      .title {
        font-weight: 700;
        font-size: 32px;
        color: $main-color;
        margin-bottom: 20px;
        @media (min-width: 320px) and (max-width: 991px) {
          padding-left: 45px;
        }
      }
      p {
        &.normal {
          color: $p-text-color;
          margin-bottom: 5px;
          font-weight: 400;
        }
      }
    }
    // project_info
    .project_info {
      padding-left: 80px;
      @media (min-width: 320px) and (max-width: 991px) {
        padding-left: 0;
        margin-bottom: 30px;
      }
      .title {
        font-size: 24px;
        font-weight: 600;
        color: $second-color;
        margin-right: 15px;
      }
      .project_button {
        width: 50px;
        height: 30px;
        border-radius: 25px;
        background-color: $second-color;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.25s;
        &:hover {
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
        }
        .icon {
          width: 23px;
          height: 15px;
          fill: #fff;
        }
      }
      .line {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        span {
          &:first-child {
            font-size: 16px;
            margin-right: 8px;
          }
          &:last-child {
            font-size: 15px;
            font-weight: 600;
          }
        }
      }
      p {
        font-size: 15px;
        color: #677389;
        margin-bottom: 50px;
      }
      .projects_page_button {
        color: $second-color;
        font-size: 18px;
        text-decoration: none;
        .icon {
          width: 15px;
          height: 15px;
          fill: #ff8f15;
          fill: $second-color;
        }
      }
    }
  }
  .gallery_wrapper {
    position: relative;
    width: 400px;
    height: 530px;
    margin: 0 auto;
    @media (min-width: 320px) and (max-width: 991px) {
      max-width: 100%;
    }
    .main_img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }
    .sub {
      position: absolute;
      width: 400px;
      height: 250px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      &.sub_img1 {
        bottom: -115px;
        right: -250px;
        z-index: 2;
      }
      &.sub_img2 {
        bottom: -270px;
        left: -100px;
      }
    }
    .btn {
      width: 45px;
      height: 45px;
      border-radius: 100%;
      background-color: $second-color;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      @media (min-width: 320px) and (max-width: 480px) {
        width: 36px;
        height: 36px;
      }
      &.btn_next {
        right: -22px;
        @media (min-width: 320px) and (max-width: 480px) {
          right: -13px;
        }
      }
      &.btn_prev {
        left: -22px;
        @media (min-width: 320px) and (max-width: 480px) {
          left: -13px;
        }
      }
      .icon {
        fill: #fff;
        width: 17px;
        height: 17px;
      }
    }
  }
}
</style>
