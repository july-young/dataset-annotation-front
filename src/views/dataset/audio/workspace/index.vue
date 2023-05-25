<template>
  <component :is="component" v-bind="attrs" v-on="listeners" />
</template>
<script>
import { computed } from '@vue/composition-api';

import AudioClassify from './audioClassify';
import SpeechRecognition from './speechRecognition';

export default {
  name: 'WorkSpace',
  components: {
    AudioClassify,
    SpeechRecognition,
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
