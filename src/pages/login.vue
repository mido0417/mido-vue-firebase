<template lang="pug">
    .page-login
        h3 login
        input(type='text' v-model="email")
        input(type='password' v-model="password")
        button(@click="login") login
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("err");
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
