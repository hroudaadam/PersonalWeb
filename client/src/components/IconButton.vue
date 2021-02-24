<template>
  <div
    class="icon-button"
    v-on:click="$emit('click')"
    v-bind:class="[getClass]"
  >
    <font-awesome-icon :icon="[icon[0], icon[1]]" />
  </div>
</template>

<script>
export default {
  name: "IconButton",
  components: {},
  props: {
    icon: Array,
    size: String,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    getClass() {
      switch (this.size) {
        case "l":
          return "l";
        case "xl":
          return "xl";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.icon-button {
  font-size: 1rem;
  transition: transform 0.2s ease-in;
}

.icon-button:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.s {
  font-size: 0.7rem;
}

.l {
  font-size: 1.3rem;
}

.xl {
  font-size: 2rem;
}
</style>