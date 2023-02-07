export default {
    tesAuth(state,getters,rootState,rootGetters){
        console.log(state,getters,rootState,rootGetters);
        return state.isLoggedIn
    },
    finalCounter(state) { // finalCounter(state,getters). getters: getting other getters. if result of getter depends on other getters
        return state.counter * 3;
    },
    normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter;
        if(finalCounter < 0) {
            return 0;
        }
        if(finalCounter  > 100) {
            return 100;
        }
        return finalCounter;
    },
}