<template>
  <div class="container-wrapper">
    <transition :name="transitionName">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>

<script>
  import ImageMap from 'src/config/imageMap';
  export default {
    name: 'vx-view',
    data() {
      return {
        transitionName: 'slide-left',
        imageMap: ImageMap,
        title: "",
      };
    },
    methods: {
      refresh() {

      },
      returnDevice() {

      }
    }
  }
</script>

<style lang="less" scoped>
  .container-wrapper {
      .container {
          height: 90%;
      }
  }
</style>