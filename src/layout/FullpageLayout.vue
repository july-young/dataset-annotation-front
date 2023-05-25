
<template>
  <BaseLayout :showSidebar="false" :showFooter="false" :showNav="false" />
</template>

<script>
import BaseLayout from './BaseLayout';

export default {
  name: 'DatasetLayout',
  components: {
    BaseLayout,
  },
};
</script>
