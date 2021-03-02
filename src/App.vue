<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
import TheFooter from "./components/footer/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
    TheFooter,
  },
  data() {
    return {
      lwjglItems: [
        { id: "l1", packageName: "org.lwjgl", path: "/lwjgl" },
        { id: "l2", packageName: "org.lwjgl.assimp", path: "/lwjgl/assimp" },
        { id: "l3", packageName: "org.lwjgl.bgfx", path: "/lwjgl/bgfx" },
        { id: "l4", packageName: "org.lwjgl.cuda", path: "/lwjgl/cuda" },
        { id: "l5", packageName: "org.lwjgl.egl", path: "/lwjgl/egl" },
        { id: "l6", packageName: "org.lwjgl.glfw", path: "/lwjgl/glfw" },
        { id: "l7", packageName: "org.lwjgl.llvm", path: "/lwjgl/llvm" },
        { id: "l8", packageName: "org.lwjgl.nanovg", path: "/lwjgl/nanovg" },
        { id: "l9", packageName: "org.lwjgl.nuklear", path: "/lwjgl/nuklear" },
        { id: "l10", packageName: "org.lwjgl.odbc", path: "/lwjgl/odbc" },
        { id: "l11", packageName: "org.lwjgl.openal", path: "/lwjgl/openal" },
        { id: "l12", packageName: "org.lwjgl.opencl", path: "/lwjgl/opencl" },
        { id: "l13", packageName: "org.lwjgl.opengl", path: "/lwjgl/opengl" },
        {
          id: "l14",
          packageName: "org.lwjgl.opengles",
          path: "/lwjgl/opengles",
        },
        { id: "l15", packageName: "org.lwjgl.openvr", path: "/lwjgl/openvr" },
        { id: "l16", packageName: "org.lwjgl.ovr", path: "/lwjgl/ovr" },
        { id: "l17", packageName: "org.lwjgl.stb", path: "/lwjgl/stb" },
        { id: "l18", packageName: "org.lwjgl.system", path: "/lwjgl/system" },
        {
          id: "l19",
          packageName: "org.lwjgl.system.dyncall",
          path: "/lwjgl/system/dyncall",
        },
        {
          id: "l20",
          packageName: "org.lwjgl.system.jawt",
          path: "/lwjgl/system/jawt",
        },
        {
          id: "l21",
          packageName: "org.lwjgl.system.jemalloc",
          path: "/lwjgl/system/jemalloc",
        },
        {
          id: "l22",
          packageName: "org.lwjgl.system.jni",
          path: "/lwjgl/system/jni",
        },
        {
          id: "l23",
          packageName: "org.lwjgl.system.libc",
          path: "/lwjgl/system/libc",
        },
        {
          id: "l24",
          packageName: "org.lwjgl.system.linux",
          path: "/lwjgl/system/linux",
        },
        {
          id: "l25",
          packageName: "org.lwjgl.system.macosx",
          path: "/lwjgl/system/macosx",
        },
        {
          id: "l26",
          packageName: "org.lwjgl.system.rpmalloc",
          path: "/lwjgl/system/rpmalloc",
        },
        {
          id: "l27",
          packageName: "org.lwjgl.system.windows",
          path: "/lwjgl/system/windows",
        },
        {
          id: "l28",
          packageName: "org.lwjgl.util.libdivide",
          path: "/lwjgl/util/libdivide",
        },
        {
          id: "l29",
          packageName: "org.lwjgl.util.lmdb",
          path: "/lwjgl/util/lmdb",
        },
        {
          id: "l30",
          packageName: "org.lwjgl.util.lz4",
          path: "/lwjgl/util/lz4",
        },
        {
          id: "l31",
          packageName: "org.lwjgl.util.meow",
          path: "/lwjgl/util/meow",
        },
        {
          id: "l32",
          packageName: "org.lwjgl.util.nfd",
          path: "/lwjgl/util/nfd",
        },
        {
          id: "l33",
          packageName: "org.lwjgl.util.opus",
          path: "/lwjgl/util/opus",
        },
        {
          id: "l34",
          packageName: "org.lwjgl.util.par",
          path: "/lwjgl/util/par",
        },
        {
          id: "l35",
          packageName: "org.lwjgl.util.remotery",
          path: "/lwjgl/util/remotery",
        },
        {
          id: "l36",
          packageName: "org.lwjgl.util.shaderc",
          path: "/lwjgl/util/shaderc",
        },
        {
          id: "l37",
          packageName: "org.lwjgl.util.simd",
          path: "/lwjgl/util/simd",
        },
        {
          id: "l38",
          packageName: "org.lwjgl.util.tinyexr",
          path: "/lwjgl/util/tinyexr",
        },
        {
          id: "l39",
          packageName: "org.lwjgl.util.tinyfd",
          path: "/lwjgl/util/tinyfd",
        },
        {
          id: "l40",
          packageName: "org.lwjgl.util.tootle",
          path: "/lwjgl/util/tootle",
        },
        {
          id: "l41",
          packageName: "org.lwjgl.util.vma",
          path: "/lwjgl/util/vma",
        },
        {
          id: "l42",
          packageName: "org.lwjgl.util.xxhashs",
          path: "/lwjgl/util/xxhashs",
        },
        {
          id: "l43",
          packageName: "org.lwjgl.util.yoga",
          path: "/lwjgl/util/yoga",
        },
        {
          id: "l44",
          packageName: "org.lwjgl.util.zstd",
          path: "/lwjgl/util/zstd",
        },
        { id: "l45", packageName: "org.lwjgl.vulkan", path: "/lwjgl/vulkan" },
      ],
    };
  },
  provide() {
    return {
      lwjglItems: this.lwjglItems,
    };
  },
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
