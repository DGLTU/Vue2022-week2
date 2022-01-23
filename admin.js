const app = Vue.createApp({
    data() {
        return {
            product:[],
            temp:{},
        }
    },
    created() {
        this.checkSignin()
    },
    methods: {
        checkSignin(){
            token : document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
            axios.defaults.headers.common['Authorization'] = token
            axios.post('https://vue3-course-api.hexschool.io/v2/api/user/check')
                .then((res)=>{
                    this.getProduct()
                })
                .catch((err)=>{
                    console.dir(err);
                    alert('請重新登入')
                    window.location="https://dgltu.github.io/vue2022-week2/index.html"
                })
        },
        getProduct(){
            axios.get('https://vue3-course-api.hexschool.io/v2/api/lesley588/admin/products/')
                .then((res)=>{
                    console.log(res.data);
                    this.product=res.data.products
                })
                .catch((err)=>{
                    console.dir(err);
                })
        },
    },
})

app.mount("#app")