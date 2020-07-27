
<template>
  <div id="Inputs">
    <header>
      Inputs
    </header>
    <main class="table">
      <div>
        <span>
          {{ inputHtml.default }}
        </span>
        <span>
          {{ hover }}
        </span>
        <span>
          {{ focus }}
        </span>
      </div>
      <div>
        <span>
          <Input label="Label" class="row"/>
        </span>
        <span>
          <Input label="Label" class="row" extra="inputHover"/>
        </span>
        <span>
          <Input label="Label" class="row" extra="inputFocus"/>
        </span>
      </div>
      <div>
        <span>
          {{ inputHtml.error }}
        </span>
        <span>
          {{ hover }}
        </span>
        <span>
          {{ focus }}
        </span>
      </div>
      <div>
        <span>
          <Input label="Label" class="row" error/>
        </span>
        <span>
          <Input label="Label" class="row" error/>
        </span>
        <span>
          <Input label="Label" class="row" extra="errorFocus" error/>
        </span>
      </div>
      <div>
        <span>
          {{ inputHtml.disabled }}
        </span>
      </div>
      <div>
        <span>
          <Input disabled/>
        </span>
      </div>
      <div>
        <span>
          {{ inputHtml.helperText }}
        </span>
        <span>
          {{ inputHtml.helperTextError }}
        </span>
      </div>
      <div>
        <span>
          <Input helperText="some useful text" />
        </span>
        <span>
          <Input helperText="some userful text" error/>
        </span>
      </div>
      <div>
        <span>
          {{ inputHtml.startIcon }}
        </span>
        <span>
          {{ inputHtml.endIcon }}
        </span>
      </div>
      <div>
        <span>
          <Input startIcon="phone" />
        </span>
        <span>
          <Input endIcon="lock" />
        </span>
      </div>
      <div>
        <span>
          {{ inputHtml.value }}
        </span>
      </div>
      <div>
        <span>
          <Input value="text"/>
        </span>
      </div>
      <div>
        <span>
          {{ inputHtml.sm }}
        </span>
        <span>
          {{ inputHtml.md }}
        </span>
      </div>
      <div>
        <span>
          <Input size="sm" />
        </span>
        <span>
          <Input size="md" />
        </span>
      </div>
    </main>
    <section>
      <div class="labelText">
        {{ inputHtml.fullWidth }}
      </div>
      <div class="fullWidth">
        <Input fullWidth/>
      </div>
      <div class="labelText">
        {{ inputHtml.multiLine }}
      </div>
      <div>
        <Input multiline rows="4" cols="50"/>
      </div>
    </section>
    <footer>
      Icons:
      <a href="https://material.io/resources/icons/?style=round" target="blank">
        https://material.io/resources/icons/?style=round
      </a>
    </footer>
  </div>
</template>
<script>
import Input from './Input.vue'

export default {
  name: 'Inputs',
  components: {
    Input
  },
  data () {
    return {
      hover: ':hover',
      focus: ':focus',
      inputHtml: {
        default: '<Input />',
        error: '<Input error/>',
        disabled: '<Input disabled/>',
        value: '<Input value="text"/>',
        helperText: '<Input helperText="some useful text"/>',
        helperTextError: '<Input helperText="some useful text" error/>',
        startIcon: '<Input startIcon="phone"/>',
        endIcon: '<Input endIcon="lock"/>',
        sm: '<Input size="sm"/>',
        md: '<Input size="md"/>',
        fullWidth: '<Input fullWidth/>',
        multiLine: '<Input multiLine row="4" cols="50"/>'
      }
    }
  }
}
</script>
<style scoped>
Input {
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
section {
  margin-left: 260px; /* Same as the width of the sidebar */
  padding-left: 10px;
  text-align: left;
  font-family: Ubuntu Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
}
main {
  display: table;
  margin-left: 260px; /* Same as the width of the sidebar */
  padding-top: 20px;
  padding-left: 10px;
  text-align: left;
  font-family: Ubuntu Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
}
footer {
  margin-left: 260px; /* Same as the width of the sidebar */
  padding: 30px 10px;
  font-family: Ubuntu Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  line-height: 12px;
}
div {
  display: table-row;
}
span {
  display: table-cell;
  padding-top: 20px;
  padding-right: 20px;
}
header {
  padding-top: 20px;
  margin-left: 260px; /* Same as the width of the sidebar */
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: left;
}
footer {
  margin-left: 260px; /* Same as the width of the sidebar */
  padding: 30px 10px;
  font-family: Ubuntu Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: left;
  line-height: 12px;
}
.labelText {
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 20px;
}
.fullWidth {
  display: inline-block;
  width: 100%
}
</style>
