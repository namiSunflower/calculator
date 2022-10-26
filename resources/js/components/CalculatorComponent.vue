<template>
    <div class="calculator">
        <div class="display">{{ output || 0 }}</div>
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
        <div class="btn operator" @click="divide">/</div>
        <div class="btn bottom1" @click="dot">.</div>
        <div class="btn operator" @click="percent">%</div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        methods:{
            clear:function(){
                this.$store.dispatch('clear');
            },
            append:function(number){
                this.$store.dispatch('appendNumber', number)
            },
            dot:function(){
                this.$store.dispatch('dot');
            },
            percent:function(){
                this.$store.dispatch('percent');
            },
            setPrevious:function(){
                this.$store.dispatch('setPrevious')
            },
            add:function(){
                this.$store.dispatch('add');
            },
            subtract:function(){
                this.$store.dispatch('subtract');
            },
            multiply:function(){
                this.$store.dispatch('multiply');
            },
            divide:function(){
                this.$store.dispatch('divide');
            },
            equal:function(){
                this.$store.dispatch('equal');
            }
        },
        mounted() {
            console.log('Component mounted.')
        }, 
        computed:{
            ...mapGetters([
                'output'
            ])
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
