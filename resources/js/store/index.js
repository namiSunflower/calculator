import { createStore } from 'vuex';

export const store = createStore({
    state:{
        previous: null,
        current: null,
        operator: null,
        operatorClicked: false
    },
    getters: {
        tester:state =>{
            return state.calculated;
        },
        result:state =>{
            return state.result;
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
        dot(state){
            if(state.current.indexOf('.') === -1){
                this.appendNumber('.')
            }
        },
        setPrevious(state){
            state.previous = state.current;
            state.operatorClicked = true;
        },
        add(state){
            state.operator = (a,b) => a+b;
            this.setPrevious();
        },
        subtract(state){
            state.operator = (a,b) => a-b;
            this.setPrevious();
        },
        multiply(state){
            state.operator = (a,b) => a*b;
            this.setPrevious();
        },
        divide(state){
            state.operator = (a,b) => (a/b);
            this.setPrevious();
        }
        // calculate: (state) =>{
        //     if (state.operator == '+'){}
        // }

    }, 
    // actions:{
    //     (){
            
    //     }
    // }
    }
)