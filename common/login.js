const LoginComponent = Vue.component('Login', function(resolve, reject) {
    // 可以请求一个html文件，既然存放模板还是html文件存放比较好
    axios.get("/common/login.html").then(function(res) {
        resolve({
            template: res.data,
            data() {
                return {
                    title: '极拍',
                    userName: 'zhagsan',
                    passwd: '12314124'
                }
            },
            mounted() {
                const info = loginCookie.getInfo()
                if (info) {
                    $router.push({ path: '/' })
                }
            },
            methods: {
                login: function() {
                    if (!this.userName) {
                        $toast.show('请输入用户名', 1000)
                        return
                    }
                    if (!this.passwd) {
                        $toast.show('请输入密码', 1000)
                        return
                    }
                    const params = {
                        userName: this.userName
                    }
                    loginCookie.login(params, 600)
                }
            }
        })
    });
});

const loginCookie = {
    login: function(value, seconds) {
        cookie.set('user-info', JSON.stringify(value), seconds)
    },
    logout: function() {
        cookie.delete('user-info')
    },
    getInfo: function() {
        var userInfo = cookie.get('user-info')
        if (userInfo) {
            return JSON.parse(userInfo)
        }
        return null
    }
}


//添加一个请求拦截器
axios.interceptors.request.use(function(config) {
    //在请求发出之前进行一些操作
    const loginInfo = loginCookie.getInfo()
    if (loginInfo === null ) {
        $router.push({ path: '/login' })
    }
    return config;
}, function(err) {
    //Do something with request error
    return Promise.reject(error);
});

//添加一个响应拦截器
axios.interceptors.response.use(function(res) {
    //在这里对返回的数据进行处理
    return res;
}, function(err) {
    //Do something with response error
    return Promise.reject(error);
})

const loginRouter = [{ path: '/login', component: LoginComponent }]