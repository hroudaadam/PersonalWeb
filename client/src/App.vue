<template>
  <v-app>
    <v-navigation-drawer app class="elevation-5" :width="230">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5">hrouda.adam</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item-group mandatory color="primary" v-model="selectNav">
          <v-list-item v-on:click="scrollTo('home')">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-body-2">Úvod</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-on:click="scrollTo('skills')">
            <v-list-item-icon>
              <v-icon>mdi-xml</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-body-2"
                >Schopnosti</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-on:click="scrollTo('exps')">
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-body-2"
                >Zkušenosti</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-on:click="scrollTo('edu')">
            <v-list-item-icon>
              <v-icon>mdi-school</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-body-2"
                >Vzdělání</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-post</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-body-2">Blog</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      selectNav: 0,
    };
  },
  methods: {
    scrollTo(ref) {
      let element = this.$refs[ref];
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    window.onscroll = () => {
      let scrollY = window.scrollY + window.innerHeight / 2;

      let home = this.$refs["home"];
      let skills = this.$refs["skills"];
      let exps = this.$refs["exps"];
      let edu = this.$refs["edu"];

      if (scrollY >= edu.offsetTop) {
        this.selectNav = 3;
      }
      else if (scrollY >= exps.offsetTop) {
        this.selectNav = 2;
      } 
      else if (scrollY >= skills.offsetTop) {
        this.selectNav = 1;
      } 
      else if (scrollY >= home.offsetTop) {
        this.selectNav = 0;
      }
    };
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>