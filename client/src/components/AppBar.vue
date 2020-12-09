<template>
  <div class="appbar">
      <h1 class="appbar__brand">
        <router-link to="/">hrouda.adam</router-link>
      </h1>

      <nav class="appbar__nav">
        <router-link class="appbar__nav-item" to="/about">O mně</router-link>
        <router-link class="appbar__nav-item" to="/posts">Příspěvky</router-link>
        <router-link class="appbar__nav-item" to="/about">Hračky</router-link>
        <router-link class="appbar__nav-item" to="/">API</router-link>
      </nav>
    </div>

    <!-- <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" sticky>
      <b-navbar-brand class="mr-5" :to="{name:'Home'}">Adam Hrouda</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>O mně</b-nav-item>
          <b-nav-item :to="{name: 'Posts'}">Příspěvky</b-nav-item>
          <b-nav-item >Ostatní</b-nav-item>
          <b-nav-item >API</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="isLogged" no-caret>
            <template v-slot:button-content>
              <b-icon icon="person-fill"></b-icon>
            </template>
            <b-dropdown-item href="#">Profil</b-dropdown-item>
            <b-dropdown-item v-on:click="logout">Odhlásit</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item :to="{name: 'Login'}" v-else>Přihlásit</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->
  
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