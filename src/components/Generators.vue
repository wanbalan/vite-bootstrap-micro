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
              value="one"
              label="CH1"
            />
              </div>
              <div class="col">
            <VibeFormRadio
              v-model="picked"
              name="myGroup"
              value="two"
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
const picked = ref('one')
  var g1_freq=ref("")
  var g1_volt=ref("")
  var g1_freq_valid=computed(()=>{
        console.log("f1 :")
        if (Number(g1_freq.value) > 10){
        return "null"
        }
        else {
          
        return "invalid"
        }
      }) 
  var g1_volt_valid=ref("null")
  function sendCommand(data){
    console.log(data, g1_freq.value, g1_volt.value)
    if (!isNaN(Number.parseInt(g1_freq.value))){
     g1_freq_valid.value="null"
     var  freq=Number(g1_freq.value)
      g1_freq.value=""
      }
    else if (!isNaN(Number.parseInt(g1_volt.value))){
     g1_volt_valid.value="null"
     var volt=Number(g1_volt.value)
      g1_volt.value=""
    }
    else {
        // console.log(error) //
        g1_freq_valid.value="invalid"
        // console.error('Ошибка при отправке запроса:', error); //
      }
  }
</script>
