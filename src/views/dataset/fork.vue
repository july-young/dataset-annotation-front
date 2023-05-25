<script>
import NProgress from 'nprogress'; // progress bar
import { getDatasetType, pushUrl } from './util';

export default {
  name: 'DatasetFork',
  beforeRouteEnter(to, from, next) {
    // 根据用户选择场景类型跳转到具体列表页
    // 0: 视觉/文本场景，1: 医学场景
    // 如果什么都不选，强制用户选择再跳转
    const datasetListType = getDatasetType();
    // 全局触发progres，这里需要完成
    NProgress.done();
    next(pushUrl[datasetListType] || '/data/datasets/entrance');
  },
};
</script>
