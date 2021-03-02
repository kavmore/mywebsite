<template>
  <base-lwjgl>
    <template #title> org.lwjgl包 </template>
    <template #description>
      <p>基础LWJGL包，包含所有与其他包的绑定功能。</p>
      <p>
        LWJGL是一个Java库，它允许我们跨平台性地访问开发中常用的图形(OpenGL)，音频(OpenAl)和并行计算(OpenCL)API。这种访问是直接且高性能的，而且被封装成类型安全和用户友好性看，适合Java生态系统。
      </p>
      <p>
        LWJGL是一种促成技术，提供了底层访问。它不是框架，不提供高级功能。所以新手程序员应该先尝试使用LWJGL开发的其中一种框架或游戏引擎，在来直接接触该库。
      </p>
      <p>LWJGL是开源软件，免费使用。</p>
      <p>LWJGL网址<a href="https://www.lwjgl.org/">www.lwjgl.org</a></p>
    </template>
    <template #class-table>
      <tr>
        <th>BufferUtils</th>
        <td>这个类可以让你更容易且安全地使用直接缓存区</td>
      </tr>
      <tr>
        <th>CLongBuffer</th>
        <td>这个类是C语言的long型数据的容器</td>
      </tr>
      <tr>
        <th>PointerBuffer</th>
        <td>这个类是结构独立指针数据的容器</td>
      </tr>
      <tr>
        <th>Version</th>
        <td>这个类用来查找LWJGL的版本</td>
      </tr>
    </template>
    <template #enum-table>
      <tr>
        <th>Version.BuildType</th>
        <td>当前建造的开发状态</td>
      </tr>
    </template>
  </base-lwjgl>
</template>

<script>
import BaseLwjgl from "../BaseLwjgl";

export default {
  components: { BaseLwjgl },
};
</script>