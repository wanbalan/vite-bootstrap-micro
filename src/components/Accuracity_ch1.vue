
<template>
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
</template>


<script setup lang="ts">
  
import { useCounterStore } from '../store/MapStore'
const store = useCounterStore()
var w_incrementL0=(event)=>event.deltaY < 0 ? incrementL0() : decrementL0()
var w_incrementL1=(event)=>event.deltaY < 0 ? incrementL1() : decrementL1() 
var w_incrementL2=(event)=>event.deltaY < 0 ? incrementL2() : decrementL2() 
var w_incrementL3=(event)=>event.deltaY < 0 ? incrementL3() : decrementL3() 
var w_incrementL4=(event)=>event.deltaY < 0 ? incrementL4() : decrementL4() 
var incrementL0=()=>store.change_last_volt_ch1(1*1000)
var decrementL0=()=> store.before_change_ch1(0) ? store.change_last_volt_ch1(-1*1000) : false
var incrementL1=()=>store.change_last_volt_ch1(1*100)
var decrementL1=()=>store.before_change_ch1(1) ? store.change_last_volt_ch1(-1*100) : false
var incrementL2=()=>store.change_last_volt_ch1(1*10)
var decrementL2=()=>store.before_change_ch1(2) ? store.change_last_volt_ch1(-1*10) : false
var incrementL3=()=>store.change_last_volt_ch1(1*1)
var decrementL3=()=>store.before_change_ch1(3) ? store.change_last_volt_ch1(-1*1) : false
var incrementL4=()=>store.change_last_volt_ch1(1*0.1)
var decrementL4=()=>store.before_change_ch1(4) ? store.change_last_volt_ch1(-1*0.1) : false
</script>
