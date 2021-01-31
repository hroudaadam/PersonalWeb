<template>
  <div class="detail-container" v-if="post">
    <PageHeader>
      {{post.title}}
    </PageHeader>
    <div class="ql-editor" v-html="post.content">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PageHeader from "@/components/PageHeader";

export default {
  name: "PostDetail",
  components: {
    PageHeader
  },
  props: {
    id: Number,
  },
  data() {
    return {
      post: null
    };
  },
  computed: {
    ...mapGetters(["getPostById"])
  },
  methods: {
    getPost() {
      this.post = this.getPostById(this.id);
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

