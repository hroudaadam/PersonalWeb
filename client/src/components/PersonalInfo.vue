<template>
  <div>
    <div class="title mb-5">Zdravím, jmenuji se Adam Hrouda.</div>
    <div class="desc mb-5">
      Jsem studentem informatiky na České zemědělské univerzitě. Z tohoto oboru
      se zajímám především o programování, které je zároveň hlavní náplní mé
      současné brigády. Pokud zrovna neprogramuji, ať už z radosti nebo z
      povinnosti, tak se rád vydám do přírody. V zimě si to svištím na běžkách a
      v létě na kole nebo se vydávám na vícedenní pochody.
    </div>
    <div class="social-media-links">
      <IconButton
        class="mr-5"
        :icon="['fab', 'github']"
        size="xl"
        v-on:click="redirect('https://www.github.com/hroudaadam/')"
      ></IconButton>
      <IconButton
        class="mr-5"
        :icon="['fab', 'linkedin-in']"
        size="xl"
        v-on:click="
          redirect('https://www.linkedin.com/in/adam-hrouda-574140175/')
        "
      ></IconButton>
      <IconButton
        class="mr-5"
        :icon="['fab', 'facebook']"
        size="xl"
        v-on:click="redirect('https://www.facebook.com/adam.hrouda/')"
      ></IconButton>
      <IconButton
        :icon="['fab', 'instagram']"
        size="xl"
        v-on:click="redirect('https://www.instagram.com/hrouda.adam/')"
      ></IconButton>
    </div>
  </div>
</template>

<script>
import IconButton from "../components/IconButton";

export default {
  name: "PersonalInfo",
  components: {
    IconButton,
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>