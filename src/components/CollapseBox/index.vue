<template>
  <div
    class="border"
    :class="expand ? 'bg-white border-primary' : 'bg-gray-bglight border-gray-light'"
    style="border-radius: 4px;"
  >
    <div class="flex flex-center-v cp" :style="{ padding: '0px 11px' }" @click="handleShow">
      <span>
        <i v-if="expand" class="el-icon-arrow-down" />
        <i v-else class="el-icon-arrow-right" />
      </span>
      <div class="ml-7">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
    </div>
    <div v-show="expand" :style="{ padding: '4px 11px' }">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'CollapseBox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  setup(props, ctx) {
    const state = reactive({
      expand: props.value,
    });

    const handleShow = () => {
      state.expand = !state.expand;
      ctx.emit('update:show', state.expand);
    };

    return {
      ...toRefs(state),
      handleShow,
    };
  },
});
</script>
