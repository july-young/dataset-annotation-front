
<template>
  <el-form-item>
    <slot name="label">
      <LabelTip />
    </slot>
    <div class="flex flex-between">
      <InfoSelect
        :innerRef="innerRef"
        style="width: 80%;"
        placeholder="选择系统预置标签"
        :dataSource="dataSource"
        value-key="value"
        default-first-option
        filterable
        @change="handleLabelSelect"
      />
    </div>
    <LabelEditor title="新建标签" @handleOk="handleLabelCreate">
      <span slot="trigger" class="cp vm primary f14">新建标签</span>
    </LabelEditor>
  </el-form-item>
</template>

<script>
import { ref } from '@vue/composition-api';

import InfoSelect from '@/components/InfoSelect';
import LabelEditor from '@/views/dataset/components/labelEditor';
import LabelTip from './labelTip';

export default {
  name: 'SelectLabel',
  components: {
    LabelTip,
    InfoSelect,
    LabelEditor,
  },
  props: {
    dataSource: {
      type: Array,
      default: () => [],
    },
    handleLabelSelect: Function,
    handleLabelCreate: Function,
  },
  setup() {
    const selectRef = ref(null);

    return {
      innerRef: () => selectRef,
    };
  },
};
</script>
