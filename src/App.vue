<template>
  <div class="container">
    <Header />
    <div class="row">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
    
export default {
  components: {
    Header,
  },
  created() {
    this.$store.dispatch('initStocks');
  },
 }
</script>

<style>
body {
  padding: 0 30px;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
      transform: translateY(-30px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

</style>
