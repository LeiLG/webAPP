<template>
  <div>

    <div v-show="showsa">
        <ul>
          <li style="text-align: center" ><img :src="$store.state.img"/></li>
          <li style="text-align: center" >{{$store.state.username}}</li>
        </ul>
        <input type="button"  @click="tc"  value="退出登录"/>
  </div>
    <div v-show="show" class="vipty">
        <h3 >用户还未登录</h3>
        <input type="button" @click="login"  value="登录"/>&nbsp;&nbsp;
        <input type="button" @click="zhuche"  value="注册"/>
        <!--<h1>{{$store.state.conten}}</h1>-->
        <!--<button @click="handleAddClick">增加</button>-->
    </div>
    <flo-Vue></flo-Vue>
  </div>
</template>
<script>
      export default{
        data(){
          return {
            show: true,
            showsa:false,
            user:{
              conten:0,
              email:'',
              password:'',
              username:'',
              img:'',
              id:-1
            }
          }
        },
        methods: {
            login:function () {
              this.$router.push({name:'login'})
            },
          zhuche:function () {
            this.$router.push({name:'zhuche'})
          },
          tc:function () {
            this.$store.commit('mutationsadd',this.user)
            this.show=true
            this.showsa=false

          }

        },
        created(){
            let id=this.$store.state.conten
            if (id===1){
                this.show=false
                this.showsa=true
            }
        }
      }
</script>
<style scoped>
.vipty{
  text-align: center;
  margin-top: 50px;
}
  .vipty input{
    width: 50px;
    height: 30px;
  }
</style>
