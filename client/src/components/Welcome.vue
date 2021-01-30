<template>
  <div class="welcome">
    <img class="photo" src="../assets/images/profile.jpg" alt="" />
    <p class="title">Vítejte na mém webu! Jmenuji se Adam Hrouda.</p>
    <div class="text-container">
      <p class="desc">
        Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel
        sapien. Fusce aliquam vestibulum ipsum. Etiam neque. Proin in tellus sit
        amet nibh dignissim sagittis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos hymenaeos. Proin pede metus,
        vulputate nec, fermentum fringilla, vehicula vitae, justo. Quisque
        porta. Mauris metus.
      </p>
    </div>
    <div>
      <button class="link-button">
        <font-awesome-icon :icon="['fab', 'github']" />
      </button>
      <button class="link-button">
        <font-awesome-icon :icon="['fab', 'linkedin-in']" />
      </button>
      <button class="link-button">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </button>
      <button class="link-button">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </button>
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
  font-size: 2em;
}

.desc {
  color: var(--color-2);
}

.text-container {
  text-align: center;
  max-width: 690px;
}

.link-button {
  font-size: 1.8em;
  padding: 0 5px;
  background-color: var(--white);
  border: none;
  margin: 0 5px;
}

.link-button:focus {
  outline: none;
}
</style>