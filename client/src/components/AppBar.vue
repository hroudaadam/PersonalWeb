<template>
  <div class="appbar-wrapper">
    <div class="appbar">
      <span class="brand">
        <router-link to="/">hrouda.adam</router-link>
      </span>

      <nav class="nav">
        <router-link
          class="nav-item nav-item__text"
          :to="{ name: 'Posts' }"
          active-class="active"
          >Příspěvky</router-link
        >

        <router-link
          class="nav-item nav-item__text disabled"
          :to="{ name: 'Home' }"
          >Hřiště</router-link
        >

        <router-link
          class="nav-item nav-item__text disabled"
          :to="{ name: 'Home' }"
          >API</router-link
        >

        <IconButton
          v-if="isLoggedIn"
          :icon="['fas', 'sign-out-alt']"
          size="l"
          v-on:click="logout()"
        ></IconButton>
        <IconButton
          v-else
          :icon="['fas', 'sign-in-alt']"
          size="l"
          v-on:click="$router.push({ name: 'Login' })"
        ></IconButton>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import IconButton from "../components/IconButton";

export default {
  name: "AppBar",
  components: {
    IconButton,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["storeLogout"]),
    logout() {
      this.storeLogout();
      this.$router.push({ name: "Home" }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.appbar-wrapper {
  background-color: var(--color-1);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 50px;
  z-index: 3;
}

.appbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-w);
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
  height: 100%;
  justify-content: space-around;
  align-items: center;
  width: 300px;
}

.nav-item {
  font-size: 0.9rem;
  height: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-item:hover {
  cursor: pointer;
}

.nav-item__icon {
  font-size: 1.2rem;
}

.nav-item__icon:hover {
  transform: scale(1.1);
}

.nav-item__text {
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.nav-item__text:hover,
.active {
  border-bottom-color: var(--color-w);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.disabled {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: var(--color-lg);
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