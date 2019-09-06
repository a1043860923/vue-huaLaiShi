<template>
      <div id="left-list"  style="overflow:scroll;position:fixed;top:200px;height:1410px;width:20%;">
       <div v-for="list in leftList" :key="list" class="left-list">
          {{list}}
       </div>

     </div>
</template>

<script>
export default {
  name: 'left-list',
  data(){
    return {
      leftList:this.$store.state.leftList,
    
    }
  }
}
</script>

<style scoped>
.left-list{
  
height:100px;width:100%;background:rgb(247, 247, 247);
font-size:2em;color:black;text-align:center;
padding-top:65px;
}
</style>