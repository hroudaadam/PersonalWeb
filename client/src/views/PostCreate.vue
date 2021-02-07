<template>
  <div>
    <PageHeader> Nový příspěvek </PageHeader>
    <div class="new-post-form body-smaller">
      <div class="label">Nadpis</div>
      <input class="input" v-model="post.title" placeholder="" />
      <!-- <div class="label">Kategorie</div>
      <select class="input">
        <option value="travel">Cestování</option>
        <option value="personal">Osobní</option>
      </select> -->
      <div class="label">Obsah</div>
      <quillEditor
        ref="myQuillEditor"
        v-model="post.content"
        :options="contentEditorOption"
      />
      <div>
        <Button class="mr-2" v-on:click="test()">Test</Button>
        <Button class="mr-2" v-on:click="createPost()">Odeslat</Button>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import apiService from "@/helpers/apiService";

export default {
  name: "PostCreate",
  components: {
    PageHeader,
    quillEditor,
    Button,
  },
  data() {
    return {
      post: {
        title: null,
        content: null,
        preview: null,
      },
      contentEditorOption: {
        modules: {
          toolbar: {
            container: [
              [
                "bold",
                "italic",
                "underline",
                "link",
                "image",
                "video",
                "code-block",
              ],
              [{ list: "ordered" }, { list: "bullet" }],
            ],
            handlers: {
              // image: this.imageHandler,
            },
          },
        },
        placeholder: "",
        theme: "snow",
      },
    };
  },
  methods: {
    createPost() {
      this.post.content = this.$refs.myQuillEditor.quill.root.innerHTML.trim();
      this.post.preview = "test"

      apiService
        .post("/posts", this.post)
        .then(() => {
          this.$router.push({ name: "Posts" });
        })
        .catch(() => {});
    },
    test() {
      console.log(this.$refs.myQuillEditor.quill.root.innerHTML.trim());
    },
    // imageHandler() {
    //   var quill = this.$refs.myQuillEditor.quill;
    //   var component = this;
    //   const input = document.createElement("input");
    //   input.setAttribute("type", "file");
    //   input.setAttribute("accept", "image/*");
    //   input.hidden = true;
    //   input.onchange = async () => {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(input.files[0]);
    //     reader.onload = function () {
    //       var range = quill.getSelection();
    //       quill.insertEmbed(range.index, "image", reader.result);
    //       component.post.preview = reader.result;
    //     };
    //     reader.onerror = function (error) {
    //       console.log("Error: ", error);
    //     };
    //   };
    //   input.click();
    //   input.remove();
    // },
  },
  mounted() {},
};
</script>

<style scoped>

.label {
  font-size: 0.9rem;
  margin: 0 0 2px 0;
  color: var(--color-1);
}

.input {
  border-color: #cccccc;
  border-width: 1px;
  border-style: solid;

  box-sizing: border-box;
  font-size: 1rem;

  margin: 0 0 10px 0;
  padding: 15px 12px;
  width: 100%;
}

.new-post-form {
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
}

/* wrapper */
.quill-editor {
  min-height: 300px;
  flex: 1;
  display: flex;
  flex-direction: column;

  margin: 0 0 10px 0;
}



select {
  outline: none;
  padding: 5px;
  border: none;
}
</style>

<style>

  /* editor samotný */
.ql-container {
  height: 100%;
  flex: 1;
  overflow-y: auto;
  width: 100%;
}
</style>