<template>
  <div>
<nav-vue :por="mytit"></nav-vue>

    <div v-for="(news,index) in newvalue" :key="index">
      <!--因为是对象，所以里面的内容不需要循环，直接.出来-->
      <h1 style="font-size: 24px;text-align: center">{{news.title}}</h1>
        <h3 style="font-size: 18px;font-weight:inherit;text-align: right">发布时间：{{news.datetime | dateS}}</h3>
      <hr>
      <div>{{news.value}}</div>
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
              mytit:'新闻详情',
              newvalue:[] //所以这里要设置成对象形式
            }
        },
      created(){
            let id=this.$route.query.id
            this.$Axios.get('/app/newva/',{params:id}) //这样可以将id传给服务器，服务器收到的是一个数组，且数组的第0项就是id
              .then((ret)=>{
                console.log(ret)
                this.newvalue=ret.data //因为只有一个数据，且直接传值，所以这是一个对象
              })
              .catch((err)=>{
                console.log(err)
              })
//        this.$Axios({
//          method:'get',
//          url:'newva',
//          data:id
//        })
//          .then((ret)=>{
//                this.newvalue=ret.data
//              })
//              .catch((err)=>{
//                console.log(err)
//              })
//            console.log(this.$route.query.id)
      }
    }
</script>
<style>

</style>
