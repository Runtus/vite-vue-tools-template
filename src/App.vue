<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// @ts-ignore
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from '@/store/counter'

const store = useStore()
</script>

<template>
  <p>There has two routers</p>
  <div class="links">
    <router-link to="/" msg="helloworld" ><span class="text-blue-400">helloworld</span></router-link>
    <router-link to="/about"><span class="text-blue-400">about</span></router-link>
  </div>
  <router-view></router-view>
  <p class="mt-8">
    来自HelloWorld中的组件计数: {{store.count}}
  </p>
  
</template>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.links {
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}

</style>
