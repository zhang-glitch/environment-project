<template>
  <div class="footer">
    <div class="footer-top">
      <div class="connect-me">
        <el-tooltip effect="light"
                    placement="bottom-start">
          <i class="iconfont icon-weixin"></i>
          <template #content>
            <img class="two-code"
                 src="../assets/img/connect.jpg"
                 alt="二维码">
          </template>
        </el-tooltip>
        <a href="https://github.com/zhang-glitch"
           class="github"><i class="iconfont icon-github"></i></a>
      </div>
      <div class="logo">
        <img src="http://www.fon.org.cn/images/white-logo.png"
             alt="logo">
      </div>
      <div class="location">
        <p>办公地址: 辽宁省锦州市渤海大学滨海校区</p>
        <p>联系电话: 18738618277</p>
        <p>电子信箱: 669638556@qq.com</p>
      </div>
    </div>

    <div class="footer-bottom">
      保护环境人人有责，从自身做起!
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Footer',
})
</script>

<style lang="scss">
.two-code {
  width: 100px;
  height: 100px;
}
.footer {
  height: 300px;
  background: #1f1f1f;

  .footer-top {
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;

    .connect-me {
      .iconfont {
        font-size: 24px;
        color: #fff;
      }

      .github {
        padding: 20px;
      }
    }

    .location {
      color: #b3b3b3;
      font-size: 16px;
    }
  }

  .footer-bottom {
    text-align: center;
    font-size: 20px;
    color: #fff;
    letter-spacing: 0.5rem;
  }
}
</style>