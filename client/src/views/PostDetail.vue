<template>
  <div class="detail-container" v-if="post">
    <PageHeader>
      {{ post.title }}
    </PageHeader>
    <div class="ql-editor" v-html="post.content"></div>
  </div>
</template>

<script>
import apiService from "../helpers/apiService";
import PageHeader from "@/components/PageHeader";

export default {
  name: "PostDetail",
  components: {
    PageHeader,
  },
  props: {
    postId: Number,
  },
  data() {
    return {
      post: null,
    };
  },
  methods: {
    getPost() {
      this.post = null;
      apiService
        .get("/posts/" + this.postId.toString())
        .then((res) => {
          this.post = res;
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>

