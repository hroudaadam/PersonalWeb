<template>
  <div name="PostCreate">
    <PageHeader v-bind:title="'Příspěvky'"></PageHeader>
    <b-card>
      <b-form @submit.prevent>
        <b-form-group id="input-group-1" label="Název:" label-for="input-1">
          <b-form-input id="input-1" v-model="title" type="text" placeholder="Název"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Text:" label-for="input-2">
          <b-form-textarea id="input-2" v-model="content" placeholder="Text" rows="5"></b-form-textarea>
        </b-form-group>

        <b-alert show variant="danger" v-if="!!this.errorMsg">{{this.errorMsg}}</b-alert>
        <b-button type="submit" v-on:click="createGroup" variant="primary">Vytvořit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../router";
import apiSevice from "../helpers/apiService";
import PageHeader from "../components/PageHeader";
export default {
  name: "PostCreate",
  components: {
    PageHeader
  },
  data() {
    return {
      errorMsg: null,
      title: null,
      content: null
    };
  },
  methods: {
    createGroup() {
      this.errorMsg = null;
      var body = {
        title: this.title,
        content: this.content
      };
      apiSevice
        .post("/posts", body)
        .then(() => {
          router.push({name: 'Travel'})
        })
        .catch((error) => {
          this.errorMsg = error.message;
        });
    },
  },
  computed: {
    ...mapGetters("authentication", ["isAdminLogged"]),
  },
  mounted() {
    if (!this.isAdminLogged) {
      router.push("/login");
    }
  },
};
</script>