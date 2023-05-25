<template>
  <div class="flex flex-vertical-align">
    <div class="mr-4 f14">切换场景：</div>
    <InfoSelect
      v-model="state.datasetListType"
      :clearable="false"
      width="150px"
      :dataSource="datasetListTypeOptions"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import InfoSelect from '@/components/InfoSelect';

import { pushUrl } from '../../util';

export default {
  name: 'TenantSelector',
  components: {
    InfoSelect,
  },
  props: {
    datasetListType: String,
  },
  setup(props, ctx) {
    const { $router } = ctx.root;
    const datasetListTypeOptions = [
      { value: 0, label: '视觉/语音/文本' },
      { value: 1, label: '医学影像' },
      { value: 2, label: '点云' },
    ];

    const state = reactive({
      datasetListType: Number(props.datasetListType),
    });

    const handleChange = (value) => {
      state.datasetListType = value;
      localStorage.setItem('datasetListType', state.datasetListType);
      $router.push({ path: pushUrl[value] });
    };

    return {
      handleChange,
      datasetListTypeOptions,
      state,
    };
  },
};
</script>
