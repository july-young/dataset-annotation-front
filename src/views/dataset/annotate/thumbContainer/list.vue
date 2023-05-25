<template>
  <div ref="listWrapper" class="infinite-list-wrapper" style="overflow: auto;">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="100"
      infinite-scroll-disabled="disabled"
      infinite-scroll-immediate="false"
    >
      <ListItem
        v-for="item in list"
        :key="item.id"
        :item="item"
        :handleClick="handleClick"
        :currentImgId="currentImg.id"
      />
    </ul>
    <div v-loading="state.loading" element-loading-spinner="el-icon-loading" />
    <p v-if="!hasMore" class="f14 g6">没有更多了</p>
  </div>
</template>
<script>
import { reactive, watch, computed, ref } from '@vue/composition-api';

import { limit } from '@/views/dataset/annotate';
import ListItem from './listItem';

export default {
  name: 'Scroller',
  components: {
    ListItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    type: {
      type: Array,
      default: () => [],
    },
    labelId: {
      type: Array,
      default: () => [],
    },
    addList: {
      type: Array,
      default: () => [],
    },
    hasMore: Boolean,
    history: {
      type: Array,
      default: () => [],
    },
    total: Number,
    offset: Number,
    currentImg: {
      type: Object,
      default: () => null,
    },
    queryNextPage: Function,
    updateState: Function,
  },
  setup(props, ctx) {
    const { updateState, queryNextPage } = props;

    const listWrapper = ref(null);

    const state = reactive({
      loading: false,
    });

    watch(
      () => props.addList,
      (next) => {
        // 更新全局 offset
        updateState({
          offset: props.offset + Math.min(limit, next.length),
          hasMore: next.length >= limit,
        });
      }
    );

    // 计算值
    const disabled = computed(() => state.loading || !props.hasMore);

    const handleClick = (item) => {
      if (item.id === props.currentImg.id) return;
      // 触发 changeImg
      ctx.emit('changeImg', item);
    };

    const loadMore = () => {
      Object.assign(state, {
        loading: true,
      });
      queryNextPage({
        offset: props.offset,
        type: props.type,
        labelId: props.labelId,
      }).then(() => {
        Object.assign(state, {
          loading: false,
        });
      });
    };

    return {
      state,
      disabled,
      loadMore,
      handleClick,
      listWrapper,
    };
  },
};
</script>
<style scoped lang="scss">
.infinite-list-wrapper {
  ul {
    margin-bottom: 28px;
  }
}
</style>
