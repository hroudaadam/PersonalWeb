<template>
  <div class="social-media-links">
    <IconButton
      class="mr-5"
      :icon="['fab', 'github']"
      size="xl"
      v-on:click="redirect('https://www.github.com/hroudaadam/')"
      alt="test"
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
      class="mr-5"
      :icon="['fab', 'facebook']"
      size="xl"
      v-on:click="redirect('https://www.facebook.com/adam.hrouda/')"
    >
    </IconButton>
    <IconButton
      :icon="['far', 'envelope']"
      size="xl"
      v-on:click="redirect('https://www.facebook.com/adam.hrouda/')"
    ></IconButton>
  </div>
</template>

<script>
import IconButton from "../components/IconButton";

export default {
  name: "SocialMediaLinks",
  components: {
    IconButton,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.social-media-links {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>