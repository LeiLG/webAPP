import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home.vue'
import Select from '@/components/select.vue'
import Vip from '@/components/vip.vue'
import Gouwu from '@/components/gouwu.vue'
import Newzx from '@/components/newzx.vue'
import news from '@/components/newvalue.vue'
import Photo from '@/components/photoshow/phoout.vue'
import Phoval from '@/components/photoshow/phoval.vue'
// import Header from '@/components/compont/header.vue'
import Floot from '@/components/floot.vue'
import Login from '@/components/user/login.vue'
import Zhuche from '@/components/user/zhuche.vue'
import Gwlist from '@/components/gw/gwlist.vue'
import Gwval from '@/components/gw/gwval.vue'
import  SelectVal from '@/components/select/selectval.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{name:'home'}
    },
    {
    path:'/home',
      name:'home',
      component:Home,
      mate:{
      showFloot:true
      }
    },{
    path:'/select',
      name:'select',
      component:Select

    },{
      path:'/vip',
      name:'vip',
      component:Vip

    },{
      path:'/gouwu',
      name:'gouwu',
      component:Gouwu

    },{
    path:'/newzx',
      name:'newzx',
      component:Newzx,
      mate:{
      showFloot:false
      }
    },{
    path:'/news',
      name:'news',
      component:news
    },{
    path:'/phoout',
      name:'phoout',
      component:Photo,
      meta:{
        keepAlive: true // 需要缓存
      }

    },{
    path:'/phoval',
      name:'phoval',
      component:Phoval
    }
    // ,{
    // path:'/header',
    //   name:'header',
    //   component:Header
    // }
    ,{
    path:'/floot',
      name:'floot',
      component:Floot,
      mate:{
      index:0,
        showFloot:true
      }
    },{
    path:'/login',
      name:'login',
      component:Login
    },{
    path:'/zhuche',
      name:'zhuche',
      component:Zhuche
    },{
    path:'/gwlist',
      name:'gwlist',
      component:Gwlist,
      meta:{
        keepAlive: true // 需要缓存
      }
    },{
    path:'/gwval',
      name:'gwval',
      component:Gwval

    },{
    path:'/selectval',
      name:'selectval',
      component:SelectVal
    }
  ]
})
