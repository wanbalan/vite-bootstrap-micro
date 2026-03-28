<template >
  <NavBar @clickOnDevice="setDevTitle" :name="{{ store.getters.title }}"/>
  <br><br>
  <div class="container-fluid text-center" data-bs-theme="dark">
    <div class="card">
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
// import { reactive,ref, computed} from 'vue' //
// import type {Ref} from "vue"; //
import { useStore } from 'vuex'
const store = useStore()


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
