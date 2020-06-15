// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.itemlist =  [
  {
    id: 1,
    titel: "Artikel1",
    name: "Name1",
    description: "Consectetur adipiscing elit, sed do eiusmod",
    price: 12.99,
    favorite: "favorite_border"
  },
  {
    id: 2,
    titel: "Artikel2",
    name: "Name2",
    description: "Pellentesque diam volutpat commodo sed",
    price: 14.89,
    favorite: "favorite_border"
  },
  {
    id: 3,
    titel: "Artikel3",
    name: "Name3",
    description: "Tempor incididunt ut labore et dolore magna aliqua",
    price: 29.99,
    favorite: "favorite_border"
  },
  {
    id: 4,
    titel: "Artikel4",
    name: "Name4",
    description: "In tellus integer feugiat scelerisque varius",
    price: 79.99,
    favorite: "favorite_border"
  },
  {
    id: 5,
    titel: "Artikel5",
    name: "Name5",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    price: 99.95,
    favorite: "favorite_border"
  }
]


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
