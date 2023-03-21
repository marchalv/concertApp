import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import UserHomePage from '../views/UserHomePage.vue'
import AdminHomePage from '../views/AdminHomePage.vue'
import AddConcert from '../views/AddConcert.vue'
import Concerts from '../views/ConcertsList.vue'
import UsersList from '../views/UsersList.vue'
import CategoriesList from '../views/CategoriesList.vue'
import ConcertDetails from '../views/ConcertDetails.vue'
import AddCategory from '../views/AddCategory.vue'
import AddUser from '../views/AddUser.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/user',
    name: 'UserHome',
    component: UserHomePage
  },
  {
    path: '/admin',
    name: 'AdminHome',
    component: AdminHomePage
  },
  {
    path: '/admin/addconcert',
    name: 'AddConcert',
    component: AddConcert
  },
  {
    path: '/admin/concerts',
    name: 'Concerts',
    component: Concerts
  },
  {
    path: '/admin/users',
    name: 'UsersList',
    component: UsersList
  },
  {
    path: '/admin/categories',
    name: 'CategoriesList',
    component: CategoriesList
  },
  {
    path: '/admin/concerts/:id',
    name: 'ConcertDetails',
    component: ConcertDetails
  },
  {
    path: '/admin/addcategory',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/adduser',
    name: 'AddUser',
    component: AddUser
  },
  // {
  //   path: '/user/addconcert',
  //   name: 'AddConcert',
  //   component: AddConcert
  // },
  // {
  //   path: '/user/concerts',
  //   name: 'Concerts',
  //   component: Concerts
  // },
  // {
  //   path: '/user/concerts/:id',
  //   name: 'ConcertDetails',
  //   component: ConcertDetails
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
