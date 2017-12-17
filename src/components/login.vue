<template>
  <div>
    <h2>Login</h2>
    <input type="number" placeholder="phone Number" v-model="phNo"/><br>
    <input placeholder="password" v-model="password"/><br>
    <button @click="login">Login</button>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data(){
      return{
        phNo: '',
        password: ''
      }
    },
    methods:{
      login(){
        let vm = this
        let countryCode = '+91' //india
        let email = countryCode + this.phNo + '@domainName.com'
        let password = this.password
        //
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
          //route to home on success !
          vm.$router.push({path:'/home'})
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          let errMsg = error.message.toLowerCase()
          while(errMsg.indexOf('email') != -1){
            errMsg = errMsg.replace("email address", "phone number");
          }
          //
          alert('Error: ' + errMsg)
        });
      }
    }
  }
</script>
