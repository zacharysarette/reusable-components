<template>
  <div id="app">
    <side-nav :links="links"/>
    <router-view></router-view>
  </div>
</template>
<script>
import SideNav from './components/SideNav.vue'

export default {
  name: 'App',
  components: {
    SideNav
  },
  data () {
    return {
      links: [
        { id: 0, label: 'Home', path: '/' },
        { id: 1, label: 'Buttons', path: '/buttons' },
        { id: 2, label: 'Inputs', path: '/inputs' }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Poppins:wght@500&family=Ubuntu+Mono&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
Button {
  cursor: pointer;
}
</style>
