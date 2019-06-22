import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'  //相对路径
import commentVue from '../components/comment.vue'  
Vue.component('commentVue', commentVue);

Vue.use(Router)


export default new Router({
	routes:[
		{path:'/',redirect:{name:'index'}},
		 {name:'index',path:'/index',component:index}
	]
	 
})
