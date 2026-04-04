<template >
<div class="row">
  <div class="col">
  <h1 ><strong >{{ deviceSetting().col1Title}}</strong></h1>
  <vibe-icon type="button" icon="plugin" class="fs-2 text-primary"></vibe-icon>
  <vibe-icon v-show="col1ShowIcon" type="button" icon="plugin" class="fs-2 text-success"></vibe-icon>
  <div class="row justify-content-center"
      v-for="(but, index) in deviceSetting().col1 "
      :key="index"
      >
      <div>
        <VibeButton class="btn"
          type="submit" form="form"
            @click="clickOnButtonFromOneColumn(index, but, 1)">
            <!-- <div class="col">Измерение {{index+1}}</div> -->
            <div class="col" v-html="text(but)"> </div>
            <div class="col">
            <vibe-icon type="button" v-show="store.getters.getShowed2[index]" icon="check-circle-fill" class="me-2 "></vibe-icon>
            </div>
          </VibeButton>
      </div>
  </div>
  </div>
  <div class="col">
  <h1 ><strong>{{ deviceSetting().col2Title}}</strong></h1>
  <vibe-icon v-show="col2ShowIcon" type="button" :class="store.getters.getTitle == 'ЭСУ-436' ? 'text-primary' : 'text-success'" icon="plugin" class="fs-2"></vibe-icon>
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
            <vibe-icon type="button" v-show="store.getters.getShowed[index]" icon="check-circle-fill" class="me-2"></vibe-icon>
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
        "ЭСУ-222-1":store.getters.setting_esu_222_1,
        "ЭРРД-18-200-80":store.getters.setting_errd_18_200_80,
      }
const { deviceSetting,} = computed(() => ({
// const { deviceSetting, col1ShowIcon,col2ShowIcon} = computed(() => ({ //
  deviceSetting: () => { return devices[store.getters.getTitle]},

    // col1ShowIcon:()=>{ //
    // if (store.getters.getTitle == 'ЭРРД-18-200-80' || store.getters.getTitle == 'ЭСУ-222-1'){ //
      // console.log("col1ShowIcon  true") //
      // return true //
      // } //
    // else { //
      // console.log("col1ShowIcon  true") //
      // return false //
      // } // 
    // }, //
    // col2ShowIcon:() => { //
    // if (store.getters.getTitle == 'ЭРРД-18-200-80' || store.getters.getTitle == 'ЭСУ-222-1'){ //
      // console.log("col1ShowIcon  true") //
      // return false //
      // } //
    // else { //
      // console.log("col1ShowIcon  true") //
      // return true //
      // } // 
    // } //
  
  })).value

  function text(but){
      if (store.getters.getTitle == 'ЭСУ-436' || store.getters.getTitle == 'ЭСУ-222' ){
          return Object.keys(but).length===1 ? but.gen1.ch1.gz + " Гц <br>" + 
                  but.gen1.ch2.gz  + " Гц " : but.gen2.ch1.gz + " Гц <br>" + but.gen2.ch1.U + " mV" 
        }
      else {
        return but.gen1.ch1.gz + " Гц <br>" + but.gen1.ch2.gz  + " Гц "
        }
    }
    function clickOnButtonFromOneColumn(index, but, _collumn){
      store.commit('setShowed2Byindex', index)
      if (store.getters.getTitle == "ЭСУ-436"){
        store.dispatch('sendPostRequest', `SOUR1:APPL:SQU ${but.gen1.ch1.gz}.0e+0,${but.gen1.ch1.U}\n;:SOUR2:APPL:SQU ${but.gen1.ch2.gz}.0e+0,${but.gen1.ch2.U}\n`)
      }
      else {
        store.dispatch('sendPostRequest', `SOUR1:APPL:SIN ${but.gen1.ch1.gz}.0e+0,${but.gen1.ch1.U}\n;:SOUR2:APPL:SIN ${but.gen1.ch2.gz}.0e+0,${but.gen1.ch2.U}\n`)
        store.dispatch('sendPostRequest', `SOUR1:APPL:SIN ${but.gen2.ch1.gz}.0e+0,${but.gen2.ch1.U}mvrms\n;:SOUR2:APPL:SIN ${but.gen2.ch2.gz}.0e+0,${but.gen2.ch2.U}mvrms\n`)
        
      }
    // function col1ShowIcon(){ //
    // if (store.getters.getTitle == 'ЭРРД-18-200-80' || store.getters.getTitle == 'ЭСУ-222-1'){ //
      // return true //
      // } //
    // else { //
      // return false //
      // } // 
    // } //
    // function col2ShowIcon(){ //
    // if (store.getters.getTitle == 'ЭРРД-18-200-80' || store.getters.getTitle == 'ЭСУ-222-1'){ //
      // return false //
      // } //
    // else { //
      // return true //
      // } // 
    // } //
  }
</script>

<style scope>
  .btn {
    width: 145px;
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
