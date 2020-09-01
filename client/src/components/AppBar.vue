<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top" sticky>
      <b-navbar-brand :to="{name:'Home'}">Adam Hrouda</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'Diary'}">Deník</b-nav-item>
          <b-nav-item :to="{name: 'Travel'}">Cestování</b-nav-item>
          <b-nav-item href="#" disabled>Programování</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="isUserLogged" no-caret>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-icon icon="person-fill"></b-icon>
            </template>
            <b-dropdown-item href="#">Profil</b-dropdown-item>
            <b-dropdown-item v-on:click="logout">Odhlásit</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item :to="{name: 'Login'}" v-else>Přihlásit</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AppBar",
  components: {},
  computed: {
    ...mapGetters('authentication', ['isUserLogged']),
  },
  methods: {
    ...mapActions('authentication', ['logout'])
  }
};
</script>