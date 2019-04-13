<template lang="pug">
    .page-home
        HelloWorld
        .wrap
            router-link(to="/addbook") Go To AddBook(資料寫入與刪除練習) 
        button(@click="logout") Logout
</template>

<script>
import firebase from "firebase"
import HelloWorld from "@/components/HelloWorld"

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
