<template>
  <div class="home">
    <Banner></Banner>
    <env-map></env-map>
    <Footer />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import EnvMap from '../components/EnvMap.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    EnvMap,
    Banner,
    Footer,
  },
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
