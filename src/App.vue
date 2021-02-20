<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue'
import TheFooter from './components/footer/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheNavigation,
    TheFooter
  },
  data(){
    return {
      lwjglItems:[
        { id: 'l1', packageName:'org.lwjgl'},
        { id: 'l2', packageName:'org.lwjgl.assimp'},
        { id: 'l3', packageName:'org.lwjgl.bgfx'},
        { id: 'l4', packageName:'org.lwjgl.cuda'},
        { id: 'l5', packageName:'org.lwjgl.egl'},
        { id: 'l6', packageName:'org.lwjgl.glfw'},
        { id: 'l7', packageName:'org.lwjgl.llvm'},
        { id: 'l8', packageName:'org.lwjgl.nanovg'},
        { id: 'l9', packageName:'org.lwjgl.nuklear'},
        { id: '20', packageName:'org.lwjgl.odbc'},
        { id: '21', packageName:'org.lwjgl.openal'},
        { id: '22', packageName:'org.lwjgl.opencl'},
        { id: '23', packageName:'org.lwjgl.opengl'},
        { id: '24', packageName:'org.lwjgl.opengles'},
        { id: '25', packageName:'org.lwjgl.openvr'},
        { id: '26', packageName:'org.lwjgl.ovr'},
        { id: '27', packageName:'org.lwjgl.stb'},
        { id: '28', packageName:'org.lwjgl.system'},
        { id: '29', packageName:'org.lwjgl.system.dyncall'},
        { id: '30', packageName:'org.lwjgl.system.jawt'},
        { id: '31', packageName:'org.lwjgl.system.jemalloc'},
        { id: '32', packageName:'org.lwjgl.system.jni'},
        { id: '33', packageName:'org.lwjgl.system.libc'},
        { id: '34', packageName:'org.lwjgl.system.linux'},
        { id: '35', packageName:'org.lwjgl.system.macosx'},
        { id: '35', packageName:'org.lwjgl.system.rpmalloc'},
        { id: '35', packageName:'org.lwjgl.system.windows'},
        { id: '35', packageName:'org.lwjgl.util.libdivide'},
        { id: '35', packageName:'org.lwjgl.util.lmdb'},
        { id: '35', packageName:'org.lwjgl.util.lz4'},
        { id: '35', packageName:'org.lwjgl.util.meow'},
        { id: '35', packageName:'org.lwjgl.util.nfd'},
        { id: '35', packageName:'org.lwjgl.util.opus'},
        { id: '35', packageName:'org.lwjgl.util.par'},
        { id: '35', packageName:'org.lwjgl.util.remotery'},
        { id: '35', packageName:'org.lwjgl.util.shaderc'},
        { id: '35', packageName:'org.lwjgl.util.simd'},
        { id: '35', packageName:'org.lwjgl.util.tinyexr'},
        { id: '35', packageName:'org.lwjgl.util.tinyfd'},
        { id: '35', packageName:'org.lwjgl.util.tootle'},
        { id: '35', packageName:'org.lwjgl.util.vma'},
        { id: '35', packageName:'org.lwjgl.util.xxhashs'},
        { id: '35', packageName:'org.lwjgl.util.yoga'},
        { id: '35', packageName:'org.lwjgl.util.zstd'},
        { id: '35', packageName:'org.lwjgl.vulkan'}
      ]
    }
  },
  provide(){
    return {
      lwjglItems : this.lwjglItems,
    }
  }
}
</script>

<style>

</style>
