<template>
  <router-link to="Login">
    <div class="post-list__item">
      <img
        class="post-list__item-image"
        src="@/assets/images/train.png"
        alt=""
      />
      <h3 class="post-list__item-title header__3">
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