<template >
  <NavBar @clickDev="setDev" :name="nameDev"/>
  <br><br>
  <div class="container-fluid text-center" data-bs-theme="dark">
<div class="card" >
    <div class="container" >
      <div class="row ">
        <div class="col">
          <h1><strong >{{ getDev.col1Title }}</strong></h1>
          <dev-button :textBut="getDev.col1" ></dev-button >
        </div>
        <div class="col">
          <h1><strong >{{ getDev.col2Title }}</strong></h1>
          <dev-button :textBut="getDev.col2" ></dev-button >
        </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import DevButton from './components/DevButton.vue'
import { reactive,ref, computed} from 'vue'
import type {Ref} from "vue";



var setting_436={
  col1:this.zamESU436.slice(0,4),
  col2:this.zamESU436.slice(4),
  col1Title:"Nk",
  col2Title:"Nv"
};

var setting_222={
  col1:this.zam222_col1,
  col2:this.zam222_col2,
  col1Title:"Nnd, Nvd",
  col2Title:"Виброподвеска",
};

var setting_errd436={
  col1:this.zamERRD436.slice(0,5),
  col2:this.zamERRD436.slice(5),
  col1Title:"FvD",
  col2Title:"FvD",
};

var setting={
  "ЭСУ-436":setting_436,
  "ЭРРД-436":setting_errd436,
  "ЭСУ-222":setting_222,        
};
  
var zamERRD436=[{ gen1:{ ch1: { gz:"5500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"14000", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"1500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2100", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"7180", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"6000", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2410", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2405", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"4500", U: "2" }, ch2:{ gz:  "", U:  ""} } },
      { gen1:{ ch1: { gz:"2800", U: "2" }, ch2:{ gz:  "", U:  ""} } }];
      
var zamESU436=[{ gen1:{ ch1: { gz:"805", U: "2" }, ch2:{ gz:  "732", U:  "2"} } },
      { gen1:{ ch1: { gz: "5750", U: "2" }, ch2:{ gz:  "1234", U:  "2"} } },
      { gen1:{ ch1: { gz: "7820", U: "2" }, ch2:{ gz:  "5550", U:  "2"} } },
      { gen1:{ ch1: { gz:"3450", U: "2" }, ch2:{ gz:  "9826", U:  "2"} } },
      { gen1:{ ch1: { gz: "3450", U: "2" }, ch2:{ gz:  "14554", U:  "2"} } },
      { gen1:{ ch1: { gz: "3450", U: "2" }, ch2:{ gz:  "16064", U:  "2"} } },
      { gen1:{ ch1: { gz: "6000", U: "2" }, ch2:{ gz:  "7300", U:  "2"} } }];

var zam222_col2=[
      { gen1:{ ch1: { gz: "2160", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "120", U: "38.4" }, ch2:{ gz:  "120", U:  "38.4"} } },
      { gen1:{ ch1: { gz: "2160", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "120", U: "76.8" }, ch2:{ gz:  "120", U:  "76.8"} } },
      { gen1:{ ch1: { gz: "3960", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "220", U: "35.4" }, ch2:{ gz:  "220", U:  "35.4"} } },
      { gen1:{ ch1: { gz: "3960", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "220", U: "141.6" }, ch2:{ gz:  "220", U:  "141.6"} } },
      { gen1:{ ch1: { gz: "646", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "170", U: "54.6" }, ch2:{ gz:  "170", U:  "54.6"} } },
      { gen1:{ ch1: { gz: "646", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "170", U: "109.3" }, ch2:{ gz:  "170", U:  "109.3"} } },
      { gen1:{ ch1: { gz: "1253", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "330", U: "53.1" }, ch2:{ gz:  "330", U:  "53.1"} } },
      { gen1:{ ch1: { gz: "1253", U: "2" }, ch2:{ gz: "", U: ""} } ,  gen2:{ ch1: { gz: "330", U: "212" }, ch2:{ gz:  "330", U:  "212"} } }];

var zam222_col1=[{ gen1:{ ch1: { gz: "10000", U: "2" }, ch2:{ gz:  "65", U:  "2"} } },
    { gen1:{ ch1: { gz: "2000", U: "2" }, ch2:{ gz:  "500", U:  "2"} } },
    { gen1:{ ch1: { gz: "4000", U: "2" }, ch2:{ gz:  "1000", U:  "2"} } }];

    
function setDev(item) {
  this.nameDev=item.name
  this.butColor.butCol=Array(10).fill("btn-success")
  };
function updateColor(index){
  console.log("updateColor")
  this.butColor.butCol[index]="btn-danger"
  };
</script>

<style>
.col h1 {
  padding: 20px;
}
form {
  padding:15px;
}
#app {
background: #0000FF;

}
</style>
