<template >
<div class="row">
  <div class="col">
  <div class="row justify-content-center"
      v-for="(but, index) in deviceSetting().col1 "
      :key="index"
      >
      <div>
        <VibeButton class="btn"
          type="submit" form="form"
          >Замер {{text(but)}}</VibeButton >
      </div>
  </div>
  </div>
  <div class="col">
  <div class="row justify-content-center"
      v-for="(but, index) in deviceSetting().col2"
      :key="index"
      >
      <div>
        <VibeButton class="btn"
          type="submit" form="form"
          >Замер {{text(but)}}</VibeButton >
      </div>
  </div>
  </div>
</div>
<slot />
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'
  import {computed }from 'vue'
  const store = useStore()

var devices={"ЭСУ-436":store.getters.setting_436,
        "ЭРРД-436":store.getters.setting_errd436,
        "ЭСУ-222":store.getters.setting_222,
      }
const { deviceSetting} = computed(() => ({
  deviceSetting: () => { return devices[store.getters.getTitle]},
  })).value

  function text(but){
    return Object.keys(but).length===1 ? but.gen1.ch1.gz + " Гц " + but.gen1.ch1.U + " В " +
            but.gen1.ch2.gz + " " + but.gen1.ch2.U : but.gen1.ch1.gz + " Гц " + but.gen1.ch1.U + " В " +
            but.gen1.ch2.gz + " " + but.gen1.ch2.U + " " + but.gen2.ch1.gz +
             " " + but.gen2.ch1.U 
    }
</script>

<style>
  .btn {
    width: 120px;
    margin: 5px;

        }
</style>
