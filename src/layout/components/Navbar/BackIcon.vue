
<template>
  <span :class="classname" @click="handleBack">
    <i class="el-icon-arrow-left" />
    <slot>返回</slot>
  </span>
</template>

<script>
export default {
  name: 'Back',
  props: {
    classname: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleBack() {
      this.$emit('go-back');
    },
  },
};
</script>
