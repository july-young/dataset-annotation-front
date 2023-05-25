<template>
  <el-form label-position="top" @submit.native.prevent>
    <el-form-item label="数据集名称" style="margin-bottom: 0;">
      <div style="margin-top: -10px;">{{ datasetInfo.name }}</div>
    </el-form-item>
    <el-form-item label="标注类型" style="margin-bottom: 0;">
      <div style="margin-top: -10px;">{{ annotationType }}</div>
    </el-form-item>
    <el-form-item v-if="showLabelGroupName" label="标签组" style="margin-bottom: 0;">
      <div style="margin-top: -10px;">
        <el-tooltip placement="top" :content="datasetInfo.labelGroupName">
          <span class="vm dib ellipsis" style="max-width: 60%;"
            >{{ datasetInfo.labelGroupName }} &nbsp;</span
          >
        </el-tooltip>
        <el-link
          target="_blank"
          type="primary"
          :underline="false"
          class="vm"
          :href="`/data/labelgroup/detail?id=${datasetInfo.labelGroupId}`"
        >
          查看详情
        </el-link>
      </div>
    </el-form-item>
    <MultiLabelList
      v-if="templateType === 'multiple-label'"
      v-bind="attrs"
      :type="datasetInfo.type"
    />
    <LabelList v-else v-bind="attrs" :datasetId="datasetInfo.id" :type="datasetInfo.type" />
  </el-form>
</template>
<script>
import { isNil } from 'lodash';
import { computed } from '@vue/composition-api';
import { annotationBy } from '@/views/dataset/util';

import LabelList from './labelList';
import MultiLabelList from './multiLabelList';

const annotationByCode = annotationBy('code');

export default {
  name: 'SideBar',
  components: {
    LabelList,
    MultiLabelList,
  },
  inheritAttrs: false,
  props: {
    datasetInfo: {
      type: Object,
      default: () => ({}),
    },
    templateType: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    const attrs = computed(() => ctx.attrs);
    const annotationType = computed(() => {
      let templateTypeName = '';
      switch (props.templateType) {
        case 'multiple-label':
          templateTypeName = '(多标签)';
          break;
        case 'single-label':
          templateTypeName = '(单标签)';
          break;
        default:
          break;
      }
      return annotationByCode(props.datasetInfo.annotateType, 'name') + templateTypeName;
    });

    // 标签组存在时显示标签组名称
    const showLabelGroupName = computed(() => !isNil(props.datasetInfo.labelGroupId));

    return {
      attrs,
      annotationType,
      showLabelGroupName,
    };
  },
};
</script>
