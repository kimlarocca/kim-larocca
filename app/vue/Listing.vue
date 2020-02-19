<template>
    <div id="app">
        <div v-for="data in myJson">{{data}}</div>
    </div>
</template>

<script>
    import json from 'nuts.json'
    export default{
        data(){
            return{
                myJson: json
            }
        }
    }
</script>

<style lang="scss">
    /*@import './variables.scss';*/

    *, *::before, *::after {
        box-sizing: border-box;
    }

    #app {
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.4;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1 {
        text-align: center;
    }
</style>