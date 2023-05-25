<template functional>
  <div class="exception">
    <div class="exception-inner">
      <div class="imgBlock">
        <slot name="image">
          <i class="el-icon-receiving" />
        </slot>
      </div>
      <div class="content">
        <slot name="desc">
          暂无内容
        </slot>
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exception',
};
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';

.exception {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: $infoColor;
  text-align: center;

  .imgBlock {
    font-size: 48px;
  }
}
</style>
