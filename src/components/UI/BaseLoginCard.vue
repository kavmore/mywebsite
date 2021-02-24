<template>
    <form action="" @submit.prevent="">
        <slot name="welcome"></slot>
        <slot name="input"></slot>
        <slot name="checkboxLabel"></slot>
        <slot name="forgotPass"></slot>
        <slot name="btntype"></slot>
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
        box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.26), -5px 0px 5px rgba(0, 0, 0, 0.26) , 0px 5px 5px rgba(0, 0, 0, 0.26);
        padding: 2rem;
        background-color: #ffffff;
    }
</style>