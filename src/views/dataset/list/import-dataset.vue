<template>
  <div>
    <div class="flex flex-between bg">
      <span>
        <i class="el-icon-warning" style="color: #3253d6;" />
        天枢命令行工具支持导入本地已有自定义数据集、标准数据集
      </span>
      <a class="primary" :href="`${docsUrl}module/dataset/cli/new`" target="_blank">
        使用文档
      </a>
    </div>
    <div v-for="item in datasetCode" :key="item.id">
      <span class="db mb-10 mt-20">{{ item.text }}</span>
      <pre class="code flex flex-vertical-align flex-between">
        <code class="text ellipsis">{{item.code}}</code>
        <copy-to-clipboard :text="item.code" @copy="handleCopy">
          <i class="el-icon-copy-document pointer copy" />
        </copy-to-clipboard>
      </pre>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
import CopyToClipboard from 'vue-copy-to-clipboard';

import { datasetCode } from '../util';

const docsUrl = process.env.VUE_APP_DOCS_URL;

export default {
  name: 'ImportDataset',
  components: {
    CopyToClipboard,
  },

  setup() {
    const handleCopy = () => {
      Message.success('复制成功');
    };

    return {
      datasetCode,
      handleCopy,
      docsUrl,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.bg {
  padding: 10px 20px;
  background: #eef8ff;
}

.code {
  height: 40px;
  padding: 0 20px;
  background: #ebedf0;
}

.copy {
  font-size: 18px;
  color: $primaryColor;
}
</style>
