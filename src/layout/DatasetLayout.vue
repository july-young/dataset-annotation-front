
<template>
  <BaseLayout :showBack="true" :showSidebar="false" :showFooter="false" />
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
