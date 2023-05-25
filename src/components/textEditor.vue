
<template>
  <div v-loading="loading" class="textEditor" v-on="listeners">
    <pre>{{ txt }}</pre>
  </div>
</template>
<script>
import { onMounted } from '@vue/composition-api';

export default {
  name: 'TextEditor',
  props: {
    txt: String,
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const { listeners } = ctx;

    onMounted(() => {
      ctx.emit('mount');
    });

    return {
      listeners,
    };
  },
};
</script>
<style lang="scss" scoped>
.textEditor {
  max-height: 40vh;
  overflow: auto;

  pre {
    width: 100%;
    min-height: 100%;
    padding: 20px;
    line-height: 1.8;
    word-break: break-word;
    white-space: pre-wrap;
    background: #fff;
  }
}
</style>
