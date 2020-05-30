<template>
    <div class="container">
          <app-header></app-header>
      <hr>
      <div class="class row">
          <div class="class col-md-12">
              <transition name="slide" mode="out-int"> 
               <router-view></router-view>  
              </transition>   
          </div>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
    created() {
        this.$store.dispatch('initStocks',);
    },
    components: {
        appHeader: Header
    }
}
</script>

<style scoped>
.slide-enter {
    opacity: 0;    
}
.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active{
    animation: slide-out ease-out forwards;

}

@keyframes slide-n {
   from{
       transform: translateY(-30px);
       
   } 
   to{
       transform: translateY(0);
       
   }
}
@keyframes slide-out {
     from{
       transform: translateY(0);
       
   } 
   to{
       transform: translateY(-30px);
       
   } 
    
}

</style>

