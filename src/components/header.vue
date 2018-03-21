<template>
  <div class="vx-header">
    <div class="btn-l">
      <div class="h-back" @click="goBack" v-if="!hideback"><img src="../assets/common/icon_back.png" alt="返回" /></div>
      <div class="h-back" @click="pre" v-if="!hidepre">上一页</div>
    </div>
    <div class="vx-title">设备列表</div>
    <div class="btn-r">
      <div class="h-refresh" @click="refresh" v-if="!hiderefresh"><img src="../assets/common/refresh.png" alt="刷新" /></div>
      <div class="h-back" @click="next" v-if="!hidenext">下一页</div>
    </div>
  </div>
</template>

<script>
  import ImageMap from 'src/config/imageMap';
  export default {
    data() {
      return {
        imageMap: ImageMap,
        title: ""
      }
    },
    props: ['hideback', 'hiderefresh', 'hidepre', 'hidenext'],
    methods: {
      goBack() {

      },
      refresh() {

      },
      pre() {

      },
      next() {

      }
    }
  }
</script>

<style scoped lang="less">
  .vx-header {
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      display: flex;
      justify-content: space-between;
      background-color: #26a2ff;
      color: #fff;
      font-size: 0.24rem;
      .btn-l {
          margin-left: 0.1rem;
          .h-back {
              height: 100%;
              vertical-align: middle;
          }
      }
      .btn-r {
          margin-right: 0.1rem;
      }
      img {
          width: 0.24rem;
          height: 0.24rem;
      }
  }
</style>