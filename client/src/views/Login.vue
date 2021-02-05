<template>
  <div class="login-form">
    <PageHeader>Přihlášení</PageHeader>
    <div class="label">Email</div>
    <input class="input" v-model="user.email" placeholder="" />

    <div class="label">Heslo</div>
    <input class="input" type="password" v-model="user.password" placeholder="" />
    <Button v-on:click="login()" block>Přihlásit</Button>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import apiService from "../helpers/apiService";
import {mapActions} from "vuex";

export default {
  name: "Login",
  components: {
    PageHeader,
    Button
  },
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
      ...mapActions(["storeLogin"]),
      login() {
          apiService.post("/login", this.user)
          .then((res) => {
              this.storeLogin(res);
              this.$router.push({name: "Home"});
          })
          .catch(() => {});
      }
  },
};
</script>

<style scoped>
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

.label {
  font-size: 0.9rem;
  margin: 0 0 2px 0;
  color: var(--color-1);
}

.login-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>