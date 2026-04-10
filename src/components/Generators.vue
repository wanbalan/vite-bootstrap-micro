<template>
<div class="container-fluid pb-2 px-0">
  <div class="row">
            <div class="col  col-sm ">
              <div class="card shadow-0  border-warning">
                <div class="card-header">Точная настройка</div>
                <div class="card-body">
                <div class="row row-cols-5 ">
                  <div class="col">
                    <div class="row">
                      <vibe-icon type="button" @click="incrementL0" icon="arrow-up-square" class="fs-4 p-1  bs-primary"></vibe-icon>
                      <vibe-icon :icon="store.l0+'-circle'" class="fs-3 p-1 text-success"></vibe-icon>
                      <vibe-icon type="button" @click="decrementL0" icon="arrow-down-square" class="fs-4 p-1"></vibe-icon>
                    </div>
                  </div>
                  <div class="col">
                    <div class="row">
                      <vibe-icon type="button"  @click="incrementL1" icon="arrow-up-square" class="fs-4 p-1  bs-primary"></vibe-icon>
                      <vibe-icon :icon="store.l1+'-circle'" class="fs-3 p-1 text-success"></vibe-icon>
                      <vibe-icon type="button"  @click="decrementL1" icon="arrow-down-square" class="fs-4 p-1"></vibe-icon>
                    </div>
                  </div>
                  <div class="col">
                    <div class="row">
                      <vibe-icon type="button"  @click="incrementL2" icon="arrow-up-square" class="fs-4 p-1  bs-primary"></vibe-icon>
                      <vibe-icon :icon="store.l2+'-circle'" class="fs-3 p-1 text-success"></vibe-icon>
                      <vibe-icon type="button"  @click="decrementL2" icon="arrow-down-square" class="fs-4 p-1"></vibe-icon>
                    </div>
                  </div>
                <div class="col">
                  <div class="row">
                    <vibe-icon type="button"  @click="incrementL3" icon="arrow-up-square" class="fs-4 p-1 "></vibe-icon>
                    <vibe-icon :icon="store.l3+'-circle'" class="fs-3 p-1 text-success"></vibe-icon>
                    <vibe-icon type="button"  @click="decrementL3" icon="arrow-down-square" class="fs-4 p-1"></vibe-icon>
                  </div>
                </div>
                <div class="col">
                  <div class="row">
                    <vibe-icon type="button" @click="incrementL4" icon="arrow-up-square" class="fs-4 p-1 "></vibe-icon>
                    <vibe-icon :icon="store.l4+'-circle'" class="fs-3 p-1 text-danger"></vibe-icon>
                    <vibe-icon type="button" @click="decrementL4" icon="arrow-down-square" class="fs-4 p-1"></vibe-icon>
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
            v-model="g1_freq"
            :validationState="g1_freq_valid"
            validationMessage='Значение дожно быть числом'
            placeholder="Частота, Гц"
            />
            <VibeFormInput
            @keyup.enter="g1_sendCommand"
            v-model="g1_volt"
            :validationState="g1_volt_valid"
            validationState='null'
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
            v-model="g2_freq"
            :validationState="g2_freq_valid"
            validationMessage='Значение дожно быть числом'
            placeholder="Частота, Гц"
            />
            <VibeFormInput
            @keyup.enter="g2_sendCommand"
            v-model="g2_volt"
            :validationState="g2_volt_valid"
            validationState='null'
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
import { ref, computed, watch } from 'vue'
  
  const g1_picked = ref('SOUR1')
  const g2_picked = ref('SOUR1')
  // var g1_input1=ref(0) //
  // var g1_input2=ref(0) //
  // var g1_input3=ref(0) //
  // var g1_input4=ref(0) //
  var g1_freq=ref("")
  var g1_volt=ref("")
  var g2_freq=ref("")
  var g2_volt=ref("")
  var incrementL0=()=>store.l0+=1
  var decrementL0=()=>store.l0-=1
  var incrementL1=()=>store.l1+=1
  var decrementL1=()=>store.l1-=1
  var incrementL2=()=>store.l2+=1
  var decrementL2=()=>store.l2-=1
  var incrementL3=()=>store.l3+=1
  var decrementL3=()=>store.l3-=1
  var incrementL4=()=>store.l4+=1
  var decrementL4=()=>store.l4-=1
  var g1_freq_valid=computed(()=>Number(g1_freq.value )|| g1_freq.value== "" ? "null" : "invalid") 
  var g1_volt_valid=computed(()=>(Number(g1_volt.value) || g1_volt.value== "")  &&  (g1_volt.value <= 20 && g1_volt.value >= 0) ? "null" : "invalid") 
  // var g1_input1_valid=computed(()=>(Number(g1_input1.value) || g1_input1.value== "")  &&  (g1_input1.value <= 20 && g1_input1.value >= 0) ? "null" : "invalid") // 
  // var g1_input2_valid=computed(()=>(Number(g1_input2.value) || g1_input2.value== "")  &&  (g1_input2.value <= 10 && g1_input2.value >= 0) ? "null" : "invalid") // 
  var g2_freq_valid=computed(()=>Number(g2_freq.value )|| g2_freq.value== "" ? "null" : "invalid") 
  var g2_volt_valid=computed(()=>(Number(g2_volt.value) || g2_volt.value== "")  &&  g2_volt.value <= 20 ? "null" : "invalid") 
  function g1_sendCommand(){
    var command=`${g1_picked.value}:`
    if (g1_freq.value != "" && g1_volt.value != "" && g1_volt_valid.value != "invalid" && g1_freq_valid.value != "invalid"){
      command+=`SIN ${g1_freq.value.trim()},${g1_volt.value.trim()}\r\n`
    }
    else if (g1_freq.value != "" && g1_volt.value == "" && g1_freq_valid.value != "invalid"){
      command+=`SIN ${g1_freq.value.trim()}\r\n`
    }
    else if (g1_freq.value == "" && g1_volt.value != "" && g1_volt_valid.value != "invalid" ){
      command+=`VOLT ${g1_volt.value.trim()}\r\n`
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
    if (g2_freq.value != "" && g2_volt.value != ""){
      command+=`SIN ${g2_freq.value.trim()},${g2_volt.value.trim()}\r\n`
    }
    else if (g2_freq.value != "" && g2_volt.value == ""){
      command+=`SIN ${g2_freq.value.trim()}\r\n`
    }
    else if (g2_freq.value == "" && g2_volt.value != ""){
      command+=`VOLT ${g2_volt.value.trim()}\r\n`
    }
    else{
      console.log("ни одно условие не совпало")
      return
      }
    store.sendPostRequest(command, "generator-two")
    // console.log("send: ", data) //
    g2_volt.value=""
    g2_freq.value=""
  }
</script>
