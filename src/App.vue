<template>
  <div id="app">
    <side-nav :links="[{id:1, label:'Buttons', function: null}]"/>
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
import Button from './components/Button.vue'
import SideNav from './components/SideNav.vue'

export default {
  name: 'App',
  components: {
    Button,
    SideNav
  },
  data () {
    return {
      hover: ':hover & :focus',
      buttonHtml: {
        default: '<Button />',
        outline: '<Button variant="outiline"/>',
        text: '<Button variant="text"/>',
        disabled: '<Button disabled/>',
        disabledText: '<Button variatn="text" disabled/>',
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Ubuntu+Mono&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
Button {
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
main {
  display: table;
  margin-left: 260px; /* Same as the width of the sidebar */
  margin-left: 260px; /* Same as the width of the sidebar */
  padding: 50px 10px;
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
</style>
