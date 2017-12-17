import Vue from 'vue'
import Router from 'vue-router'

//signup
import signup from '@/components/signup'
//login
import login from '@/components/login'
//set Password
import setPassword from '@/components/setPassword'
//home
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    { path: '/', name: 'Login', component: login },
    { path: '/signup', name: 'Signup', component: signup},
    { path: '/setPassword', name: 'Set Password', component: setPassword},
    { path: '/home', name: 'Home', component: home}
  ]
})
