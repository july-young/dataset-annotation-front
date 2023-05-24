<template>
  <el-card class="welcome" shadow="never">
    <div class="welcome-title">欢迎体验天枢数据标注平台</div>
    <div class="welcome-desc">
      天枢一站式数据标注平台提供数据处理(数据集管理、智能标注和数据增强)功能，方便用户构建 AI 算法。
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.welcome {
  padding: 4px;
  color: #666;

  &-title {
    height: 24px;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }

  &-desc {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 2px;
  }

  .card-row {
    margin: -10px;
  }

  .card-col {
    padding: 0 10px;
    margin: 10px 0;
  }

  .card-panel {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 184px;
    overflow: hidden;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    transition-duration: 0.3s;

    &-img {
      width: 96px;
      height: 96px;
      margin-top: 18px;
      filter: none;
    }

    &-title {
      margin-top: 8px;
      font-weight: bold;
      line-height: 20px;
      filter: none;
    }

    &-desc {
      position: absolute;
      top: 120px;
      width: 100%;
      height: 184px;
      padding: 30px 20px;
      overflow: hidden;
      font-size: 14px;
      line-height: 20px;
      text-overflow: ellipsis;
      letter-spacing: 2px;
      white-space: nowrap;
      transition-duration: 0.6s;
    }
  }

  .card-panel:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .card-panel-desc {
      overflow: visible;
      white-space: normal;
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-120px);
    }
  }
}
</style>
