import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftList:['限时特价','9月套餐','单品-新品'
    ,'单品-饮料','超值套餐-白桃','超值套餐-可乐','单品-主食',
    '单品小食','周三/周日活动'],
    selectedFood:{
        name:[],
        money1:[],
        money2:[],
        num:0,
    },
    shopCarDisplay:false,

  },
  getters:{
    getMoenySum:()=>{
      return this.state.selectedFood.money1.reduce((x,y)=>{
          x+y;
      })
  }
  },
  mutations: {
    selectedFooodPush(name,money){
      this.selectedFoood.name.push(name);
      this.selectedFoood.money.push(money);
      this.selectedFoood.num++;
      return selectedFoood;
    },
    selectedFooodPop(name,money){
      this.selectedFoood.name.pop(name);
      this.selectedFoood.money.pop(money);
      this.selectedFoood.num--;
      return selectedFoood;
    }
  },
  actions: {

  }
})
