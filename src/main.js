import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'

import Home from './router/Home'
import Background from './router/Background'
import Projects from './router/Projects'
import Publications from './router/Publications'
import Other from './router/Other'
import Skills from './router/Skills'

// import some global styles
// import './styles/style.scss'

Vue.use(VueRouter)

const routes = [
  { path: '/home', alias: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/background', component: Background },
  { path: '/publications', component: Publications },
  { path: '/other', component: Other },
  { path: '/skills', component: Skills }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})