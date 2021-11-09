<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>


<script>
import Header from './components/Header.vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    Header,
  },
  setup() {
    const router = useRouter()
    // 改变文章标题
    router.beforeEach((to, from, next) => {
      console.log('to', to)
      next()
    })
  },
}
</script>

<style lang="scss">
@import './assets/style/reset.scss';
@import './assets/style/base.scss';

html,
body {
  width: 100%;
  height: 100%;
  #app {
    width: 100%;
    height: 100%;

    .app {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
