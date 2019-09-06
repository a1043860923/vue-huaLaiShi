<template >
  <div class="food">
    <div style="height:200px;width:100%;position:fixed;background:black"></div>
    <LeftList></LeftList>
    <RightList @add-click="addShopCar($event)"></RightList>
    <ShopCar v-show="shopCarDisplay" :selected-data="selectedData" class="money-div">{{money1Sum}}</ShopCar>
    <div v-show="shopCarDisplay" style="height:200px;width:100%;"></div>
  </div>
</template>

<script>
import RightList from "../components/RightList.vue";
import LeftList from "../components/LeftList.vue";
import ShopCar from "../components/ShoppingCar.vue";

export default {
  name: "food",
  components: { LeftList, RightList, ShopCar },
  data() {
    return {
      shopCarDisplay: false,
      selectedData: null,
      selectedFood: this.$store.state.selectedFood,
      money1Sum: 0
    };
  },
  methods: {
    addShopCar: function(selectedData) {
      if (selectedData.shopCarDisplay != 0) {
        this.shopCarDisplay = true;
      } else {
        this.shopCarDisplay = false;
      }

      this.selectedFood.name.push(selectedData.name);
      this.selectedFood.money1.push(selectedData.money1);
      this.selectedFood.money2.push(selectedData.money2);
      let flag = true;
      this.money1Sum = this.selectedFood.money1.reduce((x, y) => {
        if (flag) {
          x = Number(x.substr(1));
          flag = false;
        }

        return x + Number(y.substr(1));
      });
      if(!flag){
        this.money1Sum="￥"+this.money1Sum+".00";
      }
    }
  }
};
</script>

<style scoped>
.money-div {
  float: left;
  margin-left: 25px;
  display: flex;
  align-items: center;
  height: 130px;
  color: rgb(240, 170, 60);
}
</style>