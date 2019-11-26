import Router from 'vue-router'


// 解决vue项目路由出现message: "Navigating to current location (XXX) is not allowed"的问题
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: resolve => (require(['./views/index.vue'], resolve)),
            children: [
                {
                    path: '/button',
                    component: resolve => (require(['./views/button.vue'], resolve))
                },
                {
                    path: '/layout',
                    component: resolve =>(require(['./views/layout.vue'], resolve))
                }
            ]
        },
    ]
})