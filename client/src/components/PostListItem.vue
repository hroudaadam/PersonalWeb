<template>
      <b-list-group-item :to="{name: 'PostDetail', params: {id: post.postId} }" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{post.title}}</h5>
        </div>

        <p
          class="mb-1"
        >{{post.content}}</p>

      </b-list-group-item>
</template>

<script>

export default {
  name: "PostListItem",
  components: {},
  props: {
      post: Object
  },
  methods: {
  }
};
</script>