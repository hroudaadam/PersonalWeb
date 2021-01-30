<template>
  <div class="post-tile">
    <img
      class="photo"
      :src="require(`@/assets/images/${post.photo}.png`)"
      alt=""
    />
    <div class="text-container">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PostTile",
  components: {},
  props: {
    post: Object,
  },
  data() {
    return {
      uriPre: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.post-tile {
  background-color: var(--color-5);
  border-radius: 7px;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-color: #cacaca;
}

.post-tile:hover {
  box-shadow: 1.5px 1.5px rgb(207, 207, 207);
}

.photo {
  width: 100%;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
}

.text-container {
  color: var(--black);
  text-align: center;
  font-size: 1em;
  padding: 5px 4px;
}
</style>