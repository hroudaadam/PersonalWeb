<template>
  <div id="app">
    <!-- <AppBar></AppBar> -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    // AppBar,
  },
  computed: {
  },
  mounted() {},
};
</script>

<style scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 15px 20px 15px;
}
</style>