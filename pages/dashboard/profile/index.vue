<template>
  <div class="profile_wrapper">
    <div class="header_wrapper">
      <h6>{{ $t('admin.edit_profile') }}</h6>
    </div>
    <client-only>
      <ValidationObserver tag="form" ref="form" @submit.prevent="handleForm">
        <div class="flexwrapper">
          <ValidationProvider
            class="img_wrapper"
            rules="ext:jpg,jpeg,png,svg"
            v-slot="{ validate, errors }"
          >
            <img :src="user.avatar" alt="avatar" v-if="!imgPreview" />
            <img :src="imgPreview" alt="avatar" v-else />
            <div class="uploader">
              <input
                type="file"
                @change="uploadAttach($event) || validate($event)"
              />
              <span class="icon">
                <svg>
                  <use xlink:href="~/static/svg/sprite.svg#upload"></use>
                </svg>
              </span>
              <span class="text"> {{ $t('admin.upload_hint') }} </span>
              <span v-if="errors[0]" class="validation-error">
                {{ errors[0] }}
              </span>
            </div>
          </ValidationProvider>
          <!-- end:: img_wrapper -->
          <div class="info_wrapper">
            <div class="row">
              <div class="col-lg-6">
                <ValidationProvider rules="required|min:3" v-slot="{ errors }">
                  <div class="form_group floating">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg_white contact_us"
                        placeholder="first_name"
                        id="fname"
                        v-model="requestData.first_name"
                      />
                      <label for="fname" class="control-label">
                        {{ $t('admin.first_name') }}
                      </label>
                    </div>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>
              </div>
              <!-- end:: col -->
              <div class="col-lg-6">
                <ValidationProvider rules="required|min:3" v-slot="{ errors }">
                  <div class="form_group floating">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control bg_white contact_us"
                        placeholder="last_name"
                        id="lname"
                        v-model="requestData.last_name"
                      />
                      <label for="lname" class="control-label">
                        {{ $t('admin.last_name') }}
                      </label>
                    </div>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>
              </div>
              <!-- end:: col -->
              <div class="col-lg-12">
                <ValidationProvider rules="required|min:3" v-slot="{ errors }">
                  <div class="form_group floating">
                    <VuePhoneNumberInput
                      v-model="requestData.phone"
                      :default-country-code="countryCode"
                      :preferred-countries="['US', 'RU', 'TR']"
                      @update="catchCountry"
                    ></VuePhoneNumberInput>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>
              </div>
              <!-- end:: col -->
              <div class="col-lg-12">
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <div class="form_group floating">
                    <div class="input-group">
                      <input
                        type="email"
                        class="form-control bg_white contact_us"
                        placeholder="email_address"
                        id="email"
                        v-model="requestData.email"
                      />
                      <label for="email" class="control-label">
                        {{ $t('admin.email') }}
                      </label>
                    </div>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>
              </div>
              <!-- end:: col -->
              <div class="col-lg-12">
                <ValidationProvider
                  rules="min:8|confirmed:confirm_password"
                  vid="confirm_password"
                  v-slot="{ errors }"
                >
                  <div class="form_group floating">
                    <div class="input-group">
                      <input
                        :type="password_type"
                        class="form-control bg_white contact_us"
                        placeholder="password"
                        id="password"
                        v-model="requestData.password"
                      />
                      <label for="password" class="control-label">
                        {{ $t('admin.password') }}
                      </label>
                      <svg class="icon_pass" @click="showPassword">
                        <use xlink:href="~/static/svg/sprite.svg#show"></use>
                      </svg>
                    </div>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>
              </div>
              <!-- end:: col -->
              <div class="col-lg-12">
                <ValidationProvider
                  rules="confirmed:confirm_password"
                  v-slot="{ errors }"
                >
                  <div class="form_group floating">
                    <div class="input-group">
                      <input
                        :type="password_type"
                        class="form-control bg_white contact_us"
                        placeholder="confirm_password"
                        id="cpassword"
                        v-model="requestData.password_confirmation"
                      />
                      <label for="cpassword" class="control-label">
                        {{ $t('admin.confirm_password') }}
                      </label>
                      <svg class="icon_pass" @click="showPassword">
                        <use xlink:href="~/static/svg/sprite.svg#show"></use>
                      </svg>
                    </div>
                    <span v-if="errors[0]" class="validation-error">
                      {{ errors[0] }}
                    </span>
                  </div>
                </ValidationProvider>
              </div>
              <!-- end:: col -->
              <div class="col-lg-12">
                <div class="lang_switcher">
                  <span class="text"> {{ $t('admin.choose_lang') }} </span>
                  <b-dropdown
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <span> {{ lang }} </span>
                      <img
                        :src="
                          require(`~/assets/images/dashboard/${requestData.local}.png`)
                        "
                        alt="flag"
                      />
                      <svg class="icon">
                        <use
                          xlink:href="~/static/svg/sprite.svg#angle_arrow"
                        ></use>
                      </svg>
                    </template>
                    <b-dropdown-item
                      v-if="requestData.local != 'en'"
                      @click="changeLocal('en', 'English')"
                    >
                      <img src="~/assets/images/dashboard/en.png" alt="flag" />
                      <span>English</span>
                    </b-dropdown-item>
                    <b-dropdown-item
                      v-if="requestData.local != 'ru'"
                      @click="changeLocal('ru', 'Russian')"
                    >
                      <img src="~/assets/images/dashboard/ru.png" alt="flag" />
                      <span>Russian</span>
                    </b-dropdown-item>
                    <b-dropdown-item
                      v-if="requestData.local != 'tr'"
                      @click="changeLocal('tr', 'Turkey')"
                    >
                      <img src="~/assets/images/dashboard/tr.png" alt="flag" />
                      <span>Turkey</span>
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <!-- end:: col -->
              <div class="col-xl-12">
                <div class="submit_wrapper d-flex justify-content-end">
                  <button
                    type="submit"
                    :disabled="loading"
                    class="btn btn_submit"
                  >
                    <b-spinner v-if="loading" variant="success"></b-spinner>
                    {{ $t('admin.update') }}
                  </button>
                </div>
              </div>
            </div>
            <!-- end:: row -->
          </div>
        </div>
      </ValidationObserver>
    </client-only>
  </div>
</template>

<script src="~/pages/dashboard/profile/-script.js"></script>

<style lang="scss" scoped>
.header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  position: relative;
  background-color: rgba(255, 143, 21, 0.12157);
  border-radius: 4px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: $second-color;
  }
  h6 {
    margin-bottom: 0;
    color: $second-color;
  }
}
.flexwrapper {
  padding-top: 100px;
  display: flex;
  .img_wrapper {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 130px;
      height: 130px;
      border-radius: 100%;
    }
    .uploader {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
      .icon {
        width: 35px;
        height: 35px;
        display: block;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffefbf;
        margin-bottom: 20px;
        svg {
          width: 18px;
          height: 20px;
          fill: $second-color;
        }
      }
      .text {
        width: 60%;
        text-align: center;
        font-size: 15px;
      }
    }
  }
  .info_wrapper {
    width: 50%;
    .form_group.floating {
      .form-control {
        height: 50px;
      }
    }
    .icon_pass {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 15px;
      width: 22px;
      height: 13px;
      fill: #8f8f8f;
      z-index: 100;
      cursor: pointer;
    }
  }
  .btn_submit {
    min-width: 150px;
    padding: 10px;
    border: 1px solid $third-color;
    color: $third-color;
    font-size: 14px;
    box-shadow: none;
    font-weight: 500;
    border-radius: 10px;
  }
  .lang_switcher {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    .text {
      color: #677389;
      font-size: 15px;
    }
  }
}
</style>

<style lang="scss">
.profile_wrapper {
  #MazPhoneNumberInput,
  .country-selector,
  .country-selector__input,
  .input-tel,
  .input-tel__input {
    height: 50px;
    min-height: 50px;
  }
  .country-selector__country-flag {
    top: 26px;
  }
  .lang_switcher {
    .dropdown .btn {
      border: 1px solid #ddd;
      padding: 6px 10px;
      span {
        margin-right: 15px;
        font-size: 15px;
        color: #677389;
      }
    }
  }
}
</style>