<template>
  <div class="appbar">
      <h1 class="appbar__brand">
        <router-link to="/">hrouda.adam</router-link>
      </h1>

      <nav class="appbar__nav">
        <router-link class="appbar__nav-item" to="/about" active-class="appbar__nav-item--active">O mně</router-link>
        <router-link class="appbar__nav-item" to="/posts" active-class="appbar__nav-item--active">Příspěvky</router-link>
        <router-link class="appbar__nav-item" to="/playground" active-class="appbar__nav-item--active">Hřiště</router-link>
        <router-link class="appbar__nav-item" to="/api" active-class="appbar__nav-item--active">API</router-link>
      </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "../router/index";

export default {
  name: "AppBar",
  components: {},
  computed: {
    ...mapGetters("authentication", ["isLogged"]),
  },
  methods: {
    ...mapActions("authentication", ["storeLogout"]),
    logout() {
      this.storeLogout();
      router.push({ name: "Login" });
    },
  },
};
</script>