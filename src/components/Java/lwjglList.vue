<template>
    <router-link class="drop-item" to="https://javadoc.lwjgl.org/overview-summary.html">
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