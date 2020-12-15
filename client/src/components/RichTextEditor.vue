<template>
  <div>
      <div class="toolbox">
          <button class="toolbox__item">B</button>
          <button class="toolbox__item">U</button>
          <button class="toolbox__item">I</button>
      </div>
      <div class="editor__output" contenteditable="true">
          Text
      </div>
  </div>
</template>

<script>
export default {
  name: "RichTextEditor",
  components: {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
    .toolbox__item {
        width: 30px;
        height: 30px;
    }

    .toolbox {
        margin: 10px 0 0 0;
    }

    .editor__output {
        border: 1px solid black;
        padding: 7px;
    }
</style>