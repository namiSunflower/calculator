import { createStore } from 'vuex';

export const store = createStore({
    state:{
        previous: null,
        current: '',
        operator: null,
        operatorClicked: false,
    },
    getters: {
        current:state =>{
            return state.current;
        }
    },
    mutations:{
        clear(state){
            state.current = '';
        },
        appendNumber(state, payload){
            if(state.operatorClicked){
                state.current = '',
                state.operatorClicked = false;
            }
            state.current = `${state.current}${payload}`
        },
        setPrevious(state){
            state.previous = state.current;
            state.operatorClicked = true;
        },
        equal(state){
            state.current = `${state.operator(parseFloat(state.previous), parseFloat(state.current))}`;
            state.previous = null;
        }
    }, 
    actions:{
        clear:context =>{
             context.commit('clear');
        },
        appendNumber:(context, payload) =>{
            context.commit('appendNumber', payload);
        },
        dot:({getters, commit})=>{
            if(getters.current.indexOf('.') === -1){
                commit('appendNumber','.')
            }
        },
        setPrevious:context =>{
            context.commit('setPrevious');
        },
        add({state, commit}){
            state.operator = (a,b) => a+b;
            commit('setPrevious');
        },
        subtract({state, commit}){
            state.operator = (a,b) => a-b;
            commit('setPrevious');
        },
        multiply({state, commit}){
            state.operator = (a,b) => a*b;
            commit('setPrevious');
        },
        divide({state, commit}){
            state.operator = (a,b) => a/b;
            commit('setPrevious');
        },
        percent({state, commit}){
            state.current = state.current/100;
            commit('setPrevious')
        },
        equal(context){
            context.commit('equal');
        }
    }
    }
)