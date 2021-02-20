<template>
    <router-link class="drop-item" to="/t1">
        <slot>{{ packageName }}</slot>
    </router-link>
</template>

<script>
export default {
    props:{
        packageName:{
            type:String,
            required:true
        }
    }
}
</script>