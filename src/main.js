
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		API_KEY: '',
		endpoints: {
			search: 'http://api.giphy.com/v1/gifs/search',
			trending: 'http://api.giphy.com/v1/gifs/trending',
			translate: 'http://api.giphy.com/v1/gifs/translate',
			random: 'http://api.giphy.com/v1/gifs/random',
		}
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

/* eslint-disable no-new vue fiel created*/