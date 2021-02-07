<template>
  <div>
    <PageHeader>
      Příspěvky
      <template v-slot:button>
        <IconButton
          :icon="['far', 'plus-square']"
          size="xl"
          v-if="isLoggedIn"
          v-on:click="$router.push({ name: 'PostCreate' })"
        ></IconButton>
      </template>
    </PageHeader>

    <div class="posts-list">
      <PostItem
        v-bind:key="post.postId"
        v-for="post in posts"
        v-bind:post="post"
      ></PostItem>
    </div>
  </div>
</template>

<script>
import PostItem from "../components/PostItem";
import IconButton from "../components/IconButton";
import PageHeader from "../components/PageHeader";
import apiService from "../helpers/apiService";
import { mapGetters } from "vuex";

export default {
  name: "Posts",
  components: {
    PageHeader,
    PostItem,
    IconButton,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      this.posts = [];
      apiService
        .get("/posts")
        .then((res) => {
          this.posts = res;
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scoped>
.posts-list {
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
}

.new-post-button {
  display: inline-block;
  font-size: 1.8rem;
  padding: 0 5px;
  background-color: var(--white);
  border: none;
  margin: 0 5px;
}

.new-post-button:hover {
  outline: none;
  transform: scale(1.05);
}

.new-post-button:focus {
  outline: none;
}

@media screen and (min-width: 730px) and (max-width: 979px) {
  .posts-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 450px) and (max-width: 729px) {
  .posts-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 449px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>