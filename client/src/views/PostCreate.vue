<template>
  <div>
    <PageHeader> Nový příspěvek </PageHeader>
    <div class="form-container">
      <div class="label">Nadpis</div>
      <input class="input" v-model="post.title" placeholder="" />
      <div class="label">Kategorie</div>
      <select class="input">
        <option value="travel">Cestování</option>
        <option value="personal">Osobní</option>
      </select>
      <div class="label">Obsah</div>
      <div class="content-editor">
        <quillEditor
          ref="myQuillEditor"
          v-model="post.content"
          :options="contentEditorOption"
          tabindex="-1"
        />
      </div>
      <Button class="mr-2" v-on:click="selectPreview()">Vybrat náhled</Button>
      <Button class="mr-2" v-on:click="createPost()">Odeslat</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
import resizebase64  from "resize-base64";
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
              image: this.imageHandler
            },
          },
        },
        placeholder: "",
        theme: "snow",
      },
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    createPost() {
      apiService.post("/posts", this.post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });

      this.post.content = this.$refs.myQuillEditor.quill.root.innerHTML.trim();
      this.post.preview = resizebase64(this.post.preview, 300, 300);
      this.addPost(this.post);

      this.$router.push({ name: "Posts" });
    },
    selectPreview() {
      console.log(this.$refs.myQuillEditor.quill.root.innerHTML.trim());
    },
    imageHandler() {
      var quill = this.$refs.myQuillEditor.quill;
      var component = this;
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.hidden = true;
      input.onchange = async () => {
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = function () {
          var range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', reader.result);
          component.post.preview = reader.result;
        };
        reader.onerror = function (error) {
          console.log("Error: ", error);
        };
      };
      input.click();
      input.remove();
    }
  },
  computed: {
    ...mapGetters("authentication", ["isAdminLogged"]),
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

.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.content-editor {
  height: calc(100vh - 300px);
  max-height: 700px;
  margin: 0 0 10px 0;
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

select {
  outline: none;
  padding: 5px;
  border: none;
}

@media screen and (max-height: 550px) {
  .content-editor {
    height: 250px;
    margin: 0 0 10px 0;
  }
}
</style>

<style>
</style>