<template>
  <div class="prism-wrapper">
    <Prism :language="language" :code="code" class="prism-content" />
  </div>
</template>

<script>
import 'prismjs';
import 'prism-themes/themes/prism-atom-dark.css';
import 'prismjs/components/prism-python';
import Prism from 'vue-prism-component';

export default {
  name: 'PrismRender',
  components: {
    Prism,
  },
  props: {
    code: String,
    language: {
      type: String,
      default: 'python',
    },
  },
};
</script>
<style lang="scss" scoped>
code[class*='language-'],
pre[class*='language-'] {
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>
