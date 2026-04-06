<template>
<div class="p-4 m-2 ">
<nav class="shadow navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div class="container-fluid">
    <a type="button" class="navbar-brand" @click="clickOnDevice(store.title)"> {{ store.title}}</a>
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
    </div>
  </div>
</nav>
</div>
</template>


<script setup lang="ts">
import { useCounterStore } from '../store/MapStore'
const store = useCounterStore()
// import {computed, }from 'vue' //

var clickOnDevice=(item)=>{
  store.title=item
  store.showed=[]
  store.showed2=[]
}
var devices={"ЭСУ-436":store.setting_436,
        "ЭРРД-436":store.setting_errd436,
        "ЭСУ-222":store.setting_222,
        "ЭСУ-222-1":store.setting_esu_222_1,
        "ЭРРД-18-200-80":store.setting_errd_18_200_80,
      }
</script>


<style scoped>
      #offcanvasNavbar {
        width : 15%;
      }
   @media (max-width: 500.98px) {
      #offcanvasNavbar {
        width : 35%;
      }
    }
</style>
