<template>
  <div class="content-s">
    <div class="header">
      <img class="photo mb-3" src="../assets/images/profile1.jpg" alt="" />
      <div class="title mb-3">Vítejte na mém webu!</div>
      <div class="desc mb-5">
        Jmenuji se Adam Hrouda. Studuji informatiku na České zemědělské univerzitě a přivydělávám si programováním. Ve volném čase se rád vydávám do lesů a hor. 
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
.photo {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}

.title {
  font-size: 4rem;
  text-align: center;
}

.desc {
  color: var(--color-2);
  max-width: 620px;
  margin: 0 auto;
  font-size: 1.5rem;
  text-align: left;
}

.social-media-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>