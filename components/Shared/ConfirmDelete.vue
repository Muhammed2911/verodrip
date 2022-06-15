<template>
  <div>
    <div class="backdrop" :class="{ active: show || show_modal }"></div>
    <div class="cdelete_wrapper" :class="{ active: show || show_modal }">
      <div class="text">
        <span class="icon">
          <svg>
            <use xlink:href="~/static/svg/sprite.svg#trash"></use>
          </svg>
        </span>
        <span>Do you want to delete this item ?</span>
      </div>

      <div class="buttons">
        <button
          type="button"
          class="btn btn_discard"
          @click="dialogAction(false)"
        >
          {{ $t('admin.cancel') }}
        </button>
        <button
          type="button"
          class="btn btn_confirm"
          @click="dialogAction(true)"
        >
          {{ $t('admin.yes') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmDelete',
  props: ['show'],
  emits: ['confirm-delete'],
  data() {
    return {
      show_modal: null,
    }
  },
  mounted() {
    this.show_modal = this.show
  },
  methods: {
    dialogAction(value) {
      this.$emit('confirm-delete', value)
      if (value == false) {
        this.show_modal = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  &.active {
    opacity: 1;
    visibility: visible;
    z-index: 100;
  }
}
.cdelete_wrapper {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  padding: 32px 55px;
  background-color: #fff;
  border-radius: 10px;
  border-left: 2px solid #ff8f15;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  &.active {
    top: 50%;
    opacity: 1;
    visibility: visible;
    z-index: 110;
  }
  .text {
    display: flex;
    align-items: center;
    .icon {
      width: 24px;
      height: 24px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ed4c4914;
      margin-right: 8px;
      svg {
        width: 13px;
        height: 13px;
        fill: #ed4c49;
      }
    }
  }
  .buttons {
    .btn {
      min-width: 130px;
      padding: 12px;
      font-size: 15px;
      font-weight: 500;
      border-radius: 8px;
      border: 1px solid transparent;
    }
    .btn_confirm {
      background-color: #ed4c49;
      border-color: #ed4c49;
      color: #fff;
    }
    .btn_discard {
      border-color: #008b78;
      color: #008b78;
    }
  }
}
</style>