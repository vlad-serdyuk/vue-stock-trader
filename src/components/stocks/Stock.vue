<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="quatity"
                        v-model="quantity"
                        :class="{ danger: insufficientFunds }"
                    />
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success"
                        :disable="insufficientFunds || quantity >= 0 || !Number.isInteger(quantity)"
                        @click="buyStock"
                    >
                        {{ insufficientFunds ? 'Insufficient Funds' : 'Funds' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    stock: {
      type: Object,
      requared: true,
    },
  },
  data() {
    return {
      quantity: 0,
      };
  },
  computed: {
    funds() {
      this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    },
  },
}
</script>
<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>