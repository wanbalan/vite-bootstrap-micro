<template >
<div class="row">
  <div class="col">
    <h1 ><strong >{{ deviceSetting().col1Title}}</strong></h1>
    <vibe-icon type="button" icon="plugin" class="fs-2 text-primary"></vibe-icon>
    <vibe-button-group size="sm" class="me-2">
        <vibe-button variant="outline-secondary">Share</vibe-button>
        <vibe-button variant="outline-secondary">Export</vibe-button>
    </vibe-button-group>
    <vibe-icon v-show="store.list_one_collumn" type="button" icon="plugin" class="fs-2 text-success"></vibe-icon>
    <div class="row justify-content-center"
        v-for="(but, index) in deviceSetting().col1 "
        :key="index"
        >
      <div>
          <vibe-button-group class="me-2">
            <VibeButton 
              type="submit" form="form"
                @click="clickOnButtonFromOneColumn(index, but, 1)">
                <div v-html="text(but)"></div>
                <vibe-icon type="button" v-show="store.getShowed2[index]" icon="check-circle-fill" class="me-2 "></vibe-icon>
            </VibeButton>
          </vibe-button-group>
      </div>
    </div>
  </div>

  <div class="col">
    <h1 ><strong>{{ deviceSetting().col2Title}}</strong></h1>
    <vibe-icon v-show="!store.list_one_collumn" type="button" :class="store.getTitle == 'ЭСУ-436' ? 'text-primary' : 'text-success'" icon="plugin" class="fs-2"></vibe-icon>
    <vibe-button-group size="sm" class="me-2">
      <vibe-button variant="outline-secondary">Share</vibe-button>
      <vibe-button variant="outline-secondary">Export</vibe-button>
    </vibe-button-group>
    <div class="row justify-content-center" 
        v-for="but, index in deviceSetting().col2"
        :key="index"
        >
      <div>
        <VibeButton 
          type="submit" form="form"
            @click="store.commit('setShowedByindex', index)">
          <div v-html="text(but)"></div>
          <vibe-icon type="button" v-show="store.getShowed[index]" icon="check-circle-fill" class="me-2"></vibe-icon>
        </VibeButton >
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {computed,}from 'vue'
import { useCounterStore } from '../store/MapStore'
const store = useCounterStore()
  var devices={
        "ЭСУ-436":store.setting_436,
        "ЭРРД-436":store.setting_errd436,
        "ЭСУ-222":store.setting_222,
        "ЭСУ-222-1":store.setting_esu_222_1,
        "ЭРРД-18-200-80":store.setting_errd_18_200_80,
      }
const { deviceSetting,} = computed(() => ({
  deviceSetting: () => { return devices[store.getTitle]},
  })).value

  function text(but){
      if (store.getTitle == 'ЭСУ-436' || store.getTitle == 'ЭСУ-222' ){
          return Object.keys(but).length===1 ? but.gen1.ch1.gz + " Гц <br>" + 
                  but.gen1.ch2.gz  + " Гц " : but.gen2.ch1.gz + " Гц <br>" + but.gen2.ch1.U + " mV" 
        }
      else {
        return but.gen1.ch1.gz + " Гц <br>" + but.gen1.ch2.gz  + " Гц "
        }
    }
    function clickOnButtonFromOneColumn(index, but, _collumn){
      store.commit('setShowed2Byindex', index)
      if (store.getTitle == "ЭСУ-436"){
        store.dispatch('sendPostRequest', `SOUR1:APPL:SQU ${but.gen1.ch1.gz}.0e+0,${but.gen1.ch1.U}\n;:SOUR2:APPL:SQU ${but.gen1.ch2.gz}.0e+0,${but.gen1.ch2.U}\n`)
      }
      else {
        store.dispatch('sendPostRequest', `SOUR1:APPL:SIN ${but.gen1.ch1.gz}.0e+0,${but.gen1.ch1.U}\n;:SOUR2:APPL:SIN ${but.gen1.ch2.gz}.0e+0,${but.gen1.ch2.U}\n`)
        store.dispatch('sendPostRequest', `SOUR1:APPL:SIN ${but.gen2.ch1.gz}.0e+0,${but.gen2.ch1.U}mvrms\n;:SOUR2:APPL:SIN ${but.gen2.ch2.gz}.0e+0,${but.gen2.ch2.U}mvrms\n`)
        
      }
  }
  // .btn { //
    // width: 145px; //
    // margin: 5px; //
    // height:87px; //
        // } //
  // h1 { //
  // padding-bottom: 0px !important; // 
// } //
  // strong { //
    // color: rgb(173, 181, 189); //
  // } //
</script>

<style scope>

</style>
