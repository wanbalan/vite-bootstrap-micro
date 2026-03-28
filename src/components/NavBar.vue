<template>
<div class="p-3 m-0 border-0 bd-example m-0 border-0">
<nav class="navbar bg-body-tertiary fixed-top" data-bs-theme="dark">
  <div class="container-fluid">
    <h3 class="navbar-brand" :navTitle="name">{{ name }}</h3>
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
            @click="classShow(item)"
             v-for="item in items"
             :key="item.id">
            <a class="nav-link" aria-current="page"
             href="#">{{ item.name }}
            </a>
        </ul>
     </div>
    </div>
  </div>
</nav>
</div>
</template>


<script>
  export default {
  emits:["clickDev"],
  props:["name","devNames"],
  data() {
    return {
      items:[
      {id:1, name:"ЭСУ-222" },
      {id:2, name:"ЭСУ-436"},
      {id:3, name:"ЭРРД-436"}],
    }  
  },
  methods:{
    classShow(item){
      this.$emit('clickDev', item)
      this.$refs.btnShow.click()
      }
    },
   }
</script>


<style  scoped>
  #offcanvasNavbar {
    width : 40%;
  }
</style>
