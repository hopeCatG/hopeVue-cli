import Vue from 'vue'
import router from './router'

import App from './app.vue'

new Vue({
	el:'#app',
	router,
	render: creater => creater(App)
})