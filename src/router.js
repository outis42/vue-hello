import Router from 'vue-router'

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => (require(['./views/index.vue'], resolve))
        },
        {
            path: '/button',
            component: resolve => (require(['./views/button.vue'], resolve))
        },
        {
            path: '/layout',
            component: resolve =>(require(['./views/layout.vue'], resolve))
        }
    ]
})