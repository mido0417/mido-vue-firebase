import Vue from 'vue'
import firebase from "firebase"
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddBook from '@/pages/AddBook'
import Login from '@/pages/login'
import Home from '@/pages/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'AddBook',
    }, 
    // {
    //   path: '*',
    //   redirect: '/',
    // },
     {
      path: '/home',
      name: 'home',
      component: Home,
      // meta: {
      //   requiresAuth: true,
      // }
    },

    {
      path: '/addbook',
      name: 'AddBook',
      component: AddBook,
      // meta: {
      //   requiresAuth: true,
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth && !currentUser) next('login');
//   else if (!requiresAuth && currentUser) next('home');
//   else next();
// });

export default router;
