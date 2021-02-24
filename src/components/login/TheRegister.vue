<template>
    <base-login-card class="card">
        <template #welcome>
            <h6>如果没有账号请先注册</h6>
        </template>
        <template #input>
            <input type="text" name="text" id="nickNameInput" placeholder="昵称">
            <input type="email" name="email" id="emailInput" placeholder="EmailAddress"/>
            <input type="password" name="password" id="passwordInput" placeholder="Password"/>
        </template>
        <template #btntype>
            <button type="submit">注册</button>
        </template>
    </base-login-card>
</template>

<script>
import BaseLoginCard from '../UI/BaseLoginCard';

export default {
    components:{BaseLoginCard}
}
</script>

<style scoped>
.card {
    width: 400px;
}

input {
    margin-bottom: 10px;
}

button {
  margin: 10px;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}
</style>

