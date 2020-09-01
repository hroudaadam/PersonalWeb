<template>
  <div class="postDetail">
      {{post.title}}
      {{post.content}}
  </div>
</template>

<script>
import apiService from '../helpers/apiService';

export default {
  name: "PostDetail",
  components: {

  },
  props: {
      id: Number
  },
  data() {
      return {
          post: null,
          errorMsg: null
      }
  },
  methods: {
      getPost() {
          this.post = null;
          this.errorMsg = null;

          apiService.get('/posts/' + this.id.toString())
          .then( response => {
              this.post = response;
          })
          .catch( error => {
              this.errorMsg = error.message;
          });
      },
  },
  mounted() {
      this.getPost();
  }
};
</script>