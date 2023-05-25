<template>
  <td :colspan="col.span || 1" class="description-item">
    <span class="description-item-label">{{ col[labelBy] }}：</span>
    <span v-if="state.content" class="description-item-content">{{ state.content }}</span>
    <slot v-else :name="col[labelBy]"></slot>
  </td>
</template>
<script>
import { reactive, watch } from '@vue/composition-api';

export default {
  name: 'DescriptionItem',
  props: {
    col: Object,
    data: Object,
    contentBy: {
      type: String,
      default: 'content',
    },
    labelBy: {
      type: String,
      default: 'label',
    },
  },
  setup(props) {
    const state = reactive({
      content: props.col[props.contentBy] || null,
    });

    watch(
      () => props.col,
      (next) => {
        state.content = next[props.contentBy];
      }
    );

    return {
      state,
    };
  },
};
</script>
