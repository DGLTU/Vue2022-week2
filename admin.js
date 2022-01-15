const app = Vue.createApp({
    data() {
        return {
            product:[],
            temp:{}
        }
    },
    mounted() {
        this.getToken()
        this.checkSignin()
        this.getProduct()
    },
    methods: {
        checkSignin(){
            axios.post('https://vue3-course-api.hexschool.io/v2/api/user/check')
                .catch((err)=>{
                    console.dir(err);
                    alert('請重新登入')
                    window.location="/index.html"
                })
        },
        getProduct(){
            axios.get('https://vue3-course-api.hexschool.io/v2/api/lesley588/admin/products/')
                .then((res)=>{
                    this.product=res.data.products
                })
                .catch((err)=>{
                    console.dir(err);
                })
        },
        getToken(){
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            axios.defaults.headers.common['Authorization'] = token;
        },
    },
})

app.mount("#app")