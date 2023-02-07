import { createApp } from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const counterModule = {
    namespaced:true,//namespace the module 
    state() {
        return {
            counter:0,
        }
    },
    mutations: {
        increment(state) {
            state.counter =  state.counter + 2;
        },
        increase(state, payload) {
            console.log(state);
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                console.log(context);
                context.commit('increment');                
            }, 2000);
        },
        increase(context,payload) {
            console.log(context);
            context.commit('increase',payload);    
        },
    },
    getters:{
        tesAuthe(state,getters,rootState,rootGetters){
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
}

const store =  createStore({
    modules: {
        numbers: counterModule 
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        
        setAuth(state,payload){
            state.isLoggedIn = payload.isAuth
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
})

const app = createApp(App);


app.use(store);
app.mount('#app');
