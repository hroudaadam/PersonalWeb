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