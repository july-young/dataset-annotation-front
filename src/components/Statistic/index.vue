
<template>
  <div class="el-statistic">
    <div v-if="title" class="el-statistic-title">{{ title }}</div>
    <div class="el-statistic-content">
      <span class="el-statistic-content-value">{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistic',
  props: {
    title: String,
    value: [String, Number],
  },
};
</script>
<style lang="scss" scoped>
.el-statistic-title {
  margin-bottom: 4px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}

.el-statistic-content {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.85);
}

.el-statistic-content-value {
  display: inline-block;
  direction: ltr;
}
</style>
