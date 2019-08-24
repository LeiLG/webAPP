<template>
  <div id="app">
    <!--//头部内容-->
  <mt-header title="简单管理系统"></mt-header>
   <!--<router-view></router-view>-->

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" ></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" >

    </router-view>



  </div>
</template>

<script>
  import MtButton from "../node_modules/mint-ui/packages/button/src/button";
  import MtHeader from "../node_modules/mint-ui/packages/header/src/header";
export default {
  components: {
    MtHeader,
    MtButton},
  data(){
        return{

        txte:'hello',

        }
    },
  created(){

  },
  methods:{

  }

}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

</style>
