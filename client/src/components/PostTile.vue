<template>
  <div
    class="post-tile"
    v-on:click="$router.push({ name: 'PostDetail', params: { postId: post.id } })"
  >
      <img
        v-if="post.preview"
        class="photo"
        :src="post.preview"
        alt=""
      />
      <img
        v-else
        class="photo"
        :src="require(`@/assets/images/home2.png`)"
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
    return {};
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
  border-width: 0.5px;
  border-color: #cacaca;

  /* aby text-container zabíral plnou výšku */
  display: flex;
  flex-direction: column;
}

.post-tile:hover {
  transform: scale(1.02);
}

.photo {
  height: 200px;
  width: 100%;
  object-fit: cover; /* vyplnění obrázku */
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
}

.text-container {
  color: var(--black);
  text-align: center;
  font-size: 1em;
  padding: 10px 8px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>