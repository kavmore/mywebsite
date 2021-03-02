<template>
  <div class="container-xl">
    <div id="loginReg">
      <div id="label">
        <label
          @click="setSelectedComponent('the-login')"
          :class="{ color: toggle }"
          id="lbLogin"
          >登录</label
        >
        <label
          @click="setSelectedComponent('the-register')"
          :class="{ color: !toggle }"
          id="lbReg"
          >注册</label
        >
      </div>
      <component :is="currenComponent"></component>
    </div>
  </div>
</template>

<script>
import TheLogin from "../login/TheLogin.vue";
import TheRegister from "../login/TheRegister.vue";

export default {
  components: {
    TheLogin,
    TheRegister,
  },
  data() {
    return {
      currenComponent: "the-login",
      toggle: true,
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.currenComponent = component;
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.container-xl {
  min-height: calc(100vh - 140px);
  color: #666c71;
  margin-top: 200px;
}

#label {
  margin: 0 auto;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.26), -5px 0px 5px rgba(0, 0, 0, 0.26),
    0px -5px 5px rgba(0, 0, 0, 0.26);
  border-radius: 12px 12px 0 0;
}

label {
  margin: 0 auto;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  width: 100%;
  text-align: center;
}

#lbLogin {
  border-radius: 12px 0 0 0;
}

#lbReg {
  border-radius: 0 12px 0 0;
}

label.color {
  background-color: #0076bb;
  color: #fff;
}
</style>
