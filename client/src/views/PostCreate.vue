<template>
  <div>
    <h2 class="header__2 header--center">Nový příspěvek</h2>
    <form>
      <label for="post-title">Title:</label><br />
      <input type="text" id="post-title" name="title" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" />
    </form>

    <RichTextEditor></RichTextEditor>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RichTextEditor from "../components/RichTextEditor";

export default {
  name: "PostCreate",
  components: {
    RichTextEditor
  },
  data() {
    return {
      title: null,
      content: null,
    };
  },
  methods: {},
  computed: {
    ...mapGetters("authentication", ["isAdminLogged"]),
  },
  mounted() {},
};
</script>