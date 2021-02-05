<template>
    <button class="button" v-bind:class="[block ? 'block' : '']" v-on:click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: "Button",
  components: {},
  props: {
      block: Boolean
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
}

.button:focus {
    outline: none;
}

.block {
    width: 100%;
}

.button:active {
    transform: scale(0.99);
}
</style>