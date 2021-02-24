<template>
    <nav class="navbar navbar-expand-md bg-navbar fixed-up d-flex justify-content-center align-items-center">
        <!-- <div id="sidebar">
          <the-side-bar></the-side-bar>
        </div> -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link text-white">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/java" class="nav-link text-white">Java</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/C" class="nav-link text-white">C++</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/mysql" class="nav-link text-white">MySQL</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/judo" class="nav-link text-white">柔道</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/math" class="nav-link text-white">Math</router-link>
            </li>
            <li class="nav-item">
                <div :class="{search : true, active: toggle}">
                    <input type="text" class="input" placeholder="Search.....">
                    <button type="button" class="btn" @click="toggleSearch">
                        <i class="fa fa-search text-white"></i>
                    </button>
                </div>
            </li>
        </ul>
        <button type="button" class="btn btn-outline-light pl-xl-4 pr-xl-4" id="login" @click="userLogin">登录</button>
    </nav>
</template>

<script>
// import TheSideBar from './TheSideBar.vue'

export default {
    data(){
        return{
            toggle: false
        }
    },
    methods:{
        toggleSearch(){
            this.toggle = !this.toggle;
        },
        userLogin(){
          this.$router.push('/user');
        }
    },
    components:{
        // TheSideBar
    }
}
</script>

<style scoped>
[v-cloak] {
 display: none;
}

#sidebar {
  position: absolute;
  left: 0px;
  top: 0px;
}

/* 导航栏 */
.navbar {
  background-color: #2f2f2f;
  padding: 0;
  position: relative;
}

.navbar a {
  height: 100%;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar a:hover {
  opacity: 1;
  border-bottom: 2px solid #fff;
}

.navbar-nav {
  height: 5vh;
}

.navbar-nav li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}

/* 登录按钮 */
#login {
  position: absolute;
  color: #fff;
  right: 2rem;
}

#login:hover {
  color: #000;
  transition: color ease 1s;
}

/* 搜索栏 */
.search {
  position: relative;
  height: 5vh;
  opacity: 0.7;
}

.search:hover {
  opacity: 1;
}

.search .input {
  height: 5vh;
  width: 50px;
  border: 0;
  font-size: 18px;
  padding: 15px;
  transition: width 0.3s ease;
}

.search .btn {
  position: absolute;
  background-color: #2f2f2f;
  border: 0;
  cursor: pointer;
  font-size: 18px;
  top: 0;
  left: 0;
  height: 5vh;
  width: 50px;
  transition: transform 0.3s ease;
  border-radius: 0;
}

.search .input:focus,
.search .btn:focus {
  box-shadow: none;
  outline: 0;
}

.search.active .input {
  width: 200px;
}

.search.active .btn {
  transform: translateX(198px);
}

@media (max-width: 768px){
  li.nav-item{
    display: none;
  }
}

</style>