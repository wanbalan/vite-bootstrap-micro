<template>
<div class="container">
  <row>
    <div class="col col-md-12 pb-3">
      <div class="card border border-primary shadow-0 ">
        <div class="card-header">Генератор</div>
        <div class="card-body">

          <VibeFormGroup >
            <div class="row">
              <div class="col">
             <VibeFormRadio
              v-model="picked"
              name="myGroup"
              value="SOUR1"
              label="CH1"
            />
              </div>
              <div class="col">
            <VibeFormRadio
              v-model="picked"
              name="myGroup"
              value="SOUR2"
              label="CH2"
            />
              </div>
            </div>
            <VibeFormInput
            class="pb-1"
            @keyup.enter="sendCommand"
            v-model="g1_freq"
            :validationState="g1_freq_valid"
            validationMessage='Значение дожно быть числом'
            placeholder="Частота, Гц"
            />
            <VibeFormInput
            @keyup.enter="sendCommand"
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
  </row>
</div>
</template>

<script setup lang="ts">
import { validators } from '@velkymx/vibeui'
import { ref, computed } from 'vue'
const picked = ref('SOUR1')
  var g1_freq=ref("")
  var g1_volt=ref("")
  var g1_freq_valid=computed(()=>(Number(g1_freq.value || g1_freq.value== "") ? "null" : "invalid")) 
  var g1_volt_valid=ref("null")
  function sendCommand(data){
  }
</script>
