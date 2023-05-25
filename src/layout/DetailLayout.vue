
<template>
  <BaseLayout
    :showBack="true"
    :showSidebar="false"
    :showFooter="false"
    wrapperClass="detail-page"
  />
</template>

<script>
import BaseLayout from './BaseLayout';

export default {
  name: 'DetailPage',
  components: {
    BaseLayout,
  },
};
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixin.scss';

.detail-page {
  .app-container {
    min-height: calc(100vh - 50px);
    overflow: auto;
  }

  .app-container.greyBg {
    background-color: $imageBg;
  }

  .app-page-header {
    padding: 12px 24px;
    line-height: 1.5;
    background: #fff;
    border: 1px solid $borderColor;
  }

  .app-container.fullWidth {
    padding-right: 0;
    padding-left: 0;

    .app-page-header {
      padding-bottom: 0;
      border: none;
    }
  }

  .app-page-header-title {
    margin-right: 12px;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.85);

    @include text-overflow;
  }

  .ant-page-header-content {
    padding-top: 12px;
  }

  .app-page-container-content {
    margin: 16px 0 0;
  }

  .app-page-contaniner-extra {
    min-width: 300px;
    margin-left: 88px;
    text-align: right;
  }

  .app-page-header-footer {
    margin-top: 20px;

    .el-tabs__header {
      margin-bottom: 0;

      .el-tabs__nav-wrap::after {
        width: 0;
      }
    }
  }

  .profile-advance {
    display: flex;
    justify-content: space-between;
  }

  .app-page-form-steps-desc {
    padding: 0 56px;
    color: rgba(0, 0, 0, 0.55);

    h3 {
      margin: 0 0 8px;
      font-size: 16px;
      line-height: 32px;
      color: rgba(0, 0, 0, 0.8);
    }

    h4 {
      margin: 0 0 4px;
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.65);
    }

    p {
      margin-top: 0;
      margin-bottom: 12px;
      line-height: 22px;
    }
  }
}
</style>
