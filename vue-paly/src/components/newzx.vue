<template>
  <div>
    <!--新闻资讯头部-->
    <!--<mt-header fixed title="新闻资讯">-->
      <!--<router-link to="/" slot="left">-->
        <!--<mt-butphotoshowicon="back">返回首页</mt-button>-->
      <!--</router-link>-->
    <!--</mt-header>-->
    <nav-vue :por="mytit"></nav-vue>


    <ul class="newlist">
      <li>
        <div v-for="(data,index) in newslist" :key="index">
          <router-link :to="{name:'news',query:{id:data.id}}">
          <div>
            <img :src="data.img">
            <ul>
              <li v-text="data.title"></li>
              <li >发布时间：{{data.datetime | dateS}}</li>
            </ul>
          </div>
          </router-link>
        </div>
      </li>

    </ul>


  </div>
</template>
<script>
    export default{
        data(){
            return{
                mytit:'新闻列表',
          newslist:[]
          }
        },
    methods:{
      backs:function () {

      }
    },
      created(){
        this.$Axios.get('/app/list')
          .then((res)=>{
//            console.log(res)
            this.newslist=res.data
          })
      }
    }
</script>
<style>
.newlist li div{
  height: 65px;
}
.newlist li div img{
  height: 100%;
}
.newlist li div ul{
  float: right;
  /*background-color: blueviolet;*/
  width: 81.5%;
  list-style: none;
  height: 96%;
  border-bottom: 1px solid #cccccc;
}
.newlist li div ul li{

  height: 50%;
  line-height: 32.5px;
}
</style>
