<template>
  <component :is="component" v-bind="attrs" v-on="listeners" />
</template>
<script>
import { computed } from '@vue/composition-api';

import TextSegmentation from './textSegmentation';
import NER from './ner';

export default {
  name: 'TextWorkSpace',
  components: {
    TextSegmentation,
    NER,
  },
  inheritAttrs: false,
  props: {
    component: String,
  },
  setup(props, ctx) {
    const attrs = computed(() => ctx.attrs);
    const listeners = computed(() => ctx.listeners);

    return {
      attrs,
      listeners,
    };
  },
};
</script>
