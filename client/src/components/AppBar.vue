<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" sticky>
      <b-navbar-brand :to="{name:'Home'}">Adam Hrouda</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Deník</b-nav-item>
          <b-nav-item href="#">Cestování</b-nav-item>
          <b-nav-item href="#" disabled>Programování</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="isUserLogged">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>Uživatel</template>
            <b-dropdown-item href="#">Profil</b-dropdown-item>
            <b-dropdown-item href="#">Odhlásit</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item :to="{name: 'Login'}" v-else>Přihlásit</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppBar",
  components: {},
  computed: {
    ...mapGetters("authentication", ["isUserLogged"]),
  },
};
</script>