import { createStore } from 'vuex';

export const store = createStore({
    state:{
        previous: null,
        current: '',
        operator: null,
        operatorClicked: false,
    },
    getters: {
        output:state =>{
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
            if(isNaN(state.current))
                state.current = `${payload}`
            else
                state.current = `${state.current}${payload}`
        },
        setPrevious(state){
            state.previous = state.current;
            state.operatorClicked = true;
        },
        add(state){
            state.operator = (a,b) => a+b;
        },
        subtract(state){
            state.operator = (a,b) => a-b;
        },
        multiply(state){
            state.operator = (a,b) => a*b;
        },
        divide(state){
            state.operator = (a,b) => (b !=0 ? a/b : state.current = `can't divide by zero`);
        },
        percent(state){
            state.current = state.current/100;
        },
        equal(state){
            if(state.previous !== '')
                state.current = `${state.operator(parseFloat(state.previous), parseFloat(state.current))}`;
            state.previous = '';
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
        add:({commit})=>{
            commit('setPrevious');
            commit('add');
        },
        subtract:({commit})=>{
            commit('setPrevious');
            commit('subtract');
        },
        multiply:({commit})=>{
            commit('setPrevious');
            commit('multiply');
        },
        divide:({commit})=>{
            commit('setPrevious');
            commit('divide');
        },
        percent:({commit})=>{
            commit('setPrevious');
            commit('percent');
        },
        equal(context){
            context.commit('equal');
        },
    }
    }
)