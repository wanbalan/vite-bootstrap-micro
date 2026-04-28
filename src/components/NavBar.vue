<template>
<div class="p-4 m-2 ">
<nav class="shadow navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div class="container-fluid">
    <vibe-icon type="button" @click="store.battery_info()" :icon="store.battery_icon['icon']" :class="store.battery_icon['color']" class="fs-2 p-1"></vibe-icon>
    <a type="button" class="navbar-brand" @click="clickOnDevice(store.title)"><strong>
      <h3> {{ store.title}} </h3>
    </strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Агрегаты</h5><br />
         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3"
             v-for="item, id in Object.keys(devices)"
             :key="id">
             <a @click="clickOnDevice(item)" class="nav-link" aria-current="page"
             href="#">{{ item }}
            </a>
        </ul>
     </div>
    <div class="row row-cols-2  m=0 p=0">
      <div class="col">
      <VibeFormSwitch
      class="text-muted mx-2 "
      v-model="store.telnet_active"
      label="telnet"
      :validationState="checktelnet" />
      </div>
    <div class="col">
      <VibeFormSwitch
      class="text-muted mx-2 "
      v-model="store.ftp_active"
      label="ftpd"
      :validationState="checkftp" />
    </div>
    </div>
    </div>
  </div>
</nav>
</div>
</template>


<script setup lang="ts">
import { useCounterStore } from '../store/MapStore'
const store = useCounterStore()
import {computed, }from 'vue'

var checktelnet=computed(()=> {
  store.telnet_toggle(store.telnet_active ? "start" : "stop")
  return null
})

var checkftp=computed(()=> {
  store.ftp_toggle(store.ftp_active ? "start" : "stop")
  return null
})

var clickOnDevice=(item)=>{
  var el= document.getElementsByClassName("btn-close")[0]  as HTMLElement
  el.click()
  store.title=item
  store.showed=[]
  store.showed2=[]
}
var devices={
      "ЭСУ-436":store.setting_436,
      "ЭРРД-436":store.setting_errd436,
      "ЭСУ-222":store.setting_222,
      "ЭРРД-1700":store.setting_1700,
      "ЭСУ-222-1":store.setting_esu_222_1,
      "ЭРРД-18-200-80":store.setting_errd_18_200_80,
    }
</script>


<style scoped>
      #offcanvasNavbar {
        width : 20%;
      }
   @media (max-width: 500.98px) {
      #offcanvasNavbar {
        width : 55%;
      }
    }
</style>
