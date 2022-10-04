<template>
  <div class="dashboard-container">
    <el-card>
      <div style="text-align:center">欢迎来到HGOJ</div>
    </el-card>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
