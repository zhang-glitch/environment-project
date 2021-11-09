<template>
  <div class="list-b-img">
    <template v-if="bImgUrl">
      <div class="b-img-wrapper"
           :style="{background: `url(${bImgUrl})`}"></div>
      <div class="introduction"
           v-if="introduction">
        {{introduction}}
      </div>
      <div class="cover"
           v-else>
        <div class="item-background"
             :style="{background: `url(${bImgUrl})`}"></div>
      </div>
    </template>
    <lazy-img v-else></lazy-img>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LazyImg from '../components/LazyImg.vue'

export default defineComponent({
  name: 'Home',
  components: {
    LazyImg,
  },
  props: {
    bImgUrl: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss">
.list-b-img {
  box-sizing: border-box !important;
  margin: 0 auto;
  width: 90%;
  height: 300px;
  position: relative;

  .b-img-wrapper {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-sizing: border-box;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    filter: blur(5px);
    object-fit: cover;
  }

  .introduction {
    position: absolute;
    top: 150px;
    right: 60px;
    background: radial-gradient(
      circle at center,
      rgba(112, 184, 9, 0.3) 0%,
      rgba(112, 184, 9, 0.8) 30%
    );
    padding: 30px;
    width: 300px;
    color: #ffffff;
    font-size: 18px;
    box-sizing: content-box;
    border-radius: 20px;
  }

  .cover {
    width: 400px;
    height: 270px;
    position: absolute;
    right: 100px;
    top: 185px;
    padding: 20px;
    background: #fff;
    z-index: 2;
    box-sizing: border-box;

    .item-background {
      width: 100%;
      height: 100%;
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      animation: fadein 1s linear;
    }
  }
}
</style>
