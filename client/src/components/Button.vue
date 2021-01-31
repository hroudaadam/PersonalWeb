<template>
    <button class="button" v-on:click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: "Button",
  components: {},
  props: {
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
.button {
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 10px 25px;
    border-radius: 3px;
    background-color: var(--color-4);
    color: var(--color-w);

    /* width: 200px;
    height: 40px; */
}

.button:focus {
    outline: none;
}

.button:active {
    transform: scale(0.99);
}
</style>