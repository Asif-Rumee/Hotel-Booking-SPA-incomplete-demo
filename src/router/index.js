import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Booking from '../components/Booking.vue';
import HotelsList from '../components/HotelsList.vue';


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: HotelsList, name: 'home' },
    { path: '/booking', component: Booking, name: 'Booking', }
  ]
})
