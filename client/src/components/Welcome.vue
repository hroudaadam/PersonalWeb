<template>
  <div class="welcome">
    <img class="photo" src="../assets/images/profile1.jpg" alt="" />
    <p class="title">Vítejte na mém webu! Jmenuji se Adam Hrouda.</p>
    <p class="desc">
        Jsem studentem informatiky na České zemědělské univerzitě. Z tohoto
        oboru se zajímám především o programování, které je zároveň hlavní
        náplní mé současné brigády. Pokud zrovna neprogramuji, ať už z radosti
        nebo z povinnosti, tak se rád vydám do přírody. V zimě si to svištím na
        běžkách a v létě na kole nebo se vydávám na vícedenní pochody s mou drahou polovičkou.
    </p>
    <div>
      <a class="link" target="_blank" href="//www.github.com/hroudaadam">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a
        class="link"
        target="_blank"
        href="//www.linkedin.com/in/adam-hrouda-574140175/"
      >
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </a>
      <a class="link" target="_blank" href="//www.instagram.com/adam_hrouda/">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a class="link" target="_blank" href="//www.facebook.com/adam.hrouda">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "Welcome",
  components: {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.photo {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 0 0 20px 0;
}

.title {
  font-size: 2rem;
  margin: 0 0 10px 0;
}

.desc {
  color: var(--color-2);
  margin: 0 0 20px 0;
  line-height: 1.5rem;
  text-align: center;
  max-width: 690px;
}

.link {
  display: inline-block;
  font-size: 1.8rem;
  padding: 0 5px;
  background-color: var(--white);
  border: none;
  margin: 0 5px;
}

.link:hover {
  outline: none;
  transform: scale(1.1);
}
</style>