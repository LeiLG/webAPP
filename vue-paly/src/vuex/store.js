import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
  conten:0,
  email:'',
  password:'',
  username:'',
  img:'',
  id:-1
}

const mutations={
  mutationsadd(state,user){
    for(let key in user){
      state[key]=user[key]
    }
    console.log(state)
  },
  mutationsConten(state,num){
    state.conten=num
  }
}


const getters={

}

export default new Vuex.Store({
  state,
  mutations
})
