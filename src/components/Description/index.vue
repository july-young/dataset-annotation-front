<template>
  <div class="description-items">
    <table>
      <tbody>
        <tr v-for="(row, index) in columns" :key="index" class="descriptions-row">
          <DescriptionItem
            v-for="col in row"
            :key="col[labelBy]"
            class="description-item"
            :col="col"
            v-bind="attrs"
          >
            <template v-for="(_, name) in $slots" v-slot:[name]>
              <slot :name="name" />
            </template>
          </DescriptionItem>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { computed } from '@vue/composition-api';

import DescriptionItem from './item';

export default {
  name: 'Description',
  components: {
    DescriptionItem,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    labelBy: String,
  },
  setup(props, ctx) {
    const attrs = computed(() => ctx.attrs);
    return {
      attrs,
    };
  },
};
</script>
<style lang="scss" scoped>
.descriptions-row {
  line-height: 1.5;
}

.description-items {
  table {
    width: 100%;
    table-layout: fixed;
  }
}
</style>
