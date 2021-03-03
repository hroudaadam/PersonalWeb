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
      <!-- Header -->
      <v-layout
        :align-center="true"
        :column="true"
        class="pa-5 full-height"
        ref="home"
      >
        <v-img
          class="rounded-circle"
          aspect-ratio="1"
          width="300"
          height="300"
          max-height="300"
          src="./assets/images/profile1.jpg"
        ></v-img>
        <div class="mt-3 text-h3">Vítejte na mém webu!</div>
        <div class="mt-3 c-body-text-1">
          Jmenuji se Adam Hrouda. Studuji informatiku na České zemědělské
          univerzitě a zajímám se o programování. Ve volném čase se rád vydávám
          do lesů a hor.
        </div>
      </v-layout>

      <div ref="skills">
        <div class="light-blue darken-4 text-center py-5">
          <span class="text-h4 white--text">Schopnosti</span>
        </div>
        <div class="pa-5">
          <v-card class="mx-auto" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">.NET</div>
              <div>adjective</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4"> Learn More </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto mt-5" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">.NET</div>
              <div>adjective</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4"> Learn More </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto mt-5" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">.NET</div>
              <div>adjective</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4"> Learn More </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <div ref="exps" class="full-height">
        <div class="light-blue darken-4 text-center py-5">
          <span class="text-h4 white--text">Zkušenosti</span>
        </div>
        <div class="pa-5">
          <v-card class="mx-auto" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">Programátor</div>
              <div>VDT Technology a.s.</div>
              <div>01/2020 - 05/2021</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4">Podrobnosti</v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto mt-5" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">IT tester</div>
              <div>Česká pojišťovna a.s.</div>
              <div>03/2019 - 12/2019</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4">Podrobnosti</v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto mt-5" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">IT specialista HelpDesk</div>
              <div>COM PLUS a.s.</div>
              <div>02/2018 - 08/2018</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4">Podrobnosti</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <div ref="edu" class="full-height">
        <div class="light-blue darken-4 text-center py-5">
          <span class="text-h4 white--text">Vzdělání</span>
        </div>
        <div class="pa-5">
          <v-card class="mx-auto" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">.NET</div>
              <div>adjective</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4"> Learn More </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto mt-5" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">.NET</div>
              <div>adjective</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4"> Learn More </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="mx-auto mt-5" max-width="700">
            <v-card-text>
              <div class="display-1 text--primary">.NET</div>
              <div>adjective</div>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br />
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4"> Learn More </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
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

<style scoped>
.c-body-text-1 {
  font-size: 1.4rem !important;
  max-width: 470px;
}

.full-height {
  min-height: calc(100vh) !important;
}

html {
  scroll-behavior: smooth;
}
</style>