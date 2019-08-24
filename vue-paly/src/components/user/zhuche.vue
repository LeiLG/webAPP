<template>
  <div class="longin">
<nav-vue :por="mytit"></nav-vue>
    <div class="lonbox">
      <ul>
        <li><h2>注册</h2></li>
        <li><input v-model="email" type="email" />&nbsp;&nbsp;<span>邮箱</span></li>
        <li><input v-model="username" type="text" />&nbsp;&nbsp;<span>呢称</span></li>
        <li><input v-model="password" type="password" />&nbsp;&nbsp;<span>密码</span></li>
        <li><input style="width: 25%" @click="zhuche"  type="button" value="注册"/></li>

      </ul>
    </div>
    <!--<flo-Vue></flo-Vue>-->
  </div>
</template>
<script>
export default{
    data(){
        return{
            mytit:'注册',
          email:'',
          password:'',
          username:'',
          user:{

          }

        }
    },
  methods:{
      zhuche:function () {
          let email=this.email
          let password=this.password
          let username=this.username
        let data={email:email,password:password,username:username}
          this.$Axios.post('/user/zhuche',this.$qs.stringify(data))
            .then((ret)=>{
              if(ret.data.sission===0){
                  window.alert('邮箱已存在')
              }else if(ret.data.sission===1){
                  window.alert('呢称已存在')
              }else if(ret.data.sission===2){
                  window.alert('注册成功')


                this.$router.push({name:'login'})
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
