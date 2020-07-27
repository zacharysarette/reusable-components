<template>
  <button :class="computedClasses" @click="getClick">
    <i
      v-if="startIcon !== undefined"
      class="material-icons md-light i-start"
    >
      {{ startIcon }}
    </i>
      {{ label }}
    <i
      v-if="endIcon !== undefined"
      class="material-icons md-light i-end"
    >
      {{ endIcon }}
    </i>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    clickFunction: Function,
    color: String,
    size: String,
    variant: String,
    boxShadow: String,
    label: String,
    disabled: Boolean,
    startIcon: String,
    endIcon: String
  },
  computed: {
    computedClasses () {
      return [this.getVariant(), this.getColor(), this.getSize(), this.getBoxShadow(), this.getDisabled()]
    }
  },
  data () {
    return {
    }
  },
  methods: {
    getClick () {
      if (this.clickFunction === undefined) {
        return null
      }
      return this.clickFunction
    },
    getSize () {
      if (this.size === null) {
        return ''
      }
      return this.size
    },
    getVariant () {
      if (this.variant === undefined) {
        return 'default'
      }
      return this.variant
    },
    getColor () {
      if (this.color === null) {
        return ''
      }
      return this.color
    },
    getBoxShadow () {
      if (this.boxShadow === 'false' || this.boxShadow === 'none') {
        return 'no-box-shadow'
      }
      return ''
    },
    getDisabled () {
      if (this.disabled && this.variant === 'text') {
        return 'disabled-text'
      }
      if (this.disabled) {
        return 'disabled'
      }
      return ''
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
.i-start {
  vertical-align: text-bottom;
  font-size: 18px;
  margin-right: 3px
}
.i-end {
  vertical-align: text-bottom;
  font-size: 18px;
  margin-left: 3px
}
button {
  border-radius: 6px;
  padding: 8px 15px 8px 15px;
  border: 0px solid #ccc;
  color: #333;
  background:  #E0E0E0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);

  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  outline: none
}
.default {
  border-radius: 6px;
  padding: 8px 15px 8px 15px;
  border: 0px solid #ccc;
  color: #333;
  background:  #E0E0E0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);

  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
.default:hover {
  background:  #AEAEAE;
}
.default-hover {
  color: #3F3F3F;
  background:  #AEAEAE;
}
.outline {
  background: none;
  border: 1px solid #3D5AFE;
  color:#3D5AFE;
}
.outline-hover {
  background: rgba(41, 98, 255, 0.1);
  border: 1px solid #3D5AFE;
  color:#3D5AFE;
}
.outline:hover {
  background: rgba(41, 98, 255, 0.1);
  border: 1px solid #3D5AFE;
}
.text {
  color:#3D5AFE;
  background: none;
  border: none;
  box-shadow: none;
}
.text:hover {
  background: rgba(41, 98, 255, 0.1);
  color:#3D5AFE;
  border: none;
  box-shadow: none;
}
.text-hover {
  background: rgba(41, 98, 255, 0.1);
  color:#3D5AFE;
  border: none;
  box-shadow: none;
}
.no-box-shadow {
  box-shadow: none;
}
.primary {
  background: #3D5AFE;
  color:#fff;
}
.primary-hover {
  background: #0039CB;
  color:#fff;
}
.primary-hover:hover {
  background: #0039CB;
  color:#fff;
}
.primary:hover {
  background: #0039CB;
}
.primary:focus {
  background: #0039CB;
}
.secondary {
  background: #455A64;
  color:#fff;
}
.secondary-hover {
  background: #1C313A;
  color:#fff;
}
.secondary-hover:hover {
  background: #1C313A;
  color:#fff;
}
.secondary:hover {
  background: #1C313A;
}
.secondary:focus {
  background: #1C313A;
}
.danger {
  background: #D32F2F;
  color:#fff;
}
.danger-hover {
  background: #9A0007;
  color:#fff;
}
.danger-hover:hover {
  background: #9A0007;
  color:#fff;
}
.danger:hover {
  background: #9A0007;
}
.danger:focus {
  background: #9A0007;
}
.sm {
  padding: 6px 12px 6px 12px;
}
.md {
  padding: 8px 15px 8px 15px;
}
.lg {
  padding: 10px 20px 10px 20px;
}
.disabled {
  background: #E0E0E0;
  color: #9E9E9E;
  cursor: not-allowed
}
.disabled-text {
  background: none;
  color: #9E9E9E;
  cursor: not-allowed
}
</style>
