import Vue from 'vue' import VueRouter from 'vue-router' import Home from
'../views/Home.vue' Vue.use(VueRouter) const routes = [ { path: '/', name:
'Home', component: Home } // { // path: '/portfolio', // name: 'Portfolio', //
// route level code-splitting // component: () => import(/* webpackChunkName:
"portfolio" */ '../views/Portfolio.vue') // } ] const router = new VueRouter({
mode: 'history', base: process.env.BASE_URL, routes }) export default router
