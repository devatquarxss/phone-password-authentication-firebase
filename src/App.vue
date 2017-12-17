<template>
  <div id="app">
    <h3 v-if="user != null">
      You are Logged In By Phone No - {{user.phoneNumber}}
      <button @click="signout()">signout</button>
    </h3>
    <h3 v-else>You are Not Logged In ! <br>
      <router-link to="/">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </h3>
    <router-view/>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'app',
    props:['user'],
    methods:{
      signout(){
        firebase.auth().signOut();
        this.$router.push({path:'/'})
        window.location.reload(); //reload on signout !
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
