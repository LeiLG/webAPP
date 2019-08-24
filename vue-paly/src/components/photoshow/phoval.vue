<template>
  <div>
    <nav-vue :por="mytit"></nav-vue>
    <div class="pho" v-for="(pho,index) in phoval" :key="index">
      <div id="imgbox" class="imgs">

          <img  @click="look(1)" :src="pho.img"/>
          <img  @click="look(2)" :src="pho.img1"/>
          <img  @click="look(3)" :src="pho.img2"/>
          <img  @click="look(4)" :src="pho.img3"/>

      </div>
      <ul>
        <li>标题：{{pho.title}}</li>
        <li>分类：{{pho.types}}</li>
      </ul>
      <p>图片详情：{{pho.values}}</p>

    </div>
      <div class="zdc" id="zdca"></div>
      <p>评论：</p>
    <input type="text" v-model="plval" style="width: 200px;height: 35px;margin-top: 15px" />
    <input type="button" @click="sublim" value="提交" style="width: 50px;height: 35px;"/>
  <hr style="margin-top: 7px">
    <ul class="plul" v-for="(pls,index) in pl" :key="index">
      <li ><span>{{pls.user}}:</span> <span>{{pls.value}}</span><span style="float: right">{{pls.date | dateS}}</span></li>
    </ul>

  </div>
</template>
<script>
    export default{
        data(){
            return{
                mytit:'图文详情',
              phoval:[],
              nums:'1',
              screenHeight: document.documentElement.clientHeight,
              plval:'',
              pl:[]
            }
        },
         methods:{
          look(index){
              index=index-1

            console.log(index)
            console.log(this.nums)
            let zdca=document.getElementById('zdca')
              let img=document.getElementById('imgbox').children
              if(this.nums==='1')
              {

                img[index].style.width=400+'px'
                img[index].style.height=300+'px'
                img[index].style.position='absolute'
                img[index].style.top='30%'
                img[index].style.left=7+'px'
                img[index].style.zIndex=444
                zdca.style.display='block'
                zdca.style.height=this.screenHeight+'px'
                this.nums = '2'
                return
              }else {
                img[index].style.width='50%'
                img[index].style.height=105+'px'
                img[index].style.zIndex=0
                img[index].style.position=''
                img[index].style.top=''
                img[index].style.left=0+'px'
                zdca.style.display='none'
                zdca.style.height=0+'px'
                this.nums = '1'
              }
//          }else if(this.nums='2'){
//                img[index].className=''
////                img[index].style.width='50%'
////                img[index].style.height=150+'px'
//                this.nums=1
//              }

          },

          sublim(){
              console.log(this.$store.state.conten)
              if(this.$store.state.conten===1){

                let phoid=this.$route.query.id
                let plval=this.plval
                let username=this.$store.state.username

                var data = {id:phoid,val:plval,username:username}
                this.$Axios.post('/photo/phopl',this.$qs.stringify(data))

                this.$Axios.get('/photo/phopl',{params:this.$route.query.id})
                  .then((ret)=>{
                    console.log(ret)
                    this.pl=ret.data
                  })
                this.plval=''

              }else {
                  window.alert('请先登录')
              }

          }
          }
      ,

      created(){

        this.$Axios.get('/photo/phoval',{params:this.$route.query.id})
          .then((ret)=>{
//            console.log(ret)
            this.phoval=ret.data

          })
        this.$Axios.get('/photo/phopl',{params:this.$route.query.id})
          .then((ret)=>{
            console.log(ret)
            this.pl=ret.data
          })
      }
    }
</script>
<style scoped>
.pho{
  width: 100%;
}
  .pho .imgs img{
    width: 50%;
    height: 105px;
    float: left;
  }
  .pho ul{
    width: 100%;
    height: 45px;
    background:rgba(0,0,0,0.3);
    list-style: none;
  }
  .pho ul li {
    width: 50%;
    height: 100%;
    float: left;
    line-height: 45px;
  }

.zdc{
  width: 100%;
  background-color: #000000;
  display: none;
  z-index: 333;
  position: absolute;
  top: 0;
}
.plul{
  list-style: none;
  width: 100%;
}
  .plul li{
    width: 100%;
    /*margin-top: 5px;*/
  }
</style>
