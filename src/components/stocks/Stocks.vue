<template>
    <div>
        <Stock 
            v-for="stock in stocks"
            :stock="stock"
            :key="stock.id"
        />
    </div>
</template>
<script>
import Stock from './Stock.vue';

export default {
    components: {
        Stock,
    },
    data() {
        return {
            stocks: [
                {
                    id: 1,
                    name: 'Apple',
                    price: 100,
                },
                {
                    id: 2,
                    name: 'Goggle',
                    price: 100,
                },
            ],
        };
    },
}
</script>