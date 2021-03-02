<template>
  <router-link class="drop-item" :to="javaLink">
    <slot>{{ packageName }}</slot>
  </router-link>
</template>

<script>
export default {
  props: {
    packageName: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  computed: {
    javaLink() {
      return "/java" + this.path;
    },
  },
};
</script>