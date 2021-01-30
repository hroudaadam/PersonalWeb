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
// import PostItem from "@/components/PostItem";
import PostTile from "@/components/PostTile";
import PageHeader from "@/components/PageHeader";

export default {
  name: "Posts",
  components: {
    // PostItem,
    PageHeader,
    PostTile,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Lužické hory 2. 7. - 6. 7. 2016",
          photo: "home2",
        },
        {
          id: 2,
          title: "Javorníky 27. 7. - 31. 7. 2016",
          photo: "home2",
        },
        {
          id: 3,
          title: "Španělsko 26. 8. - 3. 9. 2016",
          photo: "home3",
        },
        {
          id: 4,
          title: "Vánoční akademie 21. 12. 2016",
          photo: "home3",
        },
        {
          id: 5,
          title: "Test",
          photo: "home4",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
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