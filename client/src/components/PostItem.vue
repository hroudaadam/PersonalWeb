<template>
  <div
    class="post-item"
    v-on:click="
      $router.push({ name: 'PostDetail', params: { postId: post.postId } })
    "
  >
    <div>
      <div class="title">
        {{ post.title }}
      </div>
      <div class="author">Autor: Adam</div>
    </div>
    <div>
      <div class="date">25. 1. 2021</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
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
.post-item {
  color: var(--color-b);
  cursor: pointer;
  border-style: solid;
  border-width: 0.5px;
  border-color: var(--color-lg);
  border-bottom-color: transparent;
  border-bottom-width: 0;
  padding: 20px 15px;

  /* aby text-container zabíral plnou výšku */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  transition: background-color 0.3s ease-in;
}

.post-item:last-of-type {
  border-bottom-color: var(--color-lg);
  border-bottom-width: 0.5px;
}

.post-item:hover {
  background-color: var(--color-lg);
}

.title {
  color: var(--black);
  font-size: 1.4em;
}

.author {
    color: var(--color-dg);
    font-size: 0.9rem;

    margin: 5px 0 0 0;
}

.date {
    color: var(--color-dg);
    font-size: 1rem;
}

</style>
