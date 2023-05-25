
<template>
  <el-tooltip v-bind="mergedAttrs">
    <i class="primary f18 vm" :class="[icon]" />
    <template #content>
      <slot name="content" />
    </template>
  </el-tooltip>
</template>

<script>
import { computed } from '@vue/composition-api';

const defaultAttr = {
  effect: 'dark',
  placement: 'top',
};

export default {
  name: 'BaseTooltip',
  props: {
    icon: {
      type: String,
      default: 'el-icon-warning-outline',
    },
  },
  setup(props, ctx) {
    const mergedAttrs = computed(() => ({
      ...defaultAttr,
      ...ctx.attrs,
    }));

    return {
      mergedAttrs,
    };
  },
};
</script>
