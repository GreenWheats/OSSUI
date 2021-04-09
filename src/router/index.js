import Vue from 'vue';
import Router from 'vue-router';
import login from "@/pages/login";
import logout from "@/pages/logout";
import OSSList from "@/pages/OSSList";

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
        },{
            path: '/logout',
            name: 'logout',
            component: logout,
            meta: {
                title: '登出',
                keepAlive: true
            }
        },{
            path: '/OSSList',
            name: 'OSSList',
            component: OSSList,
            meta: {
                title: 'OSS列表',
                keepAlive: true
            }
        }
    ]
})
