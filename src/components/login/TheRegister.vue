<template>
  <base-submit-form class="card" @submit.prevent="submitForm">
    <template #welcome> 如果没有账号请先注册 </template>
    <template #input>
      <input
        type="text"
        name="text"
        id="nickNameInput"
        placeholder="昵称"
        v-model.trim="nickName"
        :class="{ inputError: nameValidity === 'invalid' }"
        @blur="validateName"
      />
      <p v-if="nameValidity === 'invalid'" style="margin-bottom: 0px">
        您需要输入昵称
      </p>
      <input
        type="email"
        name="email"
        id="emailInput"
        placeholder="EmailAddress"
        v-model.trim="emailInput"
        :class="{ inputError: emailValidity === 'invalid' }"
        @blur="validateEmail"
      />
      <p v-if="emailValidity === 'invalid'" style="margin-bottom: 0px">
        您需要输入邮箱
      </p>
      <input
        type="password"
        name="password"
        id="passwordInput"
        placeholder="Password"
        v-model.number="password"
        :class="{ inputError: passValidity === 'invalid' }"
        @blur="validatePass"
      />
      <p v-if="passValidity === 'invalid'" style="margin-bottom: 0px">
        您需要输入密码
      </p>
    </template>
    <template #select>
      <select v-model="gender" required>
        <option value="male">女</option>
        <option value="female">男</option>
      </select>
    </template>
    <template #btntype> 注册 </template>
  </base-submit-form>
</template>

<script>
import BaseSubmitForm from "../UI/BaseSubmitForm.vue";

export default {
  components: { BaseSubmitForm },
  data() {
    return {
      nickName: "",
      emailInput: "",
      password: "",
      gender: "male",
      nameValidity: "",
      emailValidity: "",
      passValidity: "",
    };
  },
  methods: {
    submitForm() {
      console.log("nickname" + this.nickName);
      console.log("emailInput" + this.emailInput);
      console.log("password" + this.password);
    },
    validateName() {
      if (this.nickName === "") {
        this.nameValidity = "invalid";
      } else {
        this.nameValidity = "valid";
      }
    },
    validateEmail() {
      if (this.emailInput === "") {
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

input {
  margin-top: 10px;
}

input.inputError {
  border-color: red;
}

select {
  margin-top: 10px;
}
</style>

