<template>
    <div class="card">
        <h6>{{title}}</h6>
        <pre>
            <code class="code user-select-all">{{ sqlCode }}</code>
        </pre>
    </div>
</template>

<script>
export default {
    props:['title', 'sqlCode']
}
</script>