<template>
  <div class="list">
    <!-- 头部背景 -->
    <div class="header-bgm ">
      <list-b-img :bImgUrl="bImgUrl"
                  :introduction="introduction"></list-b-img>
    </div>
    <!-- 栏目介绍 -->
    <div class="list-introduction">
      {{listIntro}}
    </div>
    <!-- 列表展示 -->
    <el-row class="list-item-wrapper wrap"
            type="flex"
            justify="space-around">
      <el-col :span="8"
              v-for="item in actionList"
              :key="item.id">
        <list-item :actionItem="item"></list-item>
      </el-col>
    </el-row>
    <!-- 分页展示 -->
    <div class="pagination">
      <el-pagination @current-change="handleCurrentChange"
                     @prev-click="handleCurrentChange"
                     @next-click="handleCurrentChange"
                     :hide-on-single-page="true"
                     :currentPage="pageNum"
                     :total="(parseInt(countAll / pageSize) + 1)*10"
                     layout=" prev, pager, next"
                     :background="true">
      </el-pagination>
    </div>
    <Footer />
  </div>
</template>

<script>
import ListBImg from '../components/ListBImg.vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import ListItem from '../components/ListItem.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    ListBImg,
    ListItem,
    Footer,
  },
  setup() {
    const store = useStore()
    const bImgUrl = ref('')
    const introduction = ref('')
    const listIntro = ref('')
    const router = useRouter()
    const route = useRoute()
    // 列表总数
    const countAll = ref(0)

    // 获取每个类型列表的背景和介绍
    const tabList = async () => {
      const data = await store.dispatch('getTabList')
      // 点击第一个时，我们需要先赋值
      bImgUrl.value = data[route.params.id - 1].tabImg
      introduction.value = data[route.params.id - 1].tabIntroduction
      listIntro.value = data[route.params.id - 1].tabNameIntro
      getActionList(+route.params.id)
      router.beforeEach((to, from, next) => {
        if (to.params.id === '1') {
          bImgUrl.value = data[0]?.tabImg
          introduction.value = data[0]?.tabIntroduction
          listIntro.value = data[0].tabNameIntro
        } else if (to.params.id === '2') {
          bImgUrl.value = data[1]?.tabImg
          introduction.value = data[1]?.tabIntroduction
          listIntro.value = data[1].tabNameIntro
        } else if (to.params.id === '3') {
          bImgUrl.value = data[2]?.tabImg
          introduction.value = data[2]?.tabIntroduction
          listIntro.value = data[2].tabNameIntro
        }
        getActionList(+to.params.id)
        next()
      })
    }

    tabList()

    // 请求限制
    // 请求条数
    const pageSize = ref(6)
    // 请求页数
    const pageNum = ref(1)

    const actionList = ref([])

    // 获取文章列表
    const getActionList = async (id) => {
      const { data, count } = await store.dispatch('getActionList', {
        id,
        pageSize: pageSize.value,
        pageNum: pageNum.value,
      })

      countAll.value = count
      actionList.value = data
    }

    // 当前页数
    const handleCurrentChange = (val) => {
      pageNum.value = val
      getActionList(route.params.id)
    }
    return {
      tabList,
      bImgUrl,
      introduction,
      listIntro,
      actionList,
      handleCurrentChange,
      pageNum,
      countAll,
      pageSize,
    }
  },
}
</script>

<style lang="scss">
.list {
  width: 100%;
  height: 100%;

  .header-bgm {
    box-sizing: border-box;
  }

  .list-introduction {
    box-sizing: border-box;
    max-width: 750px;
    padding-left: 160px;
    font-size: 20px;
    margin: 50px 0;
  }

  .list-item-wrapper {
    margin-top: 50px;
  }

  .pagination {
    margin: 30px 0;
    display: flex;
    justify-content: center;
  }
}
</style>
