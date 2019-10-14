<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to='/' class="navbar-brand">Stock Trader</router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link to='/portfolio' tag="li" class="nav-item" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
                <router-link to='/stocks' tag="li" class="nav-item" activeClass="active"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <a href="#" @click="endDay">End Day</a>
            <div 
              class="dropdown"
              :class="{ open: isDropdownOpen }"
              @click="onDropdownClick"
            >
              <a>
                <ul class="dropdown-menu">
                  <li @click="onSaveData">Save data</li>
                  <li @click="onLoadData">Load data</li>
                </ul>
              </a>
            </div>
            <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        </div>
    </nav>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
      return {
        isDropdownOpen: false,
      };
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
    methods: {
      ...mapActions(['randomizeStocks', 'loadData']),
      endDay() {
        this.randomizeStocks();
      },

      onDropdownClick() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },

      onSaveData() {
        const { funds, stockPortfolio, stocks } = this.$store.getters;

        const data = {
          funds,
          stockPortfolio,
          stocks,
        };

        this.$http.put('data.json', data);
      },

      onLoadData() {
        this.loadData();
      },
    },
}
</script>