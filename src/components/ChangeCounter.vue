<template>
    <button @click="inc">Add 2</button>
    <button @click="increase({value:11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne() {
        //     // this.$store.state.counter++;
        //     this.$store.dispatch('increment');
        // }
        // ...mapActions(['increment', 'increase']) //other way
        ...mapActions('numbers',{
            inc: 'increment',
            increase: 'increase'
        })
    }
}
</script>