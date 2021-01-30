<template>
  <div>
    <PageHeader> Nový příspěvek </PageHeader>
    <div class="form-container">
      <div class="label">Nadpis</div>
      <input class="title-editor" v-model="title" placeholder="" />
      <div class="label">Obsah</div>
      <div class="content-editor">
        <quillEditor
          style="height: 80%"
          v-model="content"
          :options="contentEditorOption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  name: "PostCreate",
  components: {
    PageHeader,
    quillEditor,
  },
  data() {
    return {
      content: null,
      title: null,
      contentEditorOption: {
        modules: {
          toolbar: [
            [
              "bold",
              "italic",
              "underline",
              "link",
              "image",
              "video",
              "code-block",
            ],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        },
        placeholder: "",
        theme: "snow",
      },
    };
  },
  methods: {},
  computed: {
    ...mapGetters("authentication", ["isAdminLogged"]),
  },
  mounted() {},
};
</script>

<style scoped>

.label {
  font-size: 0.9rem;
  color: var(--color-1);
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.content-editor {
  height: 300px;
}

.title-editor {
  border-color: #cccccc;
  border-width: 1px;
  border-style: solid;

  font-size: 1rem;

  margin: 0 0 10px 0;
  padding: 15px 12px;
  width: 100%;
}

.title-editor:focus {
  outline: none;
}
</style>

<style>
.ql-editor {
  font-family: var(--font-1) !important;
  font-size: 1rem !important;
  color: var(--black) !important;
}
</style>