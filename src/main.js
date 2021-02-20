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

const router = createRouter({
    routes:[
        { path: '/index.html', component: TheCurtain},
        { path: '/java', component: TheJava},
        { path: '/mysql', component: TheMySql},
        { path: '/judo', component: TheJudo}
    ],
    history: createWebHistory()
})

const app = createApp(App);
app.use(router);
app.mount('#app');
