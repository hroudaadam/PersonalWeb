<template>
  <div class="appbar-wrapper">
    <div class="appbar">
      <span class="brand">
        <router-link to="/">hrouda.adam</router-link>
      </span>

      <nav class="nav">
        <router-link class="nav-item" to="/about" active-class="active"
          >O mně</router-link
        >
        <router-link class="nav-item" to="/posts" active-class="active"
          >Příspěvky</router-link
        >
        <router-link class="nav-item" to="/playground" active-class="active"
          >Hřiště</router-link
        >
        <router-link class="nav-item" to="/api" active-class="active"
          >API</router-link
        >
      </nav>
    </div>
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
.appbar-wrapper {
  background-color: var(--color-1);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 50px;
}

.appbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}

.brand {
  display: block;
  font-size: 1.5em;
  font-weight: 500;
  margin: auto 0;
  letter-spacing: 2px;
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
  }
}
</style>