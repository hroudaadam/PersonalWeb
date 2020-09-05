<template>
  <div class="postDetail">
    <div v-if="!!this.post">
      <b-card no-body>
        <b-card-body>
          <div class="d-flex w-100 justify-content-between">
            <b-card-title>{{post.title}}</b-card-title>
          </div>
          <b-card-sub-title class="mb-2">...</b-card-sub-title>

          <b-card-text v-html="post.content"></b-card-text>
        </b-card-body>
      </b-card>
    </div>
    <b-alert show variant="danger" v-if="errorMsg" v-html="errorMsg"></b-alert>
  </div>
</template>

<script>
import apiService from "../helpers/apiService";

export default {
  name: "PostDetail",
  components: {},
  props: {
    id: Number,
  },
  data() {
    return {
      post: null,
      errorMsg: null,
    };
  },
  methods: {
    getPost() {
      this.post = null;
      this.errorMsg = null;

      apiService
        .get("/posts/" + this.id.toString())
        .then((response) => {
          this.post = response;
        })
        .catch((error) => {
          this.errorMsg = error.message;
        });
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>