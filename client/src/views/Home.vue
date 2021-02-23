<template>
  <div class="content-m">
    <div class="photo-wrapper">
      <img
        class="photo mb-5"
        src="../assets/images/profile1.jpg"
        v-bind:class="modeSwitched ? 'photo--deactive' : 'photo--active'"
        alt=""
        v-on:click="switchMode"
      />
      <img
        class="photo mb-5"
        src="../assets/images/profile2.jpg"
        v-bind:class="!modeSwitched ? 'photo--deactive' : 'photo--active'"
        alt=""
        v-on:click="switchMode"
      />
    </div>
    <ProfessionalInfo v-if="modeSwitched" class="info-content"></ProfessionalInfo>
    <PersonalInfo v-else></PersonalInfo>
  </div>
</template>

<script>
import ProfessionalInfo from "../components/ProfessionalInfo";
import PersonalInfo from "../components/PersonalInfo";

export default {
  name: "Home",
  components: {
    PersonalInfo,
    ProfessionalInfo,
  },
  data() {
    return {
      modeSwitched: false,
    };
  },
  methods: {
    redirect(link, target = "_blank") {
      window.open(link, target);
    },
    switchMode() {
      this.modeSwitched = !this.modeSwitched;
    },
  },
};
</script>

<style scoped>
.info-content {
  opacity: 1;
  transition: opacity 2s;
}

.photo-wrapper {
  margin: 0 auto 0 auto;
  position: relative;
  height: 300px;
  width: 300px;
}

.photo {
  height: 300px;
  width: 300px;
  position: absolute;
  left: 0;

  border-radius: 50%;
  cursor: pointer;

  transition: transform 2s, opacity 0.5s 0.35s;
}

.photo--active {
  opacity: 1;
  transform: rotateY(0deg);
}

.photo--deactive {
  opacity: 0;
  transform: rotateY(180deg);
}
</style>

<style>
.title {
  font-size: 4.5rem;
  margin: 0 0 10px 0;
}

.desc {
  color: var(--color-2);
  text-align: left;
  font-size: 1.5rem;
}

.social-media-links {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>