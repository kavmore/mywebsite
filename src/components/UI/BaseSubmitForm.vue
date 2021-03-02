<template>
  <form action="">
    <h6><slot name="welcome"></slot></h6>
    <slot name="input"></slot>
    <slot name="checkboxLabel"></slot>
    <slot name="forgotPass"></slot>
    <slot name="select"></slot>
    <button type="submit">
      <slot name="btntype"></slot>
    </button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 40rem;
  border-radius: 0px 0px 12px 12px;
  box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.26), -5px 0px 5px rgba(0, 0, 0, 0.26),
    0px 5px 5px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
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
</style>