<template>
  <div class="posts">
    <h2 class="posts__title header__2 header--center">Příspěvky</h2>
    <div class="posts__list">
      <PostListItem
        v-bind:key="post.id"
        v-for="post in posts"
        v-bind:post="post"
      ></PostListItem>
    </div>
  </div>
</template>

<script>
import PostListItem from '@/components/PostListItem';

export default {
  name: "Posts",
  components: {
    PostListItem
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Jizerské a Lužické hory 2. 7. - 6. 7. 2016",
        },
        {
          id: 2,
          title: "Javorníky 27. 7. - 31. 7. 2016",
        },
        {
          id: 3,
          title: "Španělsko 26. 8. - 3. 9. 2016",
        },
        {
          id: 4,
          title: "Vánoční akademie 21. 12. 2016",
        },
        {
          id: 5,
          title: "Test",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>