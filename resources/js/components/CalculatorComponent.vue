<template>
    <div class="calculator">
        <div class="display">{{ current || 0 }}</div>
        <div class="btn" @click="append(7)">7</div>
        <div class="btn" @click="append(8)">8</div>
        <div class="btn" @click="append(9)">9</div>
        <div class="btn operator" @click="add">+</div>
        <div class="btn" @click="append(4)">4</div>
        <div class="btn" @click="append(5)">5</div>
        <div class="btn" @click="append(6)">6</div>
        <div class="btn operator" @click="subtract">-</div>
        <div class="btn" @click="append(1)">1</div>
        <div class="btn" @click="append(2)">2</div>
        <div class="btn" @click="append(3)">3</div>
        <div class="btn operator" @click="multiply">x</div>
        <div class="btn" @click="clear">C</div>
        <div class="btn" @click="append(0)">0</div>
        <div class="btn" @click="equal">=</div>
        <div class="btn operator">/</div>
        <div class="btn bottom1" @click="dot">.</div>
        <div class="btn operator bottom2">%</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                current: '',
                previous: null,
                operator: null,
                operatorClicked: false,
            }
        },
        methods:{
            clear(){
                this.current = '';
            },
            append(number){
                if(this.operatorClicked){
                    this.current = '';
                    this.operatorClicked = false;
                }
                this.current = `${this.current}${number}`;
            },
            dot(){
                if (this.current.indexOf('.') === -1){
                    this.append('.');
                }
            },
            setPrevious(){
                this.previous = this.current;
                this.operatorClicked = true;
            },
            add(){
                this.operator = (a,b) => a+b;
                this.setPrevious();
            },
            subtract(){
                this.operator = (a,b) => a-b;
                this.setPrevious();
            },
            multiply(){
                this.operator = (a,b) => a*b;
                this.setPrevious();
            },
            divide(){
                this.operator = (a,b) => a/b;
                this.setPrevious();
            },
            equal(){
                this.current = `${this.operator(parseFloat(this.previous), parseFloat(this.current))}`;
                this.previous = null;
            }

        },
        mounted() {
            console.log('Component mounted.')
        }, 
        computed:{
            output(){
                return this.$store.getters.result;
            },
            tester(){
                return this.$store.getters.tester;
            }
        }
    }
</script>
<style scoped>
.calculator{
    margin: 0 auto;
    width: 400px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minxmax(50px, auto);
}
.display{
    padding:15px;
    text-align: center;
    grid-column: 1 / 5;
    background-color:#333;
    color:white;
}
.btn{
    background-color: #eee;
    border: 1px solid #999;
}
.bottom1{
    grid-column:1/3;
}
.bottom2{
    grid-column:3/5;
}
.operator{
    background-color:orange;
    color:white;
}
</style>
