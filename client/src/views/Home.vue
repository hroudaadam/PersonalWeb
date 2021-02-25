<template>
  <div class="container-s">
    <div class="header mb-5">
      <img class="photo mb-3" src="../assets/images/profile1.jpg" alt="" />
      <div class="title h1 mb-3">Vítejte na mém webu!</div>
      <div class="desc mb-5">
        Jmenuji se Adam Hrouda. Studuji informatiku na České zemědělské
        univerzitě a zajímám se o programování. Ve volném čase se rád vydávám do
        lesů a hor.
      </div>
      <SocialMediaLinks class="mb-5"></SocialMediaLinks>
    </div>

    <!-- <div class="area mb-5">
      <div class="h2 mb-3">Schopnosti</div>
      <ul class="skill-list">
        <li>
          <span class="skill-name">.NET</span>
        </li>
        <li>
          <span class="skill-name">Vue.js</span>
        </li>
        <li>
          <span class="skill-name">XXX</span>
        </li>
      </ul>
    </div>

    <div class="area mb-5">
      <div class="h2 mb-3">Zkušenosti</div>
      <ul class="skill-list">
        <li class="skill"><span class="skill-name">Programátor</span>, VDT technology</li>
        <li class="skill"><span class="skill-name">IT Tester</span>, Česká pojišťovna</li>
        <li class="skill"><span class="skill-name">IT specialista HelpDesk</span>, ComPlus</li>
      </ul>
    </div>

    <div class="h2 mb-3">Vzdělání</div>
    <ul class="skill-list">
      <li>
        <span class="skill-name"
          >Gymnázium a střední odborná škola dr. Václava Šmejkala</span
        >
      </li>
      <li>
        <span class="skill-name">Česká zemědělská univerzita</span>
      </li>
    </ul> -->
  </div>
</template>

<script>
import SocialMediaLinks from "../components/SocialMediaLinks";

export default {
  name: "Home",
  components: {
    SocialMediaLinks,
  },
  data() {
    return {
      skillHidden: true
    };
  },
  methods: {
    redirect(link, target = "_blank") {
      window.open(link, target);
    },
  },
};
</script>

<style scoped>

.container-s {
  max-width: 700px;
  margin: 0 auto;
}

.photo {
  height: 300px;
  width: 300px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}

.title {
  text-align: center;
}

.desc {
  /* max-width: 620px; */
  margin: 0 auto;
  font-size: 1.5rem;
  text-align: left;
}

.skill-name {
  font-weight: 600;
}

.skill {
  transition: opacity 0.2s ease-in, height 1s ease;
  height: 1.5rem;
  font-size: 1.5rem;
}

.skill-hidden {
  /* display: none; */
  opacity: 0;
  height: 0;
  /* width: 0; */
}

.skill-list {
}
</style>