// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)
//引入Axios
import Axios from 'axios'
Vue.prototype.$Axios=Axios
Axios.defaults.baseURL='http://116.62.108.19/'
// Axios.defaults.baseURL='http://localhost:3002/'
//设置拦截器
Axios.interceptors.request.use(function (config) {
    Mint.Indicator.open({
      text:'加载中...',
      spinnerType:'fading-circle'
    })
  return config
})
Axios.interceptors.response.use(function (config) {
      Mint.Indicator.close()
      // console.log('aa')
      return config
})


//引入moment
import moment from 'moment'
//引入vue-preview
import Vuepreview from 'vue-preview'
Vue.use(Vuepreview)
//引入qs
import qs from 'qs'
Vue.prototype.$qs=qs
//引入store
import store from './vuex/store'
Vue.prototype.$store=store
//引入jsonp
import Jsonp from 'vue-jsonp'
Vue.use(Jsonp)
Vue.prototype.mywinde = window





//创建时间格式过滤器
Vue.filter('dateS',function (value) {
      return moment(value).format('YYYY-MM-DD')
})
// 全局头（header）组件声明
import navVue from './components/compont/navBar.vue'
Vue.component('navVue',navVue)
import Floot from './components/floot.vue'
Vue.component('floVue',Floot)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
