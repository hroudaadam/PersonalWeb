<template>
  <router-link to="Login">
    <div class="posts__item">
      <img
        class="posts__item-image"
        src="@/assets/images/train.png"
        alt=""
      />
      <h3 class="posts__item-title header__3">
        {{ post.title }}
      </h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PostListItem",
  components: {},
  props: {
    post: Object,
  },
  methods: {},
};
</script>

<style>
.posts__item {
    display: flex;
    padding: 8px;

    border-style: solid;
    border-width: 1px;
    border-color: #cccccc;
}

.posts__item-image {
    margin: 0 25px 0 0;
}

.posts__item-title {
    margin: 15px 0 0 0;
}
</style>