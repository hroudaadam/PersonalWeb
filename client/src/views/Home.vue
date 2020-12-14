<template>
  <div>
    <div class="welcome-header">
      <img class="welcome-header__photo" src="../assets/images/home1.png" alt="">
        <div class="welcome-header__text"> 
          <p class="welcome-header__title">
          Zdravím! Jmenuji se Adam Hrouda a jsem programátor.
        </p>
        <p class="welcome-header__desc">
          Donec iaculis gravida nulla. Pellentesque pretium lectus id turpis. Duis pulvinar. Morbi scelerisque luctus velit. Mauris elementum mauris vitae tortor.
        </p>
        </div>         
    </div>

    <div class="recent-posts">
      <h2 class="recent-posts__title header__2 header--center">Nedávné příspěvky</h2>
      <div class="recent-posts__list posts-list">
        <PostListItem v-bind:key="post.id" v-for="post in posts" v-bind:post="post"></PostListItem>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostListItem from '@/components/PostListItem';

export default {
  name: "Home",
  components: {
    PostListItem
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Jizerské a Lužické hory 2. 7. - 6. 7. 2016"
        },
        {
          id: 2,
          title: "Javorníky 27. 7. - 31. 7. 2016"
        },
        {
          id: 3,
          title: "Španělsko 26. 8. - 3. 9. 2016"
        },
        {
          id: 4,
          title: "Vánoční akademie 21. 12. 2016"
        },
      ]
    }
  },
};
</script>

<style>

</style>
