<template lang="pug">
    .page-login
        h3 login
        input(type='text' v-model="email")
        input(type='password' v-model="password")
        button(@click="login") login
</template>

<script>
import firebase from "firebase"

export default {
    name: 'login',
    data(){
        return{
            email:'',
            password:'',
        };
    },
    methods: {
        login:function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                function(user){
                    alert('login');
                },
                function(err){
                    alert('err');
                }
            )
            this.$router.replace('home')
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
