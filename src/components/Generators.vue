<template>
<div class="container-fluid pb-2 px-0">
  <div class="row">
    <div class="col  col-sm ">
      <div class="card shadow-0  border-warning">
        <div class="card-header">Подстройка, mV</div>
        <div class="card-body py-0">
          <AccuracityCh1/>
          <div>
            <div class="divider">
              <span class="divider-text">
                <vibe-icon @click="store.link_ch1_ch2=!store.link_ch1_ch2" :class="store.link_ch1_ch2 ? 'text-warning' : 'text-muted' " type="button" icon="link" class="fs-4 p-0 m-0 "></vibe-icon>
              </span>
            </div>
          </div>
          <AccuracityCh2/>
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
            pattern="[0-9]*"
            inputmode="numeric"
            type="number"
            class="pb-1"
            @keyup.enter="g1_sendCommand"
            v-model="g1_freq"
            :validationState="g1_freq_valid"
            validationMessage='Значение дожно быть числом больше 0'
            placeholder="Частота, Гц"
            />
            <VibeFormInput
            pattern="[0-9]*"
            inputmode="numeric"
            type="number"
            @keyup.enter="g1_sendCommand"
            v-model.number="g1_volt"
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
            pattern="[0-9]*"
            inputmode="numeric"
            type="number"
            class="pb-1"
            @keyup.enter="g2_sendCommand"
            v-model.number="g2_freq"
            :validationState="g2_freq_valid"
            validationMessage='Значение дожно быть числом больше 0'
            placeholder="Частота, Гц"
            />
            <VibeFormInput
            pattern="[0-9]*"
            inputmode="numeric"
            type="number"
            @keyup.enter="g2_sendCommand"
            v-model.number="g2_volt"
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
import AccuracityCh1 from './Accuracity_ch1.vue'
import AccuracityCh2 from './Accuracity_ch2.vue'
import { useCounterStore } from '../store/MapStore'
const store = useCounterStore()
import { ref, computed, } from 'vue'
  const g1_picked = ref('SOUR1')
  const g2_picked = ref('SOUR1')

  var g1_freq=ref("")
  var g1_volt=ref("")
  var g2_freq=ref("")
  var g2_volt=ref("")

  var g1_freq_valid=computed(()=>  (Number(g1_freq.value) > 0 || g1_freq.value== "" )? "null" : "invalid") 
  var g1_volt_valid=computed(()=>((Number(g1_volt.value) <= 20 && Number(g1_volt.value) > 0) || g1_volt.value=="" ) ? "null" : "invalid") 


  var g2_freq_valid=computed(()=>  (Number(g2_freq.value) > 0  || g2_freq.value== "" )? "null" : "invalid") 
  var g2_volt_valid=computed(()=>((Number(g2_volt.value) <= 20 && Number(g2_volt.value) > 0) || g2_volt.value=="" ) ? "null" : "invalid") 

  function g1_sendCommand(){
    var command=`${g1_picked.value}:`
    if (g1_freq.value != "" && g1_volt.value != "" && g1_volt_valid.value != "invalid" && g1_freq_valid.value != "invalid"){
      command+=`APPL:SIN ${g1_freq.value},${g1_volt.value}VPP\r\n`
    }
    else if (g1_freq.value != "" && g1_volt.value == "" && g1_freq_valid.value != "invalid"){
      command+=`APPL:SIN ${g1_freq.value}\r\n`
    }
    else if (g1_freq.value == "" && g1_volt.value != "" && g1_volt_valid.value != "invalid" ){
      command+=`VOLT ${g1_volt.value}VPP\r\n`
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
      command+=`APPL:SIN ${g2_freq.value},${g2_volt.value}VPP\r\n`
    }
    else if (g2_freq.value != "" && g2_volt.value == "" && g2_freq_valid.value != "invalid"){
      command+=`APPL:SIN ${g2_freq.value}\r\n`
    }
    else if (g2_freq.value == "" && g2_volt.value != "" && g2_volt_valid.value != "invalid" ){
      command+=`VOLT ${g2_volt.value}VPP\r\n`
    }
    else{
      console.log("ни одно условие не совпало")
        return
      
    }
    if (g2_volt_valid.value != "invalid"){
      console.log("g2_freq_valid.value : ", g2_freq_valid.value )
      store.sendPostRequest(command, "generator-two")
      }
    // console.log("send: ", data) //
    g2_volt.value=""
    g2_freq.value=""
  }
</script>


<style scoped>
.divider {
  display: flex;
  align-items: center;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #333;
}

.divider::before {
  margin-right: 10px;
}

.divider::after {
  margin-left: 10px;
}

.divider-text {
  white-space: nowrap;
}
</style>
