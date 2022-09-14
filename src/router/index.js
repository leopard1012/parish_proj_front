import Vue from 'vue';
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding2.vue'
import ServiceAttendance from '../views/ServiceAttendance.vue'
import PastoralAttendance from '../components/PastoralAttendance.vue'
// import Login from '../views/LoginView'
// import GoogleLogin from '../views/GoogleLogin'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/attendance',
    name: 'ServiceAttendance',
    component: ServiceAttendance
  },
  {
    path: '/attendanceTest',
    name: 'PastoralAttendance',
    component: PastoralAttendance
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  // {
  //   path: '/googleLogin',
  //   name: 'GoogleLogin',
  //   component: GoogleLogin
  // }
]

const router = new VueRouter({
  // history: createWebHistory(process.env.BASE_URL),
  // routes
  mode: 'history',
  routes: routes
})

export default router
