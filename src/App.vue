<template >
  <NavBar/>
  
  <br><br>
  <div class="container-fluid text-center pt-3" data-bs-theme="dark">
    <div class="card">
      <div class="container " >
        <div class="row ">
          <div class="col">
            <dev-button ></dev-button >
          </div>
         </div>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
// import { computed } from 'vue' //
import NavBar from './components/NavBar.vue'
import DevButton from './components/DevButton.vue'
// import { useCounterStore } from './store/MapStore.ts' //
// const store = useCounterStore() //

// console.log("my store is ", store.title) //

// var devices={"ЭСУ-436":store.setting_436, //
        // "ЭРРД-436":store.setting_errd436, //
        // "ЭСУ-222":store.setting_222, //
      // } //
// const { deviceSetting} = computed(() => ({ //
  // deviceSetting: () => { return devices[store.title]}, //
  // })).value //
// .col h1 { //
  // padding: 20px; //
// } //
// form { //
  // padding:15px; //
// } //
</script>

<style>
</style>
