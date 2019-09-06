<template>
  <div id="ShopCar" style="position:fixed;width:100%;height:130px;bottom:130px;">
    <div class="div-one">
      <div class="img-div">
        <img src="../assets/shopcar.jpg" class="shoppingcarset" />
      </div>
      <slot class="money-div"></slot>

    </div>
    <div class="div-two">去结算</div>
  </div>
</template>

<script>
export default {
  name: "ShopCar",
  props: ["selected-data"],
 
  data() {
    return {
     money1sum:0,
      //money2sum:'1',
      selectedFood:this.$store.state.selectedFood,
      //selectedMoney1List:[],
     
    }
  },
  watch: {
    selectedFood:function() {

      // if (typeof(this.selectedData) != 'undefined') {
      
      //   this.selectedMoney1List=[];
      //   this.selectedMoney1List.push(this.selectedData.money1);
      alert('selectedFood');
      //  if(this.selectedMoney1List.length>1){
        alert(this.selectedFood);
         
      //  }
      //   else{
      //       this.money1Sum=Number(this.selectedMoney1List[0].substr(1));
      //      alert(this.money1Sum);
      //   }
        
      // }
    
    },
    
  }
};
</script>

<style scoped>
.div-one {
  float: left;
  width: 70%;
  height: 130px;
  background: black;
  font-size: 5em;
}
.div-two {
  float: left;
  height: 130px;
  width: 30%;
  background: red;
  color: white;
  font-size: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
}
.shoppingcarset {
  height: 130px;
  border-radius: 50%;
}
.img-div {
  float: left;
  margin-left: 50px;
  margin-top: -30px;
}
.money-div {
  float: left;
  margin-left: 25px;
  display: flex;
  align-items: center;
  height: 130px;
  color: rgb(240, 170, 60);
}
</style>