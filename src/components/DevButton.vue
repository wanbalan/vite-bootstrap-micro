<template >
  <div class="row justify-content-center"
      v-for="(but, index) in textBut"
      :key="index"
      >
      <div>
        <button class="btn"
          type="submit" form="form"
          :class="butColor.butCol[index]"
          @click="updateColor(index)" 
          >Замер {{text(but)}}</button>
      </div>
  </div>
<slot />
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
  const store = useStore()

  const { deviceSetting } = computed(() => ({
    deviceSetting: ()=> store.getters.setting[store.getters.title]
    })).value

  function text(but){
    return Object.keys(but).length===1 ? but.gen1.ch1.gz + " Гц " + but.gen1.ch1.U + " В " +
            but.gen1.ch2.gz + " " + but.gen1.ch2.U : but.gen1.ch1.gz + " Гц " + but.gen1.ch1.U + " В " +
            but.gen1.ch2.gz + " " + but.gen1.ch2.U + " " + but.gen2.ch1.gz +
             " " + but.gen2.ch1.U 
    }
</script>

<style scoped>
  .btn {
    width: 120px;
    margin: 5px;

        }
</style>
