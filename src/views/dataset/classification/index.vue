
<template>
  <Classification :templateType="templateType" />
</template>
<script>
import { ref, onBeforeMount, computed, provide } from '@vue/composition-api';

import { detail } from '@/api/preparation/dataset';
import { templateTypeSymbol, matchTemplateByDataset } from '@/views/dataset/util';
import Classification from './Classification';

export default {
  name: 'ImageClassification',
  components: {
    Classification,
  },
  setup(props, ctx) {
    const { $route } = ctx.root;
    const { params = {} } = $route;

    const datasetInfo = ref(null);

    const templateType = computed(() => {
      if (!datasetInfo.value) return null;
      return matchTemplateByDataset(datasetInfo.value);
    });

    onBeforeMount(async () => {
      const res = await detail(params.datasetId);
      datasetInfo.value = res;
    });

    provide(templateTypeSymbol, templateType);

    return {
      datasetInfo,
      templateType,
    };
  },
};
</script>
