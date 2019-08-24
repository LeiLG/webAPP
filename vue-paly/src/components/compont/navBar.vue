<template>
  <div>
    <mt-header fixed :title="por" >
      <router-link to="" slot="left">
        <mt-button @click="$router.go(-1)" icon="back">返回</mt-button>
      </router-link>
    </mt-header>

  </div>
</template>
<script>
  export default{
      data(){
      return{
////          tit:'新闻列表'
//        mytit:'新闻列表'
      }
      },
    methods:{

    },
    props:['por']

  }

</script>
<style scoped>

</style>
