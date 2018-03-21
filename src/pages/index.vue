<template>
  <div class="vx-box pt">
    <v-header :hidepre="1" :hidenext="1">J6-text</v-header>
    <div class="content">
      <div class="quick-select">
        <select v-model="selectedWin">
          <option v-for="win in winList" :value="win.id">
            {{win.name}}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        winList: [],
        selectedWin: -1
      }
    },
    created() {
      this.getWinList();
    },
    methods: {
      getWinList() {
        this.winList = [{ "id": 1, "name": "Window 1" }, { "id": 2, "name": "Window 2" }, { "id": 3, "name": "Window 3" }, { "id": 4, "name": "Window 4" }]
      }
    }
  }
</script>

<style lang="less" scoped>
  .quick-select {
  }
</style>



