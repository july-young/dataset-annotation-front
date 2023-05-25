
<template>
  <div>
    <i
      v-click-outside="onClickOutside"
      class="el-icon-edit cp mr-4"
      @click="$emit('edit', row)"
    ></i>
    <el-popconfirm title="确认移除当前标签，不可恢复" @onConfirm="$emit('delete', row)">
      <i slot="reference" class="el-icon-delete cp"></i>
    </el-popconfirm>
  </div>
</template>
<script>
import vClickOutside from 'v-click-outside';

export default {
  name: 'EditLabelAction',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    row: Object,
    mode: String,
  },
  setup(props, ctx) {
    const onClickOutside = (event) => {
      // 如果点击的是非工具栏项目
      if (!event.target.closest('.labelSelect') && props.mode === 'edit') {
        ctx.emit('reset');
      }
    };

    return {
      onClickOutside,
    };
  },
};
</script>
