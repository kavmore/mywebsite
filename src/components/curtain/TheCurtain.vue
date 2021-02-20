<template>
    <div id="background"></div>
</template>

<style scoped>
#background {
  background: url('../../assets/showcase-coding.jpg') no-repeat center/cover;
  height: 95vh;
  position: relative;
}

#background::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
</style>