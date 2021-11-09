<template>
  <div :class="{header: true, 'emphasize-header' : !isNomal}">
    <el-row class="header-item-wrapper">
      <el-col :span="parseInt(24 / (headerList.length + 1))"
              class="header-item logo">
        <router-link to="/">
          <img :src="isNomal ? 'http://www.fon.org.cn/images/white-logo.png' : 'http://www.fon.org.cn/images/logo.png'"
               alt="logo">
        </router-link>
      </el-col>
      <el-col :span="parseInt(24 / (headerList.length + 1))"
              v-for="item in headerList"
              class="header-item"
              :key="item.orderNum">
        <router-link :to="`/list/${item.orderNum}`"
                     :class="isNomal ? 'nomal-color' : 'emphasize-color'">
          <i :class="{'iconfont': true, [item.iconName]: true}"
             style="fontWeight: 100;"></i>
          {{item.tabName}}
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import throttle from '../util/throttle'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Header',
  setup() {
    // 判断是否下拉到图片底部
    const isNomal = ref(true)
    const store = useStore()
    store.dispatch('getTabList')
    const headerList = computed(() => store.state.tabList)

    const scrollFunc = function () {
      // document.body.clientHeight
      if (document.documentElement.scrollTop > 100) {
        isNomal.value = false
      } else {
        isNomal.value = true
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', throttle(scrollFunc))
    })

    // 使用路由判断头部字体颜色
    const router = useRouter()
    // console.log('router', router)
    // 改变文章标题
    router.beforeEach((to, from, next) => {
      if (to.path === '/') {
        isNomal.value = true
      } else {
        isNomal.value = false
      }
      next()
    })

    return {
      isNomal,
      headerList,
    }
  },
})
</script>

<style lang="scss">
.nomal-color {
  color: #fff;
}

.emphasize-color {
  color: #000;
}

.emphasize-header {
  background: #ffffff;
}

.header {
  height: 84px;
  line-height: 84px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  .header-item-wrapper {
    justify-content: space-around;
    text-align: center;

    .logo {
      margin-top: 8px;
    }
    .header-item {
      a {
        font-size: 16px;
        font-weight: 800;
      }
    }
  }
}
</style>
