import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router';
import ProductsList from '@/components/ProductsList.vue';
import LoginForm from '@/components/LoginForm.vue';
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import CreateProduct from "@/components/CreateProduct";
import NotFound from "@/components/NotFound";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import EditProduct from "@/components/EditProduct";
import Logout from "@/components/Logout";
import Navbar from "@/components/Navbar";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false
var Token = localStorage.getItem('Access_token')
const router = new VueRouter({
  routes: [
    {path: '/login', component: LoginForm},
    {path: '/', component: LoginForm},
    {path: '/list', component: ProductsList},
    {path: '/navbar', component: Navbar},
    {path: '/create', component: CreateProduct},
    {path: '/logout', component: Logout},
    {path: '/edit/:id', component: EditProduct},
    {path: '*', component: NotFound},
  ],
  mode: 'history'
});


// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
//   const currentUser = '';
//
//   if (requiresAuth && !currentUser) {
//     localStorage.setItem('redirectPath', to.path);
//     next('/login');
//   } else if (requiresAuth && currentUser) {
//     next();
//   } else {
//     next();
//   }
// });
// this.$auth.redirect();
Vue.mixin({
  data: function() {
    return {
      get TOKEN() {
        return Token;
      },
      get API_URL() {
        return "http://localhost/Api_Vue/public/";
      }
    }
  }
})
new Vue({

  render: h => h(App),
  router
}).$mount('#app')
