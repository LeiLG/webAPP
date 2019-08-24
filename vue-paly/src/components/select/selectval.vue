<template>
  <div>

     <nav-Vue :por="mytit"></nav-Vue>
    <h1>搜索</h1>
    <div class="box">
      <input type="text" @input="inputs" v-model="inpvals" />
      <button type="button" @click="inplay" >搜索</button>
      <ul >
        <li v-for="(ts,index) in prompts" :key="index">
          <a :href=hresf+ts>{{ts}}</a></li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
    data(){
        return{
            mytit:'资讯搜索',
          inpvals:'',
          prompts:[],
          hresf:'http://www.baidu.com/s?wd='
        }
    },

  methods:{

//          inputss: function (callback) {
//            let times=new Date().getTime()
//            return function () {
//              let times2=new Date().getTime()
//              console.log(times2-times)
//              if(times2-times>=1000){
//                console.log('aa')
//                  callback()
//                times=times2
//              }
//            }
//          },
    //防抖
        inputs: function () {
          clearTimeout(this.times)
          this.times=setTimeout(()=>{
            this.selects()
          },500)//防抖

        },
      //jsonp回调函数
        selects:function(){
          let that=this
          window.ret=function(data) {
            let prompts=[]
            prompts=data.s
            //将window的ret的数据绑定给vue的prompts
            that.prompts=prompts
           }
           //通过输入的数据获取提示选择信息
         let val=this.inpvals
          this.$jsonp("http://suggestion.baidu.com/su?wd="+val+"&cb=ret")//回调函数ret必须是window的方法，不然会报错，找不到方法
        },

        //点击搜索时跳转页面
        inplay:function () {
            let val=this.inpvals
          window.location.href=this.hresf+val
        }

  },
    beforeDestroy(){

    }
}
</script>
<style scoped>
  div{
    text-align: center;
  }
  .box{
    width: 100%;
    position: absolute;
    top: 29%;

  }
  button{
    width: 15%;
    height: 35px;
    position: relative;
    left: 6%;
    top: 10px;
  }
  input{
    width: 60%;
    height: 35px;
    position: relative;
    left: 4%;
    top: 10px;
  }
  h1{
    text-align: center;
    position: absolute;
    top: 20%;
    left: 43%;
  }
  ul{
    text-align: left;
    position: absolute;
    left: 16%;
    top: 130%;
    list-style: none;
  }
  ul li a{
    color: #000000;
    text-decoration: none;
  }
</style>
