<template>
  <div class="longin">
    <nav-vue :por="mytit"></nav-vue>

    <div class="lonbox">
      <ul>
        <li><h2>登录</h2></li>
        <li><input v-model="email" type="email" />&nbsp;&nbsp;<span>邮箱</span></li>
        <li><input v-model="password" type="password" />&nbsp;&nbsp;<span>密码</span></li>
        <li><input style="width: 25%" @click="login"  type="button" value="登录"/></li>
        <li>没有注册?&nbsp;<input style="width: 20%;margin-top: 35px" type="button" @click="zhuche" value="注册"/></li>
      </ul>
    </div>




    <!--<flo-Vue></flo-Vue>-->
  </div>
</template>
<script>
export default{
    data(){
        return{
            mytit:'登录',
          email:'',
          password:'',
          user:{}
        }
    },
  methods:{
        zhuche:function () {
          this.$router.push({name:'zhuche'})
        },
    login:function () {
      let email=this.email
      let password=this.password

      this.$Axios.get('/user/login',{params:{email:email,password:password}})
        .then((ret)=>{
          console.log(ret)
          this.user=ret.data.message[0]

          if(ret.data.steact===1){
          this.$store.commit('mutationsadd',this.user)
          this.$store.commit('mutationsConten',1)
            console.log('登录成功')
            this.$router.push({name:'vip'})

          }else if(ret.data.steact===404){
              window.alert('登录失败,用户不存在')
          }else if(ret.data.steact===303){
              window.alert('邮箱或密码错误')
          }


        })
    }
  }
}
</script>
<style scopen>
  .longin{
    width: 100%;
    height: 630px;
    background-image: url("http://116.62.108.19/public/img/loginbj.jpg");
    /*background-repeat: no-repeat;*/
    background-position: center;
  }
  .lonbox{
    border: 1px solid rgba(0,0,0,0.5);
    position: relative;
    width: 250px;
    height: 250px;
    left: 50%;
    top: 125px;
    transform: translate(-125px);
  }
  .lonbox ul{
    list-style:none;

  }
  .lonbox ul li{
    text-align: center;
    margin-top: 10px;
  }
  .lonbox ul li input{
    width: 68%;
    height: 24px;
    border: 2px solid rgba(0,0,0,0.5);
  }

</style>
