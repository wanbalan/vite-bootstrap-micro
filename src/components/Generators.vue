<template>
<div class="container-fluid pb-2 px-0">
  <div class="row">
            <div class="col  col-sm ">
              <div class="card shadow-0  border-warning">
                <div class="card-header">Точная настройка, mV</div>
                <div class="card-body">
                <div class="row row-cols-5 ">
                  <div class="col">
                    <div class="row">
                      <vibe-icon type="button" @click="incrementL0" icon="arrow-up-short" class="fs-4 p-1  py-0  bs-primary"></vibe-icon>
                      <vibe-icon @wheel.prevent="w_incrementL0" :icon="store.l0+'-circle'" class="fs-3 p-1 py-0 text-success"></vibe-icon>
                      <vibe-icon type="button" @click="decrementL0" icon="arrow-down-short" class="fs-4 p-1 py-0 "></vibe-icon>
                    </div>
                  </div>
                  <div class="col">
                    <div class="row">
                      <vibe-icon type="button"  @click="incrementL1" icon="arrow-up-short" class="fs-4 p-1   py-0 bs-primary"></vibe-icon>
                      <vibe-icon @wheel.prevent="w_incrementL1" :icon="store.l1+'-circle'" class="fs-3 p-1 py-0 text-success"></vibe-icon>
                      <vibe-icon type="button"  @click="decrementL1" icon="arrow-down-short" class="fs-4 p-1 py-0 "></vibe-icon>
                    </div>
                  </div>
                  <div class="col">
                    <div class="row">
                      <vibe-icon type="button"  @click="incrementL2" icon="arrow-up-short" class="fs-4 p-1  py-0  bs-primary"></vibe-icon>
                      <vibe-icon @wheel.prevent="w_incrementL2" :icon="store.l2+'-circle'" class="fs-3 p-1 py-0 text-success"></vibe-icon>
                      <vibe-icon type="button"  @click="decrementL2" icon="arrow-down-short" class="fs-4 p-1 py-0 "></vibe-icon>
                    </div>
                  </div>
                <div class="col">
                  <div class="row">
                    <vibe-icon type="button"  @click="incrementL3" icon="arrow-up-short" class="fs-4 p-1  py-0 "></vibe-icon>
                    <vibe-icon @wheel.prevent="w_incrementL3" :icon="store.l3+'-circle'" class="fs-3 p-1 py-0 text-success"></vibe-icon>
                    <vibe-icon type="button"  @click="decrementL3" icon="arrow-down-short" class="fs-4 p-1 py-0 "></vibe-icon>
                  </div>
                </div>
                <div class="col">
                  <div class="row">
                    <vibe-icon type="button" @click="incrementL4" icon="arrow-up-short" class="fs-4 p-1 py-0 "></vibe-icon>
                    <vibe-icon @wheel.prevent="w_incrementL4" :icon="store.l4+'-circle'" class="fs-3 p-1 py-0 text-danger"></vibe-icon>
                    <vibe-icon type="button" @click="decrementL4" icon="arrow-down-short" class="fs-4 p-1 py-0 "></vibe-icon>
                  </div>
                </div>
                </div>
              </div>
            </div>
</div>


</div>
  </div>

        
<div class="container-fluid px-0 ">
  <div class="row">
    <div class="col col-md-12 pb-2 ">
      <div class="card border border-primary shadow-0">
        <div class="card-header">Генератор</div>
        <div class="card-body">

          <VibeFormGroup >
            <div class="row row-cols-2">
              <div class="col">
             <VibeFormRadio
              v-model="g1_picked"
              name="G1"
              value="SOUR1"
              label="CH1"
            />
              </div>
              <div class="col">
            <VibeFormRadio
              v-model="g1_picked"
              name="G1"
              value="SOUR2"
              label="CH2"
            />
              </div>
            </div>
            <VibeFormInput
            class="pb-1"
            @keyup.enter="g1_sendCommand"
            v-model.trim="g1_freq"
            :validationState="g1_freq_valid"
            validationMessage='Значение дожно быть числом'
            placeholder="Частота, Гц"
            />
            <VibeFormInput
            @keyup.enter="g1_sendCommand"
            v-model.trim="g1_volt"
            :validationState="g1_volt_valid"
            validationMessage='Значение дожно быть числом от 0 до 20'
            placeholder="Напряжение, В"
            />
          </VibeFormGroup>

        
        </div>
      </div>
    </div>
    <div class="col col-md-12 pb-2">
      <div class="card border border-success shadow-0 ">
        <div class="card-header">Генератор</div>
        <div class="card-body ">

          <VibeFormGroup >
            <div class="row row-cols-2">
              <div class="col ">
             <VibeFormRadio
              v-model="g2_picked"
              name="G2"
              value="SOUR1"
              label="CH1"
            />
              </div>
              <div class="col">
            <VibeFormRadio
              v-model="g2_picked"
              name="G2"
              value="SOUR2"
              label="CH2"
            />
              </div>
            </div>
            <VibeFormInput
            class="pb-1"
            @keyup.enter="g2_sendCommand"
            v-model.trim="g2_freq"
            :validationState="g2_freq_valid"
            validationMessage='Значение дожно быть числом'
            placeholder="Частота, Гц"
            />
            <VibeFormInput
            @keyup.enter="g2_sendCommand"
            v-model.trim="g2_volt"
            :validationState="g2_volt_valid"
            validationMessage='Значение дожно быть числом от 0 до 20'
            placeholder="Напряжение, В"
            />
          </VibeFormGroup>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/MapStore'
const store = useCounterStore()
import { ref, computed, } from 'vue'
  const g1_picked = ref('SOUR1')
  const g2_picked = ref('SOUR1')

  var g1_freq=ref("")
  var g1_volt=ref("")
  var g2_freq=ref("")
  var g2_volt=ref("")
  var w_incrementL0=(event)=>event.deltaY < 0 ? incrementL0() : decrementL0()
  var w_incrementL1=(event)=>event.deltaY < 0 ? incrementL1() : decrementL1() 
  var w_incrementL2=(event)=>event.deltaY < 0 ? incrementL2() : decrementL2() 
  var w_incrementL3=(event)=>event.deltaY < 0 ? incrementL3() : decrementL3() 
  var w_incrementL4=(event)=>event.deltaY < 0 ? incrementL4() : decrementL4() 
  var incrementL0=()=>store.change_last_volt(1*1000)
  var decrementL0=()=> store.before_change(0) ? store.change_last_volt(-1*1000) : false
  var incrementL1=()=>store.change_last_volt(1*100)
  var decrementL1=()=>store.before_change(1) ? store.change_last_volt(-1*100) : false
  var incrementL2=()=>store.change_last_volt(1*10)
  var decrementL2=()=>store.before_change(2) ? store.change_last_volt(-1*10) : false
  var incrementL3=()=>store.change_last_volt(1*1)
  var decrementL3=()=>store.before_change(3) ? store.change_last_volt(-1*1) : false
  var incrementL4=()=>store.change_last_volt(1*0.1)
  var decrementL4=()=>store.before_change(4) ? store.change_last_volt(-1*0.1) : false
  var g1_freq_valid=computed(()=>Number(g1_freq.value) || g1_freq.value== "" ? "null" : "invalid") 
  var g1_volt_valid=computed(()=>(Number(g1_volt.value) <= 20 || g1_volt.value=="" ) ? "null" : "invalid") 


  var g2_freq_valid=computed(()=>Number(g2_freq.value) || g2_freq.value== "" ? "null" : "invalid") 
  var g2_volt_valid=computed(()=>(Number(g2_volt.value) <= 20 || g2_volt.value=="" ) ? "null" : "invalid") 

  function g1_sendCommand(){
    var command=`${g1_picked.value}:`
    if (g1_freq.value != "" && g1_volt.value != "" && g1_volt_valid.value != "invalid" && g1_freq_valid.value != "invalid"){
      command+=`APPL:SIN ${g1_freq.value},${g1_volt.value}\r\n`
    }
    else if (g1_freq.value != "" && g1_volt.value == "" && g1_freq_valid.value != "invalid"){
      command+=`APPL:SIN ${g1_freq.value}\r\n`
    }
    else if (g1_freq.value == "" && g1_volt.value != "" && g1_volt_valid.value != "invalid" ){
      command+=`VOLT ${g1_volt.value}\r\n`
    }
    else{
      console.log("ни одно условие не совпало")
      return
      
    }
    if (g1_volt_valid.value != "invalid"){
      console.log("g1_freq_valid.value : ", g1_freq_valid.value )
      store.sendPostRequest(command, "generator-one")
      }
    // console.log("send: ", data) //
    g1_volt.value=""
    g1_freq.value=""
  }

  function g2_sendCommand(){
    var command=`${g2_picked.value}:`
    if (g2_freq.value != "" && g2_volt.value != "" && g2_volt_valid.value != "invalid" && g2_freq_valid.value != "invalid"){
      command+=`APPL:SIN ${g2_freq.value},${g2_volt.value}\r\n`
    }
    else if (g2_freq.value != "" && g2_volt.value == "" && g2_freq_valid.value != "invalid"){
      command+=`APPL:SIN ${g2_freq.value}\r\n`
    }
    else if (g2_freq.value == "" && g2_volt.value != "" && g2_volt_valid.value != "invalid" ){
      command+=`VOLT ${g2_volt.value}\r\n`
    }
    else{
      console.log("ни одно условие не совпало")
      return
      
    }
    if (g2_volt_valid.value != "invalid"){
      console.log("g2_freq_valid.value : ", g2_freq_valid.value )
      store.sendPostRequest(command, "generator-one")
      }
    // console.log("send: ", data) //
    g2_volt.value=""
    g2_freq.value=""
  }
</script>
