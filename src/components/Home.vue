<template>
  <div>
    <h1>Trade or View your Prtfolio</h1>
      <h6>You may Save & Load your data</h6>
      <h6>Click on 'End Day' to begin a New Day!</h6>
      <hr>
      <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
}
</script>