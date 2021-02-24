<template>
    <div class="container-xl">
        <div id="loginReg">
            <div id="label">
                <label @click="setSelectedComponent('the-login')" :class="{color:toggle}">登录</label>
                <label @click="setSelectedComponent('the-register')" :class="{color:!toggle}">注册</label>
            </div>
            <component :is="currenComponent"></component>
        </div>
    </div>
</template>

<script>
import TheLogin from '../login/TheLogin.vue'
import TheRegister from '../login/TheRegister.vue'

export default {
    components:{
        TheLogin,
        TheRegister
    },
    data(){
        return{
            currenComponent: 'the-login',
            toggle:true
        }
    },
    methods:{
        setSelectedComponent(component){
            this.currenComponent = component;
            this.toggle = !this.toggle;
        }
    }
}
</script>

<style scoped>
.container-xl {
    min-height: calc(100vh - 140px);
    color: #666c71;
    margin-top: 200px;
}

#label {
    margin: 0 auto;
    width: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

label {
    margin: 0 auto;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 100%;
    text-align: center;
}

label.color {
    background-color: #0076bb;
    color: #fff;
}


</style>
