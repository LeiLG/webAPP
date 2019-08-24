<template>
  <div>
    <h1 v-show="show2">用户未登录</h1>
<div class="sp">
  <ul v-for="(sp,index) in sp" :key="index">
    <li>
      <div class="imgs">
      <img :src="sp.img"/>

      </div>
      <div class="tits">
        <ul><mt-switch v-model="sp.ispicked"></mt-switch>
          <input style="position: absolute;top: 8px;right: 15px" type="button" value="删除" @click="removes(index)"/>
          <li>品牌：{{sp.title}}</li>
          <li>价格：{{sp.price}}</li>
          <li>
            数量：
            <input type="button" value="-" @click="remove(index)"/>
            <span v-model="sp.nums" >{{sp.nums}}</span>
            <input type="button" value="+" @click="add(index)"/>
          </li>
        </ul>
      </div>
    </li>

  </ul>
</div>


<div class="js" v-show="show">
  结算：￥<span  >{{prices.prices}}</span>&nbsp;&nbsp;共<span>{{prices.nums}}</span>件商品</div>
    <flo-Vue></flo-Vue>
  </div>
</template>
<script>
export default{
    data(){
        return{
          spid:[],
          sp:[],
          gwcid:[],
          show:false,
          show2:true

        }
    },
  created(){
        //载入页面，判断用户是否登录，如果登录请求用户购物车信息，如果没有登录，显示用户未登录
        if(this.$store.state.conten===1){
            //如果登录切换页面显示内容
            this.show=true
          this.show2=false
          //感觉用户id请求用户购物车信息
        this.$Axios.get('/gw/gwc',{params:this.$store.state.id})
          .then((ret)=>{
        //遍历用户购物车信息，感觉购物车商品id进行赋值
            for(let i=0;i<ret.data.length;i++){
                this.spid.push(ret.data[i].spid)
                this.gwcid.push(ret.data[i].id)
              console.log(this.gwcid)

            }
//            console.log(this.spid)
            //遍历用户购物车商品id，请求商品信息
            for (let i=0;i<this.spid.length;i++){
                let spid=this.spid[i]
                this.$Axios.get('/gw/gwcval',{params:spid})
                  .then((ret)=>{
//                    console.log(ret)
                    //为商品添加数量和选中属性
                    ret.data[0].ispicked=false
                    ret.data[0].nums=1
                    this.sp.push(ret.data[0])
                    console.log(this.sp)


                    //这是第二种添加属性的方法
//                    console.log(this.sp)
//                    for(let i=0;i<this.sp.length;i++){
//                      this.$set(this.sp[i],'nums',0)
//                      this.$set(this.sp[i],'ispicked',false)
//                      console.log(this.sp)
//                    }
                  })
            }
          })
  }
  },
  methods:{
      //加减商品数量
      add:function (index) {
        this.sp[index].nums++
      },
    remove:function (index) {

      if(this.sp[index].nums>=1){
        this.sp[index].nums--
      }else {
        this.sp[index].nums=0
      }
    },
    //删除商品
    removes:function (index) {
          let id =index
          //获得商品index
      id=this.gwcid[id]  //获取gwcid中的第index个的值
      //根据商品在购物车里面的id请求服务器，删除商品
      this.$Axios.get('/gw/sc',{params:id})
        .then((ret)=>{
          if(ret.data.sess===0){
              window.alert('删除成功')
            //清空数据，
            this.sp=[]
            this.spid=[]
            this.gwcid=[]
            //重新请求数据，重新赋值（页面刷新效果）
            this.$Axios.get('/gw/gwc',{params:this.$store.state.id})
              .then((ret)=>{

                for(let i=0;i<ret.data.length;i++){
                  this.spid.push(ret.data[i].spid)
                  this.gwcid.push(ret.data[i].id)
                  console.log(this.gwcid)
                }

                for (let i=0;i<this.spid.length;i++){
                  let spid=this.spid[i]
                  this.$Axios.get('/gw/gwcval',{params:spid})
                    .then((ret)=>{

                      ret.data[0].ispicked=false
                      ret.data[0].nums=1
                      this.sp.push(ret.data[0])

                    })
                }
              })

          }
        })

    }
  },

computed:{
      prices(){
          let prices=0
          let nums=0
          for(let i=0;i<this.sp.length;i++){
              if(this.sp[i].ispicked===true){
                  nums+=1
                 prices+=this.sp[i].nums*this.sp[i].price
              }
          }

          return {
              prices,nums
          }
      }
}
}
</script>
<style scoped>
 .sp{
   width: 100%;
 }
  .sp ul{
    width: 95%;
    height: 150px;
    list-style: none;

  }
 .sp ul li {
   width: 100%;
   height: 55%;
   margin-top: 10px;
   margin-left: 10px;
   position: relative;
 }
  .tits{
    width: 40%;
    height: 100%;
    position: absolute;
    left: 50%;
  }
  .tits ul{
    list-style: none;
    width: 100%;
    height: 100%;
  }
 .tits ul li{
   width: 100%;
   height: 30%;

 }
  .imgs{
    width: 40%;
    height: 100%;
    position: absolute;
  }
  .imgs img{
    width: 100%;
    height: 150px;
  }
.js{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 55px;
  background-color: #cccccc;
  line-height: 50px;
}
  .tits li input{
    width: 20px;
    font-size: 20px;
  }
</style>
