<template >
  <NavBar/>
  
  <br><br>
  <div class="container-fluid text-center" data-bs-theme="dark">
    <div class="card">
      <div class="container" >
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
import { computed } from 'vue'
import NavBar from './components/NavBar.vue'
import DevButton from './components/DevButton.vue'
import { useCounterStore } from './store/MapStore.ts'
const store = useCounterStore()


var devices={"ЭСУ-436":store.setting_436,
        "ЭРРД-436":store.setting_errd436,
        "ЭСУ-222":store.setting_222,
      }
const { deviceSetting} = computed(() => ({
  deviceSetting: () => { return devices[store.getTitle]},
  })).value
console.log(deviceSetting().col2[0])
</script>

<style>
.col h1 {
  padding: 20px;
}
form {
  padding:15px;
}
</style>
