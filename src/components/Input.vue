<template>
  <div :class="fullWidth ? 'fullWidth' : ''">
    <label
      v-if="label !== undefined"
      :style="redError"
    >
      {{ label }}
    </label>
    <i
      v-if="startIcon !== undefined"
      class="material-icons md-light i-start"
    >
      {{ startIcon }}
    </i>
    <textarea
      v-if="multiline"
      :rows="rows"
      :cols="cols"
      :placeholder="placeHolder"
      :class="getComputedClasses"
      :value="value"
      :disabled="disabled ? 'disabled' : ''"
    >
    </textarea>
    <input
      v-else
      :placeholder="placeHolder"
      :class="getComputedClasses"
      :value="value"
      :disabled="disabled ? 'disabled' : ''"
    >
    <i
      v-if="endIcon !== undefined"
      class="material-icons md-light i-end"
      >
      {{ endIcon }}
    </i>
    <span
      v-if="helperText !== undefined"
      :style="redError"
    >
      {{ helperText }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    label: String,
    extra: String,
    placeHolder: String,
    type: String,
    error: Boolean,
    disabled: Boolean,
    helperText: String,
    endIcon: String,
    startIcon: String,
    value: String,
    size: String,
    fullWidth: Boolean,
    multiline: Boolean,
    rows: String,
    cols: String
  },
  computed: {
    getComputedClasses () {
      return [
        this.getDisabled(),
        this.getExtra(),
        this.getError(),
        this.getSize(),
        this.getIcon(),
        this.getFullWidth()
      ]
    },
    redError () {
      return this.error ? { color: 'red' } : ''
    }
  },
  methods: {
    getError () {
      if (this.error) {
        return 'error'
      }
      return ''
    },
    getSize () {
      if (this.size === null) {
        return ''
      }
      return this.size
    },
    getDisabled () {
      if (this.disabled && this.variant === 'text') {
        return 'disabled-text'
      }
      if (this.disabled) {
        return 'disabled'
      }
      return ''
    },
    getExtra () {
      if (this.extra) {
        return this.extra
      }
    },
    getIcon () {
      if (this.endIcon && this.startIcon) {
        return 'i-start-and-end-icon'
      }
      if (this.endIcon) {
        return 'i-end-icon'
      }
      if (this.startIcon) {
        return 'i-start-icon'
      }
    },
    getFullWidth () {
      if (this.fullWidth) {
        return 'fullWidth'
      }
    }
  }
}
</script>
<style scoped>
span {
  display: inline-block;
  margin-top: 5px;
}
label {
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: normal
}
input {
  width: 100%;
  height: 56px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  border: 1px solid #828282;
  box-sizing: border-box;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: normal;
  outline: none
}
textarea {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  border: 1px solid #828282;
  box-sizing: border-box;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: normal;
  outline: none
}
input:hover, .inputHover, textarea:hover {
  border: 1px solid #333333
}
input:focus, .inputFocus, .inputFocus:hover, textarea:focus {
  border: 2px solid #2962FF;
  outline: none
}
.error, .error:hover {
  border: 1px solid #D32F2F
}
.error:focus, .errorFocus, .errorFocus:hover {
  border: 2px solid #D32F2F
}
.disabled {
  border: none;
  background: #f2f2f2;
  color: #828282;
  cursor: not-allowed
}
.sm {
  height:40px
}
.md {
  height:56px
}
.fullWidth {
  display: inline-block;
  width: 100%
}
i {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  display: inline-block;
  position: absolute;
  min-width: 40px;
  margin-bottom: 10px;
}
.i-start {
  margin-left: 10px;
  margin-top: 15px;
}
.i-end {
  margin-left: -35px;
  margin-top: 15px;
}
.i-start-icon {
  padding-left: 50px;
}
.i-end-icon {
  padding-right: 50px;
}
.i-start-and-end-icon {
  padding-left: 50px;
  padding-right: 50px;
}
</style>
