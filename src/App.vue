<script setup>
import Footer from "./components/footer.vue"
</script>

<template>
  <h1>首页</h1>
  <!-- 使用 router-link 组件进行导航 -->
  <!-- 通过传递 `to` 来指定链接 -->
  <!-- `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 -->
  <router-link to="/">Go to Home</router-link><br>
  <router-link to="/about">Go to About</router-link>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  
  <Footer></Footer>
</template>

<style scoped></style>