
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import BaseLayout from './BaseLayout';
import DetailLayout from './DetailLayout';
import DatasetLayout from './DatasetLayout';
import SubpageLayout from './SubpageLayout';
import FullpageLayout from './FullpageLayout';

const layoutList = [
  'BaseLayout', // 基本布局
  'SubpageLayout', // 二级页面
  'DetailLayout', // 详情页面
  'DatasetLayout', // 数据集页面
  'FullpageLayout', // 数据集页面
];

export default {
  name: 'LayoutIndex',
  components: {
    BaseLayout,
    DetailLayout,
    DatasetLayout,
    SubpageLayout,
    FullpageLayout,
  },
  computed: {
    layout() {
      const { layout } = this.$route.meta;
      return layoutList.includes(layout) ? layout : 'BaseLayout';
    },
  },
};
</script>
