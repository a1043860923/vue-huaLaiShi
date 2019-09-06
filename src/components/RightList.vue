<template>
       <div id="right-list" style="margin-left:20%;margin-top:200px;width:80%;
       background:white;display:flex;flex-direction:column">
        <div v-for="llist in leftList" :key="llist" class="right-list">
          <div class="title-name">
               {{llist}}
            
              </div>
          <div  v-for="(rlist,index) in rightList" :key="index" class="right-list">
              <div v-if="rlist.group==llist" class="size-set" >
                <img :src="rlist.img" class="size-set img-set" />
                <div style="display:flex;flex-direction:column" class="other-set">
                  <b class="name-set">{{rlist.name}}</b>
                  <small class="dir-set">{{rlist.dir}}</small>
                  <div>
                    <span class="money1">{{rlist.money1}}</span>
                    <span class="dir-set money2"><s>{{rlist.money2}}</s></span>
                    <div class="add-set" >
                    <a @click="sendEmit(rlist.name,rlist.money1,rlist.money2);">+</a>  
                      </div>
                  </div>
                  <div class="zhekou" v-if="rlist.zhekou!=null&&rlist.zhekou!=''">
                    <span class="iconfont icon-zhekou footsize"></span>
                    <span style="margin-left:2%">{{rlist.zhekou}}</span>
                  </div>
                  <div >
                    <div v-for="bq in rlist.biaoqian" class="biaoqian" :key="bq">
                        <span v-if="bq!=null&&bq!=''">{{bq}}</span>
                        
                        </div>
                   
                  </div>
                </div>
              
             </div>
         </div>
       </div>
        <div style="width:100%;height:150px;float:left">
                   
               </div>
     </div>
</template>

<script>
export default {
  name: 'right-list',
  methods:{
sendEmit:function(a,b,c){
  let selectedData = {
     name:'',
     money1:'',
     money2:'',
     shopCarDisplay:0,
  };
  selectedData.name = a;
  selectedData.money1=b;
  selectedData.money2=c;
  selectedData.shopCarDisplay++;
 this.$emit('add-click',selectedData);
},

  },
  data(){
    return {
         rightList:[
        {
          group:'限时特价',
          name:'香辣双鸡堡买一送一',
          dir:'活动日跳转至活动价格',
          money1:'￥12.00',
          money2:'￥24.00',
          zhekou:'5折 每单限9999份优惠',
          biaoqian:['热销','香辣'],
          img:require('../static/t1.jpg')
        },
        {
          group:'限时特价',
          name:'双层鸡排堡买一送一',
          dir:'活动日跳转至活动价格',
          money1:'￥15.00',
          money2:'￥30.00',
          zhekou:'5折 每单限9999份优惠',
          biaoqian:['热销','不辣'],
          img:require('../static/t3.jpg')
        },
        {
          group:'9月套餐',
          name:'学霸套餐 (可乐)',
          dir:'双层鸡排堡+香酥鸡腿+小薯条+中可乐',
          money1:'￥24.00',
          money2:null,
          zhekou:'',
          biaoqian:null,
          img:require('../static/t2.jpg')
        },
          {
          group:'9月套餐',
          name:'蜜汁手扒鸡+中可乐',
          dir:'蜜汁手扒鸡+中可乐',
          money1:'￥26.00',
          biaoqian:['热销','招牌','微辣'],
          img:require('../static/t4.jpg')
        },
         {
          group:'单品-新品',
          name:'模板',
          dir:'模板',
          money1:'￥0.00',
          img:require('../static/t1.jpg')
        },
         {
          group:'单品-饮料',
          name:'模板',
          dir:'模板',
          money1:'￥0.00',
          img:require('../static/t1.jpg')
        },
        {
          group:'超值套餐-白桃',
          name:'模板',
          dir:'模板',
          money1:'￥0.00',
          img:require('../static/t1.jpg')
        },
        {
          group:'超值套餐-可乐',
          name:'模板',
          dir:'模板',
          money1:'￥0.00',
          img:require('../static/t1.jpg')
        },
        {
          group:'单品-主食',
          name:'模板',
          dir:'模板',
          money1:'￥0.00',
          img:require('../static/t1.jpg')
        },
      {
          group:'单品小食',
          name:'模板',
          dir:'模板',
          money1:'￥0.00',
          img:require('../static/t1.jpg')
        },
       {
          group:'周三/周日活动',
          name:'模板',
          dir:'模板',
          money1:'￥0.00',
          img:require('../static/t1.jpg')
        },
      ],
      leftList:this.$store.state.leftList,
    
    }
  }

}
</script>

<style scoped>
@import '../assets/font_icon/iconfont.css';
.footsize{
  font-size:1.5em;
  }
.right-list{
    float:left;
    margin-top: 12%;
  font-size:2em;color:black;text-align:left;
}
.title-name{
    float:left;
    margin-left:5%;
    margin-top:-5%;

}
.size-set{
  height: 230px;
  float:left;
}
.img-set{
  width:40%;
}
.other-set{
  width:60%;
  float:left;
  
}
.name-set{
  font-size: 0.6em;
  font-weight:550;

}
.dir-set{
  margin-top: 5%;
  font-size: 0.4em;
 color: gray;
}
.money1{
    color:rgb(240,170,60);
     font-size: 0.7em;
}
.money2{
    margin-left:5%;
    font-size: 0.5em;
}
.zhekou{
     margin-top: 3%;
     color:rgb(240,170,60);
     font-size: 0.5em;
}
.biaoqian{
    color:white;
    background: orange;
    border:2px solid;
    border-radius: 15px;
    font-size: 0.4em;
    float: left;
    margin-left: 5%;
    margin-top: 2%;
    width: 15%;
    height: 50px;
    text-align: center;
    line-height: 50px
}
.add-set{
    float:right;
    background: red;
     width: 50px;
     height: 50px;
    border-radius:50%;
    text-align: center;
    line-height: 55px;
    color:white;
    margin-right: 10px;
    margin-top:10px;
}
</style>