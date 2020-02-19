const vm = new Vue({
    el: '#app',
    data() {
        return {
            info: {},
            products: {}
        }
    },
    mounted() {
        axios.get('nuts.json').then(response => {
            this.info = JSON.parse(JSON.stringify(response.data));
            this.products = JSON.parse(this.info);
        })
            .catch(error => {
                console.error(error.response.data);
            })
    }
});