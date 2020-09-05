<template>
  <div class="Posts">
    <PageHeader v-bind:title="'Příspěvky'">
        <b-button variant="info" :to="{name: 'PostCreate'}">Přidat nový</b-button>
    </PageHeader>
    <b-list-group>
      <PostListItem v-bind:post="post" v-bind:key="post.postId" v-for="post in posts"></PostListItem>
    </b-list-group>
  </div>
</template>

<script>
import apiService from "../helpers/apiService";
import PostListItem from "../components/PostListItem";
import PageHeader from "../components/PageHeader";

export default {
  name: "Posts",
  components: {
    PostListItem,
    PageHeader
  },
  data() {
    return {
      posts: null,
      errorMsg: null,
    };
  },
  methods: {
    getPosts() {
      this.posts = null;
      this.errorMsg = null;

      apiService
        .get("/posts")
        .then((response) => {
          this.posts = response;
        })
        .catch((error) => {
          this.errorMsg = error.message;
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>