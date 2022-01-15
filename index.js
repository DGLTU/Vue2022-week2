
const app = Vue.createApp({
    data() {
        return {
            data: {
                "username": "",
                "password": ""
            },
        }
    },
    methods: {
        signIn() {
            if (this.checkForm()) return
            axios.post('https://vue3-course-api.hexschool.io/v2/admin/signin', this.data)
                .then((res) => {
                    console.log(res)
                    window.location="https://dgltu.github.io/vue2022-week2/admin.html"
                })
                .catch((err) => {
                    console.dir(err)
                    alert('你輸入的資訊有誤')
                    window.location = "https://dgltu.github.io/vue2022-week2/404.html"
                })
            document.querySelector("form").reset()
        },
        checkForm(){
            if(this.data.username==="" || this.data.password==""){
                return true
            }
        }
    },
})

app.mount("#app")