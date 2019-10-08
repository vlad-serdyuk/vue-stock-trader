<template>
    <div class="container">
        <Header />
        <div class="row">
            <router-view></router-view>
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
</style>
