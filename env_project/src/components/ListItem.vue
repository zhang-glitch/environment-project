<template>
  <div class="list-item">
    <router-link :to="`/detail/${actionItem.id}`">
      <div class="item-img">
        <img :src="actionItem.action_image"
             :alt="actionItem.action_title">
      </div>
      <div class="item-info-wrapper">
        <div class="item-title">{{actionItem.action_title}}</div>

        <!-- <div class="item-tags">{{actionItem.action_tags}}</div> -->
        <div class="item-time-author-wrapper">
          <div class="item-time">
            <i class="iconfont icon-fabushijian"></i>
            {{time}}
          </div>
          <div class="item-author">
            <i class="iconfont icon-fabuzhe"></i>
            {{actionItem.action_author}}
          </div>
        </div>
      </div>
      <div class="learn-more">
        了解更多
        <i class="el-icon-arrow-right animation-arrow"></i>
      </div>
    </router-link>
  </div>
</template>


<script >
import { defineComponent, ref } from 'vue'
import moment from 'moment'

export default defineComponent({
  name: 'ListItem',
  props: {
    actionItem: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const time = ref('')
    time.value = moment(props.actionItem.action_time).format('YYYY-MM-DD')
    return {
      time,
    }
  },
})
</script>


<style lang="scss">
.list-item {
  width: 290px;
  margin: auto;
  margin-bottom: 40px;

  .item-img {
    width: 290px;
    height: 200px;
    perspective: 500px;
    transition: all 0.2s;

    img {
      transition: all 0.3s;
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }

  .item-info-wrapper {
    .item-title {
      font-size: 20px;
      font-weight: 600;
      margin: 10px 0;
      vertical-align: middle;
    }

    .item-tags {
      color: #888;
      font-size: 14px;
      margin: 10px 0;
    }

    .item-time-author-wrapper {
      display: flex;
      justify-content: space-between;

      .item-time {
        font-size: 14px;
        color: #888;
      }

      .item-author {
        vertical-align: middle;
        color: #888;
        font-size: 14px;
      }
    }
  }

  .learn-more {
    font-size: 16px;
    margin-top: 24px;
    color: #70b809;
    vertical-align: middle;

    &:hover {
      .animation-arrow {
        animation: animationArrow 1s infinite;
      }

      @keyframes animationArrow {
        0% {
          transform: translateX(5px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }
  }
}
</style>