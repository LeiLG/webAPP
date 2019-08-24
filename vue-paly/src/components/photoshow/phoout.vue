<template>
  <div class="content">
    <nav-vue :por="mytit"></nav-vue>
     <div class="types">
        <ul >
          <li @click="qb">全部</li>
          <li @click="gf">古风</li>
          <li @click="jz">建筑</li>
          <li @click="dm">动漫</li>
        </ul>
    </div>

    <div class="val" v-for="(pho,index) in photo" :key="index" @scroll="getscrol" ref="imgbox">
      <router-link :to="{name:'phoval',query:{id:pho.id}}" >
        <img v-lazy="pho.img"/>
        <div class="sm">
          <ul>
            <li>{{pho.title}}&nbsp;&nbsp;&nbsp;类型：{{pho.types}}</li>
            <li>{{pho.value}}</li>
          </ul>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return{
                mytit:'图文分享',
              photo:[]
            }
        },
      created(){
            this.$Axios.get('/photo/ps')
              .then((ret)=>{
//                console.log(ret)
                this.photo=ret.data
              })

      },
      methods:{
          qb:function () {
            this.$Axios.get('/photo/ps',{params:'qb'})
              .then((ret)=>{
//                console.log(ret)
                this.photo=ret.data
              })
          },
          gf:function () {
            this.$Axios.get('/photo/ps',{params:'gf'})
              .then((ret)=>{
//                console.log(ret)
                this.photo=ret.data
              })
          },
        jz:function () {
          this.$Axios.get('/photo/ps',{params:'jz'})
            .then((ret)=>{
//              console.log(ret)
              this.photo=ret.data
            })
        },
        dm:function () {
          this.$Axios.get('/photo/ps',{params:'dm'})
            .then((ret)=>{
//              console.log(ret)
              this.photo=ret.data
            })
        },

        getscrol:function () {
              console.log('aaa')
////          let imgbox=document.getElementById('imgbox')
//          let H=this.$refs.imgbox.scrollTop
//          console.log(H)
        }
      }
    }
</script>
<style scoped>
.content{
  /*overflow: scroll;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*right: 0;*/
   /*height: 10rem;*/
}


  .types{

background-color: #8a6de9;
  height: 35px;
  width: 100%;
  position: fixed;
  z-index: 333;

}
  .types ul{
    list-style: none;
    width: 100%;
    height: 100%;
  }
.types ul li{
  float: left;
  width: 25%;
  line-height: 35px;
  height: 100%;
  text-align: center;
}
  .val{
    position: relative;
    top: 35px;
    width: 100%;
  }
  .val img{
    width: 100%;
    height: 180px;
  }
  .sm{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 65px;

    background: rgba(0,0,0,0.2);
color: #ffffff;
    line-height: 30px;
  }
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
