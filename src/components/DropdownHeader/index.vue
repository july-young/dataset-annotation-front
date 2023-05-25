
<template>
  <el-dropdown trigger="click" placement="bottom-start" @command="onCommand">
    <div>
      <span :class="{ primary: dropdownSelected }">{{ title }}</span>
      <i class="el-icon-arrow-down el-icon--right" />
    </div>
    <el-dropdown-menu slot="dropdown" :style="dropdownStyle">
      <el-dropdown-item v-for="(item, index) in list" :key="index" :command="item[valueTag]">{{
        item[labelTag]
      }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { computed, ref } from '@vue/composition-api';
import { isNil } from 'lodash';

export default {
  name: 'DropdownHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
    // labelTag 用于标识列表中用于表示 label 的字段名, 默认为 label
    labelTag: {
      type: String,
      default: 'label',
    },
    // labelTag 用于标识列表中用于表示 value 的字段名, 默认为 value
    valueTag: {
      type: String,
      default: 'value',
    },
    // filtered 用于标识是否处于筛选状态
    filtered: {
      type: Boolean,
      default: undefined,
    },
    filterFunc: {
      type: Function,
      default(value) {
        return !isNil(value);
      },
    },
    // 下拉框样式可配置
    dropdownStyle: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    // 记录当前选择值
    const currentValue = ref(null);

    const onCommand = (value) => {
      currentValue.value = value;
      ctx.emit('command', value);
    };

    const dropdownSelected = computed(() => {
      if (!isNil(props.filtered)) {
        return props.filtered;
      }
      return props.filterFunc(currentValue.value);
    });

    return {
      onCommand,
      dropdownSelected,
    };
  },
};
</script>
