<template>
  <div class="main_contact_wrapper">
    <div class="container-fluid">
      <div class="content mb-3">
        <h3>{{ items.header }}</h3>
        <p>
          {{ items.paragraph }}
        </p>
      </div>
    </div>
    <div class="parent_wrapper">
      <!--//? start form  -->
      <div class="contact_form_container">
        <svg class="icon">
          <use xlink:href="~/static/svg/sprite.svg#message"></use>
        </svg>
        <client-only>
          <ValidationObserver ref="form">
            <form @submit.prevent="submitForm">
              <div class="row">
                <!-- // todo: start full name  -->
                <div class="col-sm-12 mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="form_group floating">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control bg_white contact_us"
                          placeholder="Full name"
                          id="full_name"
                          v-model="contact_data.full_name"
                        />
                        <label for="full_name" class="control-label">
                          {{ items.full_name }}
                        </label>
                      </div>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </div>
                  </ValidationProvider>
                </div>
                <!-- // todo: end full name  -->

                <!-- // todo: start Company name -->
                <div class="col-sm-12 col-md-6 mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="form_group floating">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control bg_white contact_us"
                          placeholder="Company name"
                          id="company_name"
                          v-model="contact_data.company_name"
                        />
                        <label for="company_name" class="control-label">
                          {{ items.company_name }}
                        </label>
                      </div>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </div>
                  </ValidationProvider>
                </div>
                <!-- // todo: end Company name  -->

                <!-- // todo: start Title -->
                <div class="col-sm-12 col-md-6 mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="form_group floating">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control bg_white contact_us"
                          placeholder="Title"
                          id="title"
                          v-model="contact_data.title"
                        />
                        <label for="title" class="control-label">
                          {{ items.title }}
                        </label>
                      </div>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </div>
                  </ValidationProvider>
                </div>
                <!-- // todo: end Title  -->

                <!-- // todo: start Email -->
                <div class="col-sm-12 col-md-6 mb-2">
                  <ValidationProvider
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="form_group floating">
                      <div class="input-group">
                        <input
                          type="email"
                          class="form-control bg_white contact_us"
                          placeholder="email"
                          id="email"
                          v-model="contact_data.email"
                        />
                        <label for="email" class="control-label">
                          {{ items.email }}
                        </label>
                      </div>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </div>
                  </ValidationProvider>
                </div>
                <!-- // todo: end Email  -->

                <!-- // todo: start Phone number -->
                <div class="col-sm-12 col-md-6 mb-2">
                  <div class="wrap_phone_code">
                    <div class="code_wrapper">
                      <vue-country-code
                        @onSelect="onSelect"
                        :preferredCountries="['tr', 'ru', 'us']"
                      >
                      </vue-country-code>
                    </div>
                    <div class="phone_number_wrapper">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <div class="form_group floating">
                          <div class="input-group">
                            <input
                              type="number"
                              class="form-control bg_white contact_us"
                              placeholder="Phone number"
                              id="phone"
                              v-model="contact_data.phone"
                            />
                            <label for="phone" class="control-label">
                              {{ items.phone }}
                            </label>
                          </div>
                          <span v-if="errors[0]" class="validation-error">
                            {{ errors[0] }}
                          </span>
                        </div>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
                <!-- // todo: end Phone number  -->

                <!-- // todo: start farm size -->
                <div class="col-sm-12 col-md-6 mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <BaseAppSelectBox
                      :isLabel="false"
                      :options="sizes"
                      :placeholder="items.farm_size"
                      v-model="contact_data.farm_size"
                    ></BaseAppSelectBox>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </div>
                <!-- // todo: end farm size -->

                <!-- // ! todo: start Hectares Acres -->
                <div class="col-sm-12 col-md-6 mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div
                      class="selected_wrappers d-flex justify-content-between"
                    >
                      <div class="d-flex justify-content-between mt-3">
                        <div class="remember contact_us">
                          <input type="checkbox" id="hectares" />
                          <label for="hectares">{{ items.hectares }}</label>
                        </div>
                        <div class="remember contact_us ml-1">
                          <input type="checkbox" id="acres" />
                          <label for="acres">{{ items.acres }}</label>
                        </div>
                      </div>
                      <div>
                        <BaseAppSelectBox
                          :isLabel="false"
                          :options="hectares"
                          placeholder="What is Hectares Acres"
                          v-model="contact_data.hectares"
                        ></BaseAppSelectBox>
                      </div>
                    </div>

                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </div>
                <!-- // todo: end Hectares Acres -->

                <!-- // todo: start installing your irrigation system -->
                <div class="col-sm-12 col-md-6 mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <BaseAppSelectBox
                      :isLabel="false"
                      :options="irrigation_system"
                      :placeholder="items.irrigation_system"
                      v-model="contact_data.irrigation_system"
                    ></BaseAppSelectBox>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </div>
                <!-- // todo: end installing your irrigation system-->

                <!-- // todo: start Country of interest-->
                <div class="col-sm-12 col-md-6 mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <BaseAppSelectBox
                      :isLabel="false"
                      :options="countries"
                      placeholder="Country of interest"
                      v-model="contact_data.acres"
                    ></BaseAppSelectBox>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </ValidationProvider>
                </div>
                <!-- // todo: end Country of interest-->
                <!-- // todo: start Message -->
                <div class="col-sm-12 mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors }">
                    <div class="form_group text_area floating">
                      <div class="input-group">
                        <textarea
                          class="form-control text_area bg_white contact_us"
                          placeholder="Message"
                          id="message"
                          v-model="contact_data.message"
                        >
                        </textarea>
                        <label for="message" class="control-label">
                          {{ items.message }}
                        </label>
                      </div>
                      <span v-if="errors[0]" class="validation-error">
                        {{ errors[0] }}
                      </span>
                    </div>
                  </ValidationProvider>
                </div>
                <!-- // todo: end Message  -->
                <div class="col-sm-12 mb-2">
                  <div class="remember contact_us">
                    <input type="checkbox" id="agree_terms" />
                    <label for="agree_terms">
                      <span>{{ items.accept_terms }}</span>
                      <nuxt-link to="/">Verodrip Privacy Policy</nuxt-link>
                    </label>
                  </div>
                  <div class="form-group d-flex justify-content-end">
                    <BaseAppButton type="submit" class="mt-3 bg_green">
                      <span v-if="!processing">{{ items.button }}</span>
                      <b-spinner variant="light" v-if="processing"></b-spinner
                    ></BaseAppButton>
                  </div>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </client-only>
      </div>
      <!--//? end form  -->
      <div class="photo_container">
        <img class="w-100" src="@/assets/images/home/contact.png" alt="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  props: ['items'],
  data() {
    return {
      processing: false,
      country_code: '',
      contact_data: {
        full_name: null,
        company_name: null,
        title: null,
        email: null,
        phone: null,
        farm_size: null,
        hectares: null,
        acres: null,
        irrigation_system: null,
        message: null,
      },
      sizes: [
        { name: 'size 1', value: 1 },
        { name: 'size 2', value: 2 },
        { name: 'size3', value: 3 },
      ],
      countries: [
        { name: 'Egypt', value: 'Egypt' },
        { name: 'Ksa', value: 'Ksa' },
      ],
      irrigation_system: [
        { name: 'system', value: 'system' },
        { name: 'system 2', value: 'system 2' },
      ],
      hectares: [
        { name: 'hectares', value: 'hectares' },
        { name: 'acres', value: 'acres' },
      ],
    }
  },
  methods: {
    //? submit form
    async submitForm() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return
        } else {
          this.handleRequest()
        }
      })
    },
    //? handle request
    handleRequest() {
      this.processing = true
      console.log(this.contact_data)
      // this.$store.dispatch('front/home/send_contact', this.contact_data)
      this.processing = false
    },
    //! get country code
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode)
      this.country_code = dialCode
    },
  },
}
</script>

<style lang="scss" scoped>
.main_contact_wrapper {
  .content {
    margin-top: 90px;
    position: relative;
    z-index: 8;

    h3 {
      font-weight: 700;
      font-size: 32px;
      color: $main-color;
      margin-bottom: 10px;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        top: -10px;
        left: 0;
        height: 2px;
        background-color: $main-color;
        width: 60px;
      }
    }
    p {
      width: 50%;
      margin-bottom: 0;
      color: $main-color;
      font-size: 15px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .contact_form_container {
    width: 60%;
    position: relative;
    z-index: 88;
    box-shadow: 0 4px 38px rgba(0, 0, 0, 0.08);
    border-radius: 37px;
    background-color: $white;
    padding: 4rem 3rem 3rem;
    @media (min-width: 320px) and (max-width: 1200px) {
      width: 95%;
      margin: 50px auto 0;
    }
    @media (min-width: 320px) and (max-width: 768px) {
      width: 100%;
      margin: 50px auto 0;
      padding: 4rem 0.7rem 3rem;
    }
    .icon {
      width: 35px;
      height: 35px;
      position: absolute;
      right: -17px;
      background-color: #d5d5d5;
      border-radius: 50%;
      top: 130px;
      padding: 7px;
      fill: #1f3857;
      @media (min-width: 320px) and (max-width: 800px) {
        display: none;
      }
    }
  }
  .parent_wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding-left: 30px;
    @media (min-width: 320px) and (max-width: 1200px) {
      display: block;
      padding-left: 15px;
      padding-right: 15px;
    }
    @media (min-width: 320px) and (max-width: 768px) {
      padding-left: 15px;
      padding-right: 15px;
    }
    .photo_container {
      max-width: 38%;
      @media (min-width: 320px) and (max-width: 1200px) {
        display: none;
      }
    }
  }
}
</style>

<style lang="scss">
.main_contact_wrapper {
  .wrap_phone_code {
    display: flex;
    gap: 20px;
    .code_wrapper {
      .vue-country-select {
        border: 1px solid #c4c4c4c9;
        height: 60px;
        border-radius: 10px;
        width: 70px;
        box-shadow: none;
        &:focus {
          box-shadow: none;
        }
        &:hover {
          box-shadow: none;
          background: none;
        }
        .dropdown {
          // background: red;
          padding: 10px;
          &:focus {
            box-shadow: none;
          }
          &:hover {
            box-shadow: none;
            background: transparent;
          }
        }
        .current {
          background: #fff;
          height: 100%;
          width: 100%;
          text-align: center;
          justify-content: center;
          border-radius: 3px 3px 15px 15px;
        }
        .dropdown-list {
          max-width: 320px;
          overflow-x: hidden;
          @media (min-width: 320px) and (max-width: 480x) {
            max-width: 250px;
          }
          // custom scroll
          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #c2c2c2;
            border-radius: 10px;
          }
        }
      }
    }
    .phone_number_wrapper {
      flex-grow: 1;
    }
  }
}
</style>
