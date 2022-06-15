<template>
  <div class="form-group form_group">
    <label class="control-label" v-if="isLabel">{{ label }}</label>
    <div class="input-group">
      <multiselect
        v-model="selected"
        :options="options"
        :multiple="isMultiselect"
        :placeholder="placeholder"
        track-by="name"
        label="name"
      >
        <template slot="singleLabel" slot-scope="{ option }">
          {{ option.name }}
        </template>
      </multiselect>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'AppSelectBox',
  props: {
    label: {
      type: String,
    },
    isLabel: {
      type: Boolean,
      default: true,
    },
    value: {
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
    },
    isMultiselect: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      selected: '',
    }
  },
  watch: {
    selected(currentValue) {
      if (currentValue) {
        this.$emit('input', currentValue.value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
  border: 1px solid transparent;
  .control-label {
    color: #565656;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
<style lang="scss">
.form-group {
  // background-color: $white;
  cursor: pointer;
  &.bg_white {
    .multiselect__tags {
      background-color: #fff;
    }
  }
  &.bg_gray {
    .multiselect__tags {
      background-color: #f4f6f8;
    }
  }
  .multiselect {
    height: 54px;
  }
  .multiselect__single {
    font-size: 14px;
    color: #495057;
    background-color: transparent;
  }
  .multiselect__tags {
    border: 1px solid transparent;
    border: 1px solid rgba(196, 196, 196, 0.79);
    border-radius: 10px;
    height: 54px;
    display: flex;
    align-items: center;
  }
  .multiselect__tag {
    span {
      font-size: 13px;
      font-weight: 600;
    }
  }
  .multiselect__option {
    font-size: 14px;
  }
  .multiselect__input {
    font-size: 12px;
    color: #ddd;
    background-color: transparent;
  }
  &.bg_gray {
    .multiselect__tags {
      border: none;
      background-color: #f4f6f8;
      min-height: 54px;
      padding-left: 12px;
      font-size: 14px;
      color: #000;
      font-weight: 500;
    }
    .multiselect__select:before {
      top: 28px;
    }
    .multiselect__single {
      background-color: transparent;
    }
    .multiselect__placeholder {
      font-weight: 400;
    }
  }
  .multiselect__element {
    .multiselect__option::after {
      display: none;
    }
  }
  .multiselect__select {
    top: 10px;
  }
  .multiselect__placeholder {
    font-size: 12px;
  }
  &.search_project {
    min-width: 200px;
    .multiselect__tags {
      border: none;
      border-bottom: 1px solid $third-color;
      border-radius: 0;
    }
    .multiselect__placeholder {
      color: $third-color;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
    .multiselect__select:before {
      border-color: $third-color transparent transparent;
    }
  }
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
