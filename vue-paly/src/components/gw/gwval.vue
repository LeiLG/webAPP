<template>
  <div>
    <nav-vue :por="mytit"></nav-vue>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index">
        <img :src="img">
        <!--<img :src="img.img1">-->
        <!--<img :src="img.img2">-->
      </mt-swipe-item>
    </mt-swipe>
    <ul v-for="(img,index) in gwval" :key="index">
      <li>详情：{{img.values}}</li>
      <li>品牌：{{img.title}}</li>
      <li>原价：<span style="text-decoration: line-through;color: red">{{img.priced}}</span>&nbsp;
      现价：<span style="color: red">{{img.price}}</span>
      </li>
      <li><input type="button" value="加入购物车" @click="jrgwc"/></li>
    </ul>

  </div>
</template>
<script>
export default{
    data(){
        return{
        mytit:'商品详情',
          gwval:[],
          imgs:[]
        }
    },
  created(){
        let id=this.$route.query.id
        this.$Axios.get('/gw/gwval',{params:{spid:id}})
          .then((ret)=>{
          console.log(ret)
            this.gwval=ret.data
            this.imgs.push(ret.data[0].img)
            this.imgs.push(ret.data[0].img1)
            this.imgs.push(ret.data[0].img2)
            console.log(this.imgs)
          })


  },
  methods:{
      jrgwc:function () {
        if(this.$store.state.conten===1){
            let userid=this.$store.state.id
          let spid=this.$route.query.id
            let data={userid:userid,spid:spid}
            this.$Axios.post('/gw/jrgwc',this.$qs.stringify(data))
              .then((ret)=>{
                if(ret.data.setect===0){
                    window.alert('加入成功，可去购物车查看')
                }
              })
        }else {
            window.alert('请先登录')
        }
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
</style>
