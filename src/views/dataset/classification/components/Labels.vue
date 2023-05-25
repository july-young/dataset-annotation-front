
<template>
  <div>
    <InfoSelect
      v-if="mode === 'edit'"
      class="labelSelect"
      :dataSource="labelList"
      labelKey="name"
      valueKey="id"
      placeholder="请选择标签"
      :value="row.id"
      :clearable="false"
      @change="handleChange"
    />
    <span v-else>{{ row.label }}</span>
  </div>
</template>
<script>
import { computed } from '@vue/composition-api';

import InfoSelect from '@/components/InfoSelect';

export default {
  name: 'LabelName',
  components: {
    InfoSelect,
  },
  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
    labelList: {
      type: Array,
      default: () => [],
    },
    editId: Number,
    mode: String,
  },
  setup(props, ctx) {
    const attrs = computed(() => ctx.attrs);

    const handleChange = (value) => {
      ctx.emit('change', value, props.row);
    };

    return {
      attrs,
      handleChange,
    };
  },
};
</script>
