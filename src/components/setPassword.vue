<template>
  <div>
    <h2>Set Password</h2>
    <input placeholder="Enter Password" v-model="password"/><br>
    <input placeholder="Re-enter Password" v-model="password_2"/><br>
    <button @click="setPassword">Set Password</button>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data(){
      return {
        password : '',
        password_2 : ''
      }
    },
    methods:{
      setPassword(){
        if(this.password != this.password_2){
          alert('Password did not match !')
        }else if(this.password.length != 6){
          alert('Password too small ! Lenght of Password should be atleast 6 !')
        }else{
          let vm = this
          var user = firebase.auth().currentUser;
          //
          let newEmail = firebase.auth().currentUser.phoneNumber + '@domainName.com'
          let newPassword = this.password
          //
          user.updateEmail(newEmail).then(function() {
            user.updatePassword(newPassword).then(function() {
              alert('//Password Set successfully ! You can now Login with PHONE & PASSWORD !')
              vm.$router.push('/home')  //route to app home !
            }).catch(function(error) {
              alert('Error :' + error.message)
            });
          }).catch(function(error) {
            //Logout if session expires !
            if(error.code == 'auth/requires-recent-login'){
              alert("Your Session has been Expired to Set Password ! Please try again !")
              //
              vm.signout()
            }
          });
        }
      },
      signout(){
        firebase.auth().signOut();
        this.$router.push({path:'/'})
        window.location.reload();  //reload on signout !
      }
    }
  }
</script>
