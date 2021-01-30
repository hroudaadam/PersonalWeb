<template>
  <div class="appbar">
      <span class="brand">
        <router-link to="/">hrouda.adam</router-link>
      </span>

      <nav class="nav">
        <router-link class="nav-item" to="/about" active-class="active">O mně</router-link>
        <router-link class="nav-item" to="/posts" active-class="active">Příspěvky</router-link>
        <router-link class="nav-item" to="/playground" active-class="active">Hřiště</router-link>
        <router-link class="nav-item" to="/api" active-class="active">API</router-link>
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

<style>

.appbar {
    display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;
    color: var(--white);
    background-color: var(--color-1);
    position: sticky;
    top: 0;
}

.brand {
    display: block;
    font-size: 1.5em;
    font-weight: 600;
    margin: auto 0;
}

.nav {
    display: flex;
    justify-content: space-around;
    width: 300px;
}

.nav-item {
    font-size: 1em;
    display: block;
    text-decoration: none;
}

.nav-item:hover {
    font-weight: 700;
}

.active {
    font-weight: 700;
}

@media screen and (max-width: 550px) {
    .nav {
        display: none;
    }

    .appbar {
      justify-content: flex-start;
      padding: 0 10px;
    }
}

</style>