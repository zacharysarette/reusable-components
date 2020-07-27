<template>
  <div id="Buttons">
    <header>
      Buttons
    </header>
    <main class="table">
      <div>
        <span>
          {{ buttonHtml.default }}
        </span>
      </div>
      <div>
        <span>
          <Button label="Default" class="row"/>
        </span>
      </div>
      <div>
        <span>
          {{ buttonHtml.outline }}
        </span>
        <span>
          {{ hover }}
        </span>
      </div>
      <div>
        <span>
          <Button label="Default" variant="outline"/>
        </span>
        <span>
          <Button label="Default" variant="outline-hover"/>
        </span>
      </div>
      <div>
        <span>
        {{ buttonHtml.text }}
        </span>
        <span>
        {{ hover }}
        </span>
      </div>
      <div>
        <span>
          <Button label="Default" variant="text" class="column"/>
        </span>
        <span>
          <Button label="Default" variant="text-hover" class="column"/>
        </span>
      </div>
      <div>
        <span>
          {{ buttonHtml.disabled }}
        </span>
        <span>
          {{ buttonHtml.disabledText}}
        </span>
      </div>
      <div>
        <span>
          <Button label="Disabled" disabled/>
        </span>
        <span>
          <Button label="Disabled" variant="text" disabled/>
        </span>
      </div>
      <div>
        <span>
          {{ buttonHtml.startIcon }}
        </span>
        <span>
          {{ buttonHtml.endIcon }}
        </span>
      </div>
      <div>
        <span>
          <Button label="Default" startIcon="add_shopping_cart"/>
        </span>
        <span>
          <Button label="Default" endIcon="add_shopping_cart"/>
        </span>
      </div>
      <div>
        <span>
          {{ buttonHtml.small }}
        </span>
        <span>
          {{ buttonHtml.medium }}
        </span>
        <span>
          {{ buttonHtml.large }}
        </span>
      </div>
      <div>
        <span>
          <Button label="Default" size="sm"/>
        </span>
        <span>
          <Button label="Default" size="md"/>
        </span>
        <span>
          <Button label="Default" size="lg"/>
        </span>
      </div>
      <div>
        <span>
          {{ buttonHtml.primary }}
        </span>
        <span>
          {{ buttonHtml.secondary }}
        </span>
        <span>
          {{ buttonHtml.danger }}
        </span>
      </div>
      <div>
        <span>
          <Button label="Primary" color="primary"/>
        </span>
        <span>
          <Button label="Secondary" color="secondary"/>
        </span>
        <span>
          <Button label="Danger" color="danger"/>
        </span>
      </div>
      <div>
        <span>
          {{ hover }}
        </span>
      </div>
      <div>
        <span>
          <Button label="Primary" color="primary-hover"/>
        </span>
        <span>
          <Button label="Secondary" color="secondary-hover"/>
        </span>
        <span>
          <Button label="Danger" color="danger-hover"/>
        </span>
      </div>
    </main>
    <footer>
      Icons:
      <a href="https://material.io/resources/icons/?style=round" target="blank">
        https://material.io/resources/icons/?style=round
      </a>
    </footer>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Buttons',
  components: {
    Button
  },
  data () {
    return {
      hover: ':hover & :focus',
      buttonHtml: {
        default: '<Button />',
        outline: '<Button variant="outiline"/>',
        text: '<Button variant="text"/>',
        disabled: '<Button disabled/>',
        disabledText: '<Button variant="text" disabled/>',
        startIcon: '<Button startIcon="add_shopping_cart"/>',
        endIcon: '<Button endIcon="add_shopping_cart"/>',
        primary: '<Button color="primary"/>',
        secondary: '<Button color="secondary"/>',
        danger: '<Button color="danger"/>',
        small: '<Button size="sm"/>',
        medium: '<Button size="md"/>',
        large: '<Button size="lg"/>'
      }
    }
  }
}
</script>
<style scoped>
Button {
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
main {
  display: table;
  margin-left: 260px; /* Same as the width of the sidebar */
  padding: 20px 10px;
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
  padding-right:20px;
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
</style>
