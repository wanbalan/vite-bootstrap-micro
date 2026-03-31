<template >
<div class="row">
  <div class="col">
  <h1 ><strong >{{ deviceSetting().col1Title}}</strong></h1>
  <vibe-icon icon="plugin" class="fs-2 text-primary"></vibe-icon>
  <div class="row justify-content-center"
      v-for="(but, index) in deviceSetting().col1 "
      :key="index"
      >
      <div>
        <VibeButton class="btn"
          type="submit" form="form"
            @click="store.commit('setShowed2Byindex', index)">
            <div class="col" v-html="text(but)"> </div>
            <div class="col">
            <vibe-icon v-show="store.getters.getShowed2[index]" icon="check-circle-fill" class="me-2 "></vibe-icon>
            </div>
          </VibeButton>
      </div>
  </div>
  </div>
  <div class="col">
  <h1 ><strong>{{ deviceSetting().col2Title}}</strong></h1>
  <vibe-icon :class="store.getters.getTitle == 'ЭСУ-436' ? 'text-primary' : 'text-success'" icon="plugin" class="fs-2"></vibe-icon>
  <div class="row justify-content-center" 
      v-for="but, index in deviceSetting().col2"
      :key="index"
      >
      <div>
        <VibeButton class="btn"
          type="submit" form="form"
            @click="store.commit('setShowedByindex', index)">
            <div class="col" v-html="text(but)">
            </div>
            <div class="col">
            <vibe-icon v-show="store.getters.getShowed[index]" icon="check-circle-fill" class="me-2"></vibe-icon>
            </div>
          </VibeButton >
      </div>
  </div>
  </div>
</div>
<slot />
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'
  import {computed,}from 'vue'
  const store = useStore()

var devices={"ЭСУ-436":store.getters.setting_436,
        "ЭРРД-436":store.getters.setting_errd436,
        "ЭСУ-222":store.getters.setting_222,
        "ЭРРД-18-200-80":store.getters.setting_errd_18_200_80,
      }
const { deviceSetting} = computed(() => ({
  deviceSetting: () => { return devices[store.getters.getTitle]},
  })).value
  function text(but){
    return      Object.keys(but).length===1 ? but.gen1.ch1.gz + " Гц <br>" + 
            but.gen1.ch2.gz  + " Гц " : but.gen2.ch1.gz + " Гц <br>" + but.gen2.ch1.U + " mV" 
    // return Object.keys(but).length===1 ? but.gen1.ch1.gz + " Гц " + but.gen1.ch1.U + " В " + //
            // but.gen1.ch2.gz + " " + but.gen1.ch2.U : but.gen1.ch1.gz + " Гц " + but.gen1.ch1.U + " В " + //
            // but.gen1.ch2.gz + " " + but.gen1.ch2.U + " " + but.gen2.ch1.gz + //
             // " " + but.gen2.ch1.U // 
    }
</script>

<style scope>
  .btn {
    width: 120px;
    margin: 5px;
    height:87px;
        }
  h1 {
  padding-bottom: 0px !important; 
}
  strong {
    color: rgb(173, 181, 189);
  }
</style>
