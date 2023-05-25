<template>
  <BaseLayout :showSidebar="true" :showBack="true" />
</template>

<script>
import BaseLayout from './BaseLayout';

export default {
  name: 'SubpageLayout',
  components: {
    BaseLayout,
  },
};
</script>
