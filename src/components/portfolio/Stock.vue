<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(price: {{ stock.price }} | Quatity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number"
                        class="form-control"
                        placeholder="quatity"
                        v-model="quantity"
                        :class="{ danger: insufficientQuantity }"
                    />
                </div>
                <div class="pull-right">
                    <button 
                      class="btn btn-success"
                      :disable="insufficientQuantity || quantity >= 0 || !Number.isInteger(quantity)"
                      @click="sellStock"
                    >
                      {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { mapActions } from 'vuex';

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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({ placeSellOrder: 'sellStock' }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.placeSellOrder(order);
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