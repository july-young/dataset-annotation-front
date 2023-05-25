
<template functional>
  <div class="el-alert el-alert--primary is-dark">
    <div class="el-alert-content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'InfoAlert',
};
</script>
<style scoped lang="scss">
@import '~@/assets/styles/variables.scss';

.el-alert--primary {
  padding-top: 7px;
  padding-bottom: 7px;
  line-height: 30px;
  color: #2e4fde;
  background-color: $primaryPlainBgColor;
  border: 1px solid $primaryBorderColor;

  .el-alert-content {
    width: 100%;
  }
}
</style>
