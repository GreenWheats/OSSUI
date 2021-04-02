import Vue from 'vue';
import Router from 'vue-router';
import login from "@/pages/login";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [    //  所有页面需要注册
        {
            path: '/',
            name: 'login',
            component: login,
            meta: {
                title: '登录',
                keepAlive: true
            }
        }
    ]
})