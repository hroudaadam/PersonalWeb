<template>
  <div class="content-s">
    <div class="header">
      <img class="photo" src="../assets/images/profile1.jpg" alt="" />
      <div class="title-1">Vítejte na mém webu! Jmenuji se Adam Hrouda.</div>
      <div class="desc">
        Jsem studentem informatiky na České zemědělské univerzitě. Z tohoto
        oboru se zajímám především o programování, které je zároveň hlavní
        náplní mé současné brigády. Pokud zrovna neprogramuji, ať už z radosti
        nebo z povinnosti, tak se rád vydám do přírody. V zimě si to svištím na
        běžkách a v létě na kole nebo se vydávám na vícedenní pochody.
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
          :icon="['fab', 'instagram']"
          size="xl"
          v-on:click="redirect('https://www.instagram.com/adam_hrouda/')"
        ></IconButton>
        <IconButton
          :icon="['fab', 'facebook']"
          size="xl"
          v-on:click="redirect('https://www.facebook.com/adam.hrouda/')"
        ></IconButton>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "../components/IconButton";

export default {
  name: "Home",
  components: {
    IconButton,
  },
  data() {
    return {};
  },
  methods: {
    redirect(link, target = "_blank") {
      window.open(link, target);
    },
  },
};
</script>

<style scoped>
.header {
  text-align: center;
  margin: 0 0 150px 0;
}

.photo {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 0 auto 20px auto;
}

.title-1 {
  font-size: 2rem;
  margin: 0 0 10px 0;
}

.desc {
  color: var(--color-2);
  margin: 0 0 20px 0;
  line-height: 1.5rem;
  max-width: 670px;
  margin: 0 auto 20px auto;
}

.social-media-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>