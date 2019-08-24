<template>
  <div>
    <mt-tabbar fixed  v-model="selected">
      <mt-tab-item id="tab1">
        首页
        <img slot="icon" src="../assets/img/icon/sy.png">
      </mt-tab-item>
      <mt-tab-item id="tab2">
        会员
        <img slot="icon" src="../assets/img/icon/icon_signal.png"/>
      </mt-tab-item>
      <mt-tab-item id="tab3">

        购物车
        <img slot="icon" src="../assets/img/icon/gwc.png">
      </mt-tab-item>
      <mt-tab-item id="tab4">

        搜索
        <img slot="icon" src="../assets/img/icon/icon_search.png">
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    components: {

    },
    data(){
      return {

        txte: 'hello',
        selected: ''
      }
    },
    watch:{
      selected:function (newid,oldid) {
//        console.log(newid)
        if(newid==='tab4'){
          this.$router.push({name:'select'})
        }else if(newid==='tab1'){
          this.$router.push({name:'home'})
        }
        else if(newid==='tab2'){
          this.$router.push({name:'vip'})
        }
        else if(newid==='tab3'){
          this.$router.push({name:'gouwu'})
        }
      }
    }
  }
</script>

<style>

</style>
