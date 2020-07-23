<template>
  <nav>
    <header>
      Reusable Components
    </header>
    <Button v-for="link in links" :key="link.id" variant="text"  :label="link.label" :clickFunction="link.function" />
    <footer>
      Repo: <a href="https://github.com/zacharysarette/reusable-components">GitHub Link</a>
      </br>
      &copy; Zachary Sarette
    </footer>
  </nav>
</template>
<script>
import Button from './Button.vue'

export default {
  name: 'SideNav',
  components: {
    Button
  },
  props: {
    links: Array
  }
}
</script>
<style scoped>
nav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  border-right: 1px solid #eaeaea;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  font-family: Noto Sans JP;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  background: #FAFBFD;
}
footer {
  display: inline-block;
  position:absolute;
  bottom: 0px;
  left: -240px;
  color: #A9A9A9;
}
header {
  display: inline-block;
  position:relative;
  font-size: 18px;
  left: -240px;
}
</style>
