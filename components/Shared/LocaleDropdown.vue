<template>
  <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
    <template #button-content>
      <img
        :src="require(`~/assets/images/dashboard/${localize}.png`)"
        alt="flag"
      />
      <svg class="icon">
        <use xlink:href="~/static/svg/sprite.svg#angle_arrow"></use>
      </svg>
    </template>
    <b-dropdown-item v-if="localize != 'en'" @click="changeLocal('en')">
      <img src="~/assets/images/dashboard/en.png" alt="flag" />
      <span>English</span>
    </b-dropdown-item>
    <b-dropdown-item v-if="localize != 'ru'" @click="changeLocal('ru')">
      <img src="~/assets/images/dashboard/ru.png" alt="flag" />
      <span>Russian</span>
    </b-dropdown-item>
    <b-dropdown-item v-if="localize != 'tr'" @click="changeLocal('tr')">
      <img src="~/assets/images/dashboard/tr.png" alt="flag" />
      <span>Turkey</span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'LocaleDropdown',
  props: ['attr'],
  data() {
    return {
      localize: 'en',
    }
  },
  methods: {
    changeLocal(params) {
      this.localize = params
      this.$emit('locale-change', params)
    },
  },
}
</script>

<style lang="scss">
.switch_elem_wrapper {
  .dropdown {
    .dropdown-menu {
      border: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
      a {
        font-size: 14px;
        display: flex;
        align-items: center;
        &:active {
          background-color: $third-color;
          color: #fff;
        }
        span {
          margin-left: 12px;
        }
      }
    }
    .btn {
      padding: 0;
      outline: none;
      box-shadow: none;
    }
    .icon {
      width: 12px;
      height: 6px;
    }
  }
}
</style>