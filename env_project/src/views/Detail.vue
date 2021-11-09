<template>
  <div class="detail">
    <list-b-img :bImgUrl="detail.action_image"></list-b-img>
    <div class="wrap content-wrapper">
      <div class="detail-info">
        <div class="detail-title">{{detail.action_title}}</div>
        <div class="operate-wrapper">{{startTime}}</div>
      </div>
      <el-divider></el-divider>
      <div class=" detail-content detailed-content"
           v-html="contentHTML">
      </div>
    </div>
    <div class="donate wrap">
      <p class="donate-top">与大自然为友，尊重自然万物的生命权利 </p>

      <p class="donate-center">你的支持，将用于推动环境法律与政策倡导、公众环保实践、自然教育推广以及绿色公民培育，
        你的支持，是我们坚持前行、推动真实改变的莫大动力，
        你的支持，让天更蓝、水更绿，因此，每一元都值得。</p>

      <el-divider style="margin-top: 50px;"></el-divider>
      <div class="reward">
        <div class="reward-btn">
          <el-button style="background: #f37b1d; 
        color: #fff;"
                     round
                     @click="isReward=true">
            <span class="iconfont icon-zanshang"></span>
            捐赠支持
          </el-button>
        </div>
      </div>
      <p class="donate-bottom">为环境、为无告的大自然，为了内心更美好的目标，也为了更值得期待的未来。</p>
    </div>
    <Footer />

    <!-- 赞赏的弹窗 -->
    <div class="reward-dialog">
      <el-dialog v-model="isReward"
                 width="300px"
                 :show-close="false"
                 :lock-scroll="false">
        <div class="reward-box">
          <img :src="wechatAliPayImg"
               alt="">
          <div class="reward-footer">
            <div class="we-chat"
                 @click="handleWeCaht">
              <i class="iconfont"
                 :class="weChatClass"></i>
              <span>微信</span>
            </div>
            <div class="ali-pay"
                 @click="handleAliPay">
              <i class="iconfont"
                 :class="aliPayClass"></i>
              <span>支付宝</span>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import ListBImg from '../components/ListBImg.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import moment from 'moment'
import marked from 'marked'
export default {
  name: 'Detail',
  components: { Footer, ListBImg },
  setup() {
    const store = useStore()
    const route = useRoute()
    const detail = ref({})
    const contentHTML = ref('')

    const getDetail = async (id) => {
      const data = await store.dispatch('getDetail', {
        id,
      })

      detail.value = data
      // 解析marked
      contentHTML.value = detail.value && marked(detail.value.action_content)
    }

    getDetail(route.params.id)

    const startTime = moment(detail.value.action_time).format('YYYY-MM-DD')

    // 解析marked
    const renderer = new marked.Renderer()

    marked.setOptions({
      renderer: renderer,
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    })

    // 赞赏显示
    const isReward = ref(false)
    const wechatAliPayImg = ref('/wechat.png')
    const isWeChat = ref(true)
    // icon-zhifubaozhifu1(高亮)  icon-zhifubaozhifu(不高亮)
    // const aliClass = ref("icon-zhifubaozhifu")
    // eslint-disable-next-line vue/return-in-computed-property
    const weChatClass = computed(() => {
      return isWeChat.value ? 'icon-wechat-pay-fill' : 'icon-wechat_pay'
    })
    const aliPayClass = computed(() => {
      return isWeChat.value ? 'icon-zhifubaozhifu' : 'icon-zhifubaozhifu1'
    })

    const handleWeCaht = () => {
      wechatAliPayImg.value = '/wechat.png'
      isWeChat.value = true
    }
    const handleAliPay = () => {
      wechatAliPayImg.value = '/alipay.png'
      isWeChat.value = false
    }
    return {
      detail,
      startTime,
      contentHTML,
      isReward,
      wechatAliPayImg,
      handleWeCaht,
      handleAliPay,
      weChatClass,
      aliPayClass,
    }
  },
}
</script>

<style lang="scss">
@import '../assets/style/md.scss';

.detail {
  width: 100%;
  height: 100%;

  .content-wrapper {
    margin-bottom: 50px;
    .detail-info {
      margin-top: 30px;
      margin-bottom: 50px;
      .detail-title {
        margin-bottom: 0.5em;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 38px;
        line-height: 1.23;
        width: 700px;
      }

      .operate-wrapper {
        color: #888;
        font-size: 20px;
        margin-top: 10px;
      }
    }

    .detail-content {
      background: #fff;
      padding: 20px;
    }
  }
  .donate {
    margin-bottom: 50px;
    .donate-top {
      font-size: 32px;
      color: #333;
      margin-bottom: 26px;
    }

    .donate-center,
    .donate-bottom {
      font-size: 16px;
      line-height: 2.1;
      white-space: pre-wrap;
    }
    // 赞赏样式
    .reward {
      text-align: center;
      margin-bottom: 30px;
      .reward-btn {
        margin: 10px 0 30px;
      }
      .reward-background {
        display: inline-block;
        width: 160px;
        height: 160px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.reward-box {
  height: 300px;
  img {
    width: 100%;
    height: 90%;
  }

  .reward-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    .we-chat,
    .ali-pay {
      cursor: pointer;
      i {
        font-size: 28px;
        margin-right: 8px;
        vertical-align: middle;
      }
    }
  }
}

.reward-dialog {
  .el-dialog__header {
    padding: 0;
  }
}
</style>
