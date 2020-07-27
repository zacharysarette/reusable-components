<template>
  <nav id="sidebar">
    <header>
      Reusable Components
    </header>
    <nav v-for="link in links" :key="link.id" class="router-link">
      <router-link :to="link.path" active-class="Active" exact class="nav">
        {{ link.label }}
      </router-link>
    </nav>
    <footer>
      Repo: <a class ="footer" href="https://github.com/zacharysarette/reusable-components">GitHub Link</a>
      <br/>
      <br/>
      &copy; Zachary Sarette
    </footer>
  </nav>
</template>
<script>

export default {
  name: 'SideNav',
  props: {
    links: Array
  }
}
</script>
<style scoped>
.router-link {
  display: inline-block;
  text-decoration: none;
  width:100%;
}
.router-link:hover {
  background: rgba(41, 98, 255, 0.1);
}
.Active {
  display: block;
  background: rgba(41, 98, 255, 0.1);
}
a {
  display: inline-block;
  padding:10px;
  padding-left:50px;
}
a.footer {
  display: inline;
  padding:0px;
}
a:link {
  text-decoration:none;
  color:#3D5AFE;
}
a:visited {
  text-decoration:none;
  color:#3D5AFE;
}
#sidebar {
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
