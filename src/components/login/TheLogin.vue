<template>
    <base-login-card class="card">
        <template #welcome>
            <h6>欢迎</h6>
        </template>
        <template #input>
            <input type="email" name="email" id="emailInput" placeholder="EmailAddress"/>
            <input type="password" name="password" id="passwordInput" placeholder="Password"/>
        </template>
        <template #checkboxLabel>
            <div style="display: grid; grid-template-columns: 1fr 1fr;" id="rememberMe">
                <input type="checkbox" name="checkbox" id="checkbox">
                <label for="checkbox">记住我</label>
            </div>
        </template>
        <template #forgotPass>
            <label>忘记密码？</label>
        </template>
        <template #btntype>
            <button type="submit">登录</button>
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

button {
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  margin: 10px;
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

#rememberMe {
    margin: 10px;
}
</style>

