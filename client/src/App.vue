<template>
  <div id="app">
    <AppBar></AppBar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    AppBar,
  },
  mounted() {
  },
};
</script>

<style scoped>
.content {
    max-width: 1500px;
    margin: 0 auto 0 auto;
    padding: 20px 10px 0 10px;
    height: calc(100vh - 50px);
}
</style>