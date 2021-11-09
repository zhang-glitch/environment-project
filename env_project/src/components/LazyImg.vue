
<template>
  <div class="lazy-img">
    <p>自然之友</p>
    <div class="model"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LazyImg',
})
</script>

<style lang="scss">
.lazy-img {
  position: absolute;
  width: 100%;
  height: 100%;
  p {
    font-size: 40px;
    color: rgb(49, 136, 207);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
  }

  .model {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    animation: donghua 2s infinite;
  }

  @keyframes donghua {
    0% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 10%
      );
    }

    10% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 20%
      );
    }

    20% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 30%
      );
    }

    30% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 40%
      );
    }

    40% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 50%
      );
    }

    50% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 60%
      );
    }

    60% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 70%
      );
    }

    70% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 80%
      );
    }

    80% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 90%
      );
    }

    90% {
      background: radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        #f5f7fa 100%
      );
    }

    100% {
      background: radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%);
    }
  }
}
</style>