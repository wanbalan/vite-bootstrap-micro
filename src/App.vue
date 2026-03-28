<template >
  <NavBar/>
  <br><br>
  <div class="container-fluid text-center" data-bs-theme="dark">
    <div class="card">
      <div class="container" >
        <div class="row ">
          <div class="col">
            <h1><strong >Титул первой колонки</strong></h1>
            <dev-button ></dev-button >
          </div>
          <div class="col">
            <h1><strong >Титул второй колонки</strong></h1>
            <dev-button></dev-button >
          </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import DevButton from './components/DevButton.vue'
import Slots from './components/Slots.vue'
// import { reactive,ref, computed} from 'vue' //
// import type {Ref} from "vue"; //
import { useStore } from 'vuex'
const store = useStore()

</script>

<style>
.col h1 {
  padding: 20px;
}
form {
  padding:15px;
}
</style>
