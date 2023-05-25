<template functional>
  <div class="el-form-item__label no-float tl">
    <label>选择系统预置标签</label>
    <el-tooltip effect="dark" placement="top">
      <div slot="content">
        <div class="label-tooltip">
          <div class="flex tips-wrapper f12">
            <div>可以选择系统预置标签，</div>
            <div>或者点击下方新建标签</div>
          </div>
        </div>
      </div>
      <i class="el-icon-warning-outline" style="color: #2e4fde;" />
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: 'LabelTip',
};
</script>
<style scoped lang="scss">
.label-title {
  margin-bottom: 8px;
}

.tips-wrapper {
  flex-wrap: wrap;
  max-width: 180px;
  line-height: 1.5;
}
</style>
