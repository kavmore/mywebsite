<template>
    <button type="button" @click="toggleSide" :class="{active: toggle}">
        <div class="line line1"></div>
        <div class="line line2"></div>
    </button>
    <nav class="navbar" id="sidebar-wrapper" :class="{active: toggle}" role="navigation">
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
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
      return{
          toggle: false
      }
    },
    methods:{
      toggleSide(){
          this.toggle = !this.toggle;
      }
    }
}
</script>

<style scoped>
#sidebar-wrapper{
    background-color: #2f2f2f;
}

ul.navbar-nav {
    display: flex;
    flex-direction: column;
}

button {
    background-color: #2f2f2f;
    border: 0;
    cursor: pointer;
    padding: 0;
    position: absolute;
    left: 98px;
    height: 50px;
    width: 50px;
    transition: transform 0.5s ease;
}

button:focus {
    outline: 0;
}

.line {
    background-color: #5290f9;
    height: 2px;
    width: 25px;
    position: absolute;
    top: 33%;
    left: 20%;
}

.line1{
    transition: transform 0.5s linear;
}

.line2 {
    top: auto;
    bottom: 33%;
    transition: transform 0.5s linear;
}

button.active {
    transform: translateX(250px);
    transition: transform 0.5s ease;
}

button.active .line1 {
    transform: rotate(-45deg) translateX(-1.9px) translateY(9px);
    transition: transform 0.5s linear;
}

button.active .line2 {
    transform: rotate(45deg) translateX(-1.3px) translateY(-8px);
    transition: transform 0.5s linear;
}
</style>