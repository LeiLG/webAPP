<template>
  <div class="box">
<nav-vue :por="mytit"></nav-vue>

    <div class="listbox" >

      <ul v-for="(sp,index) in gwlist" :key="index" >
      <router-link  :to="{name:'gwval',query:{id:sp.id}}">
        <li>
          <div class="valbox">
            <img :src="sp.img"/>
          </div>
          <div class="valbox2">
            <ul>
              <li>介绍：{{sp.values}}</li>
              <li>类型：{{sp.title}}</li>
              <li class="jg">
                原价：￥<span style="text-decoration:line-through;">{{sp.priced}}</span><br>
                现价：￥{{sp.price}}
              </li>

            </ul>
          </div>
        </li>
      </router-link>
      </ul>

    </div>

  </div>
</template>
<script>
export default{
    data(){
        return{
            mytit:'商品列表',
          gwlist:[],
          tops:60

        }
    },
  created(){
        this.$Axios.get('/gw/gwlist')
          .then((ret)=>{
            console.log(ret)
            this.gwlist=ret.data
          }),

          window.addEventListener('scroll', this.scrollToTop,true)
  },
  methods:{
    scrollToTop() {

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>=this.tops){
          this.tops+=725
        if(this.tops>3000){
              return
        }
        this.$Axios.get('/gw/gwlist')
          .then((ret)=>{

            for (let i=0;i<ret.data.length;i++){
                this.gwlist.push(ret.data[i])
            }


          })
      }

    },


  }
}
</script>
<style scoped>

.listbox{
  width: 100%;
  height: 724px;

}
.listbox ul{
  list-style: none;
}
  .valbox{
    width: 48%;
    height: 180px;
    margin-top: 10px;
    margin-left: 10px;
    float: left;
  }
  .valbox img{
    width: 100%;
    height: 100%;
  }
  .valbox2{
    width: 45%;
    float: left;
    margin-top: 10px;
    margin-left: 10px;

  }
  .valbox2 ul{
    list-style: none;
  }
  .valbox2 ul li{
    margin-top: 10px;
  }
.valbox2 ul .jg{
  width: 100%;
  color: red;
  margin-top: 20px;

}

</style>
