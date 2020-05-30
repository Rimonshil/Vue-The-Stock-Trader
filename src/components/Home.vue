<template>
    <div>
        <h1>Trade or view portfolio</h1>
        <h6>you may save & load data</h6>
        <h6>Click on End Day to begin a new day</h6>
        <p>Funds: {{ funds | currency}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>