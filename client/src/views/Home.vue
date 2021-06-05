<template>
  <div>
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
        src="../assets/images/profile1.jpg"
      ></v-img>
      <div class="mt-3 text-h3">Vítejte na mém webu!</div>
      <div class="mt-3 c-body-text-1">
        Jmenuji se Adam Hrouda. Studuji informatiku na České zemědělské
        univerzitě a zajímám se o programování. Ve volném čase se rád vydávám do
        lesů a hor.
      </div>
    </v-layout>

    <div ref="exps">
      <div class="light-blue darken-4 text-center py-5">
        <span class="text-h4 white--text">Zkušenosti</span>
      </div>
      <div class="pa-5">
        <EventCard>
          <template v-slot:header>Programátor</template>
          <template v-slot:subheader-1>VDT technology a.s.</template>
          <template v-slot:subheader-2>01/2020 - 05/2021</template>
        </EventCard>

        <EventCard>
          <template v-slot:header>IT tester</template>
          <template v-slot:subheader-1>Česká pojišťovna a.s.</template>
          <template v-slot:subheader-2>03/2019 - 12/2019</template>
        </EventCard>

        <EventCard>
          <template v-slot:header>IT specialista</template>
          <template v-slot:subheader-1>COM PLUS a.s.</template>
          <template v-slot:subheader-2>02/2018 - 08/2018</template>
        </EventCard>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "../components/EventCard";

export default {
  name: "Home",
  components: {
    EventCard,
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
</style>