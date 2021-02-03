<template>
  <div>
    <PageHeader>
      Příspěvky
      <template v-slot:button>
        <router-link :to="{ name: 'PostCreate' }" class="link">
          <font-awesome-icon :icon="['far', 'plus-square']" />
        </router-link>
      </template>
    </PageHeader>

    <div class="posts-grid">
      <PostTile
        v-bind:key="post.id"
        v-for="post in posts"
        v-bind:post="post"
      ></PostTile>
    </div>
  </div>
</template>

<script>
import PostTile from "../components/PostTile";
import PageHeader from "../components/PageHeader";
import apiService from "../helpers/apiService";

export default {
  name: "Posts",
  components: {
    PageHeader,
    PostTile,
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    getPosts() {
      this.posts = [];
      apiService.get("/posts")
      .then((res) => {
        this.posts = res;
      })
      .catch(() => {});
    }
  },
  mounted() {
    this.getPosts();
  },
  computed: {
  },
};
</script>

<style scoped>
.posts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
}

.link {
  display: inline-block;
  font-size: 1.8rem;
  padding: 0 5px;
  background-color: var(--white);
  border: none;
  margin: 0 5px;
}

.link:hover {
  outline: none;
  transform: scale(1.1);
}

.link:focus {
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