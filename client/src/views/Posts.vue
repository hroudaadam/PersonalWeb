<template>
  <div>
    <PageHeader>
      Příspěvky
    </PageHeader>

    <div class="posts__list">
      <PostItem
        v-bind:key="post.id"
        v-for="post in posts"
        v-bind:post="post"
      ></PostItem>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
import PageHeader from "@/components/PageHeader";

export default {
  name: "Posts",
  components: {
    PostItem,
    PageHeader
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