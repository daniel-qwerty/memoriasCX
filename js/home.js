const app = new Vue({
    el: "#app",
    data: {
        data: Object
    },
    methods: {},
    mounted() {
        axios.get("/data.json").then(response => {
            this.data = response.data;
        });
    }
});