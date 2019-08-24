<template>
 <div>
        <!--轮播图-->
         <mt-swipe :auto="4000">
           <mt-swipe-item v-for="(img,index) in imgs" :key="index">
             <img :src="img.img">
           </mt-swipe-item>
         </mt-swipe>
       <!--//九宫格-->
          <div class="tab">
            <ul >
              <li id="1"><router-link :to="{name:'newzx'}"><img  src="../assets/icon2/map.png"/><br>新闻资讯</router-link></li>
              <li id="2"><router-link :to="{name:'phoout'}"><img  src="../assets/icon2/gongao.png"/><br>图文分享</router-link></li>
              <li id="3"><router-link :to="{name:'gwlist'}"><img  src="../assets/icon2/sqing.png"/><br>商品展示</router-link></li>
              <li id="4"><router-link :to="{name:'selectval'}"><img  src="../assets/icon2/oods.png"/><br>搜索资讯</router-link></li>
              <li id="5"><router-link :to="{name:'home'}"><img  src="../assets/icon2/ad.png"/><br>留言反馈</router-link></li>
              <li id="6"><router-link :to="{name:'home'}"><img  src="../assets/icon2/fankui.png"/><br>联系我们</router-link></li>
            </ul>
          </div>


   <flo-Vue></flo-Vue>
 </div>
</template>

<script>
export default {

  data () {
    return {
      imgs:[],

    }
  },
created(){
      this.$Axios.get('/app/lunbo')
        .then((res)=>{
//          console.log(res)
          this.imgs=res.data.mesage
        })
},
  watch:{
    id:function (newid,oldid) {
//      console.log(newid)
//      console.log(oldid)
    }
  }



}
</script>
<style scoped>
  .mint-swipe{
    height: 180px;
  }
  .mint-swipe img{
    width: 100%;
    height: 100%;
  }
  .tab{
    width: 100%;
    /*background-color: blueviolet;*/
    height: 200px;
    margin-top: 10px;
  }
  .tab ul li{
    width: 33.33%;
    float: left;
    height: 100px;
    background-color: #ffffff;
    /*border: 1px solid #ffffff;*/
    list-style: none;
    text-align: center;

  }
  .tab ul{
    border: 0;
  }
  .tab ul li a img{
    width: 46%;
    height: 50%;
    padding-top: 10px;
  }
  .tab ul li a{
    color: #000000;
    text-decoration: none;
    font-weight: lighter;
    font-size: 14px;
  }
</style>
