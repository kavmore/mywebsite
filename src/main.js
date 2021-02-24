import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
// import TheCurtain from './components/curtain/TheCurtain.vue'
// import TheJava from './components/Java/TheJava.vue'
// import TheMySql from './components/mysql/TheMySql.vue'
// import TheJudo from './components/judo/TheJudo.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

const TheCurtain = ()=> import('./components/curtain/TheCurtain.vue');
const TheJava = ()=> import('./components/Java/TheJava.vue');
const TheMySql = ()=> import('./components/mysql/TheMySql.vue');
const TheJudo = () => import('./components/judo/TheJudo.vue');
const TheC =() => import('./components/C/TheC.vue');
const TheMath = () => import('./components/math/TheMath.vue');
const TheUser = () => import('./components/login/TheUser.vue');

const router = createRouter({
    routes:[
        { path: '/', component: TheCurtain, meta:{title:'Home'}},
        { path: '/java', component: TheJava, meta:{title:'Java'}},
        { path: '/mysql', component: TheMySql, meta:{title:'SQL'}},
        { path: '/judo', component: TheJudo, meta:{title:'柔道'}},
        { path: '/C', component: TheC, meta:{title:'C'} },
        { path: '/math', component: TheMath, meta:{title:'数学'}},
        { path: '/user', component: TheUser, meta:{title:'用户'}}
    ],
    history: createWebHistory()
})

router.beforeEach((to,from,next)=>{
    if(to.meta.title){
        document.title = to.meta.title;
    }
    next();
})
const app = createApp(App);
app.use(router);
app.mount('#app');
