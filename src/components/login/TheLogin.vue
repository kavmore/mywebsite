<template>
  <base-submit-form class="card" @submit.prevent="submitForm">
    <template #welcome> 欢迎 </template>
    <template #input>
      <input
        type="email"
        name="email"
        id="emailInput"
        placeholder="EmailAddress"
        v-model.trim="emailAddress"
        @blur="validateEmail"
        :class="{ inputError: emailValidity === 'invalid' }"
      />
      <p v-if="emailValidity === 'invalid'" style="margin-bottom: 0px">
        您需要输入有效的邮箱
      </p>
      <input
        type="password"
        name="password"
        id="passwordInput"
        placeholder="Password"
        v-model.number="password"
        ref="target"
        @blur="validatePass"
        :class="{ inputError: passValidity === 'invalid' }"
      />
      <p v-if="passValidity === 'invalid'" style="margin-bottom: 0px">
        您需要输入密码
      </p>
    </template>
    <template #checkboxLabel>
      <div
        id="checklabel"
        style="margin: 10px; display: grid; grid-template-columns: 1fr 1fr"
      >
        <input type="checkbox" name="rememberMe" id="checkbox" />
        <label for="checkbox">记住我</label>
      </div>
    </template>
    <template #forgotPass>
      <label>忘记密码？</label>
    </template>
    <template #btntype> 登录 </template>
  </base-submit-form>
</template>

<script>
import BaseSubmitForm from "../UI/BaseSubmitForm.vue";

export default {
  components: { BaseSubmitForm },
  data() {
    return {
      emailAddress: "",
      password: "",
      emailValidity: "",
      passValidity: "",
    };
  },
  methods: {
    submitForm() {
      // console.log('email is:' + this.emailAddress);
      // console.log('password is' + this.password + typeof this.password);
      // console.log('ref password is' + this.$refs.target.value + typeof this.$refs.target.value);
    },
    validateEmail() {
      if (this.emailAddress === "") {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "valid";
      }
    },
    validatePass() {
      if (this.password === "") {
        this.passValidity = "invalid";
      } else {
        this.passValidity = "valid";
      }
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 400px;
}

#checkbox {
  margin: auto;
}

label {
  margin-bottom: 0px;
}

input {
  margin-top: 10px;
}

input.inputError {
  border-color: red;
}
</style>

