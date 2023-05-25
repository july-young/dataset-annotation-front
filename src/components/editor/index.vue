
<template>
  <PrismEditor
    ref="editorRef"
    class="code-editor"
    v-bind="attrs"
    :highlight="highlighter"
    v-on="listeners"
  />
</template>
<script>
import { computed, ref } from '@vue/composition-api';
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import 'prismjs/themes/prism-tomorrow.css';

export default {
  name: 'Editor',
  components: {
    PrismEditor,
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'change',
  },
  setup(props, ctx) {
    const editorRef = ref(null);
    const attrs = computed(() => ctx.attrs);
    const highlighter = (code) => {
      return highlight(code, languages.js);
    };
    const getValue = () => editorRef.value.codeData;

    const handleChange = (value) => {
      ctx.emit('change', value);
    };

    const listeners = computed(() => ({
      ...ctx.listeners,
      input: handleChange,
    }));

    return {
      attrs,
      listeners,
      highlighter,
      editorRef,
      getValue,
    };
  },
};
</script>
<style lang="scss" scoped>
.code-editor {
  position: relative;
  padding: 5px;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  color: black;
  background: white;

  ::v-deep .prism-editor__container {
    .prism-editor__textarea {
      min-height: 54px;
      max-height: 400px;
    }

    .prism-editor__editor {
      min-height: 54px;
    }

    .prism-editor__textarea:focus {
      outline: none;
    }
  }
}
</style>
