<template>
  <div class="card-panel">
    <IconFont class="card-panel-icon" :type="icon" :style="{ fontSize: '32px' }" />
    <div class="card-panel-text">
      <div class="card-panel-text-name">{{ name }}</div>
      <div class="card-panel-text-value">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPanel',
  props: {
    icon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: [Number, String],
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.card-panel {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 78px;
  border: 1px solid #f1f1f1;

  &-icon {
    width: 32px;
    height: 32px;
    margin-left: 10%;
  }

  &-text {
    height: 40px;
    margin: 12px;
    color: #444;

    &-name {
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      white-space: nowrap;
    }

    &-value {
      height: 22px;
      font-family: Lato-Bold, Lato;
      font-size: 18px;
      font-weight: bold;
      line-height: 22px;
    }
  }
}
</style>
