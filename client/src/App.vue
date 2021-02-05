<template>
  <div id="app">
    <Loading v-if="this.loading"></Loading>
    <AppBar></AppBar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppBar from "./components/AppBar";
import Loading from "./components/Loading";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    AppBar,
    Loading,
  },
  computed: {
    ...mapState(["loading", "errorMsg"]),
  },
  mounted() {},
};
</script>

<style scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px 20px 15px;
}
</style>