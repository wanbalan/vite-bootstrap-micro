<template >
<div class="row">
  <div class="col">

    <h1 ><strong class="text-muted">{{ deviceSetting().col1Title}}</strong></h1>
          <vibe-icon type="button" icon="plugin" class="fs-2 text-primary p-1"></vibe-icon>
          <vibe-button-group size="sm" class="me-2 pb-2">
              <vibe-button @click="turn_one_output('GEN1_CH1')" variant="outline-secondary">CH1</vibe-button>
              <vibe-button @click="turn_one_output('GEN1_CH2')" variant="outline-secondary">CH2</vibe-button>
          </vibe-button-group>
          <div v-show="list_one_collumn" class="col">
            <vibe-icon v-show="list_one_collumn" type="button" icon="plugin" class="fs-2 text-success p-1"></vibe-icon>
            <vibe-button-group size="sm" class="me-2 pb-2">
              <vibe-button @click="turn_one_output('GEN2_CH1')" variant="outline-secondary">CH1</vibe-button>
              <vibe-button @click="turn_one_output('GEN2_CH2')" variant="outline-secondary">CH2</vibe-button>
            </vibe-button-group>
          </div>

      <div class="container p-1 justify-content-center "
          v-for="(but, index) in deviceSetting().col1 "
          :key="index">
        <VibeButton 
          class="col-8 col-sm-3 "
          type="submit" form="form"
            @click="clickOnButtonFromOneColumn(index, but, 1)">
            <div v-html="text(but)"></div>
            <vibe-icon type="button" v-show="store.showed2[index]" icon="check-circle-fill" class="me-2 "></vibe-icon>
        </VibeButton>
      </div>

  </div>

  <div class="col" v-show="!store.list_one_collumn" >
    <h1 ><strong class="text-muted">{{ deviceSetting().col2Title}}</strong></h1>
    <vibe-icon type="button" :class="store.title == 'ЭСУ-436' ? 'text-primary' : 'text-success'" icon="plugin" class="fs-2 p-1"></vibe-icon>
    <vibe-button-group size="sm" class="me-2 pb-2">
        <vibe-button variant="outline-secondary">CH1</vibe-button>
        <vibe-button variant="outline-secondary">CH2</vibe-button>
    </vibe-button-group>
    <div class="container p-1 justify-content-center" 
        v-for="but, index in deviceSetting().col2"
        :key="index"
        >
        <VibeButton 
          class="col-8 col-sm-3 "
          type="submit" form="form"
            @click="store.showed[index]=true">
          <div v-html="text(but)"></div>
          <vibe-icon type="button" v-show="store.showed[index]" icon="check-circle-fill" class="me-2"></vibe-icon>
        </VibeButton >
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
  deviceSetting: () => { return devices[store.title]},
  })).value

  function text(but){
      if (store.title == 'ЭСУ-436' || store.title == 'ЭСУ-222' ){
          return Object.keys(but).length===1 ? but.gen1.ch1.gz + " Гц <br>" + 
                  but.gen1.ch2.gz  + " Гц " : but.gen2.ch1.gz + " Гц <br>" + but.gen2.ch1.U + " mV" 
        }
      else {
        return but.gen1.ch1.gz + " Гц <br>" + but.gen1.ch2.gz  + " Гц "
        }
    }
    function clickOnButtonFromOneColumn(index, but, _collumn){
      store.showed2[index]=true
      if (store.title == "ЭСУ-436"){
        store.sendPostRequest(`SOUR1:APPL:SQU ${but.gen1.ch1.gz},${but.gen1.ch1.U};:SOUR2:APPL:SQU ${but.gen1.ch2.gz},${but.gen1.ch2.U}\r\n`, "generator-one")
      }
      else {
        store.sendPostRequest(`SOUR1:APPL:SIN ${but.gen1.ch1.gz},${but.gen1.ch1.U};:SOUR2:APPL:SIN ${but.gen1.ch2.gz},${but.gen1.ch2.U}\r\n`, "generator-one")
        store.sendPostRequest(`SOUR1:APPL:SIN ${but.gen2.ch1.gz},${but.gen2.ch1.U}mvrms;:SOUR2:APPL:SIN ${but.gen2.ch2.gz},${but.gen2.ch2.U}mvrms\r\n`, "generator-two")
        
      }
  }
  function turn_one_output(gen_and_chenal, generator){
    var command=store.get_command(gen_and_chenal)
    store.sendPostRequest(command, "generator-two")
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
