<template>
  <el-popover
    v-model="state.visible"
    placement="bottom"
    width="200"
    trigger="click"
    title="修改标签名称"
  >
    <el-select v-model="state.value" placeholder="请选择" @change="handleEditLabel">
      <el-option v-for="item in labels" :key="item.id" :label="item.name" :value="item.id" />
    </el-select>
    <i slot="reference" class="el-icon-edit primary cp dib ml-10" />
  </el-popover>
</template>
<script>
import { reactive, watch } from '@vue/composition-api';

export default {
  name: 'EditLabel',
  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
    labels: {
      type: Array,
      default: () => [],
    },
    handleEditLabel: Function,
  },
  setup(props) {
    const { row } = props;
    const state = reactive({
      visible: false,
      value: row.data.categoryId,
    });

    watch(
      () => props.row,
      (next) => {
        Object.assign(state, {
          value: next?.data?.categoryId,
        });
      }
    );

    return {
      state,
    };
  },
};
</script>
