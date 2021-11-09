<template>
  <div class="banner">
    <template v-if="bannerData.length">
      <el-carousel style="height: 100%; width: 100%;">
        <el-carousel-item v-for="item in bannerData"
                          :key="item.id"
                          style="height: 100%;">
          <div class="img-bag"
               :style="`background: url(${item.imgValue})`"></div>
        </el-carousel-item>
      </el-carousel>
    </template>
    <lazy-img v-else></lazy-img>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import request from '../http/request'
import LazyImg from '../components/LazyImg.vue'
export default defineComponent({
  name: 'Banner',
  components: {
    LazyImg,
  },
  setup() {
    const bannerData = ref([])
    const getBannerData = function () {
      request('/banner').then((data) => {
        // console.log('data', data)
        bannerData.value = data
      })
    }

    getBannerData()

    return {
      bannerData,
    }
  },
})
</script>

<style lang="scss">
.banner {
  position: relative;
  width: 100% !important;
  height: 100% !important;
  margin-bottom: 50px;

  .el-carousel__container {
    width: 100%;
    height: 100%;

    .img-bag {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
