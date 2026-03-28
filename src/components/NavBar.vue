<template>
<div class="p-3 m-0 border-0 bd-example m-0 border-0">
<nav class="navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div class="container-fluid">
    <h3 class="navbar-brand" >{{ store.getters.title }}</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end "  tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Агрегаты</h5><br />
         <button ref="btnShow" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3"
             v-for="item in Object.keys(store.getters.setting)"
             :key="item.id">
            <a class="nav-link" aria-current="page"
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
import { useStore } from 'vuex'
const store = useStore()

</script>


<style scoped>
  #offcanvasNavbar {
    width : 40%;
  }
</style>
