<template>
  <div class="info-data-table">
    <el-table
      ref="table"
      v-loading="state.loading"
      highlight-current-row
      v-bind="tableAttrs"
      :data="state.list"
    >
      <InfoTableColumn
        v-for="col in columns"
        :key="col.prop"
        :refresh="refresh"
        :setPageInfo="setPageInfo"
        v-bind="col"
      />
      <slot />
    </el-table>

    <el-pagination
      v-if="showPagination"
      :style="`text-align:${align};margin-top: 8px;`"
      layout="total, prev, pager, next, sizes"
      v-bind="pageAttrs"
      :page-size="pageInfo.pageSize"
      :total="pageInfo.total"
      :current-page="pageInfo.current"
      @size-change="sizeChange"
      @current-change="pageChange"
    />
  </div>
</template>
<script>
import { onMounted, reactive, watch } from '@vue/composition-api';
import InfoTableColumn from './column';

export default {
  name: 'InfoTable',
  components: {
    InfoTableColumn,
  },
  props: {
    request: Function,
    params: {
      type: Object,
      default: () => ({}),
    },
    columns: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => ({
        pageSizes: [10, 20, 50],
      }),
    },
    tableAttrs: {
      type: Object,
      default: () => ({}),
    },
    align: {
      type: String,
      default: 'center',
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
    dataSource: Array,
    actionRef: Function,
  },
  setup(props) {
    const { request, pagination = {}, actionRef } = props;

    const state = reactive({
      list: [],
      loading: false,
    });

    const pageAttrs = {
      ...pagination,
    };

    const pageInfo = reactive({
      current: pagination.current || 1,
      total: 0,
      pageSize: pagination.pageSize || 10,
    });

    // 更新分页信息
    const setPageInfo = (info = {}) => {
      Object.assign(pageInfo, info);
    };

    // 更新数据
    const setData = (data) => {
      Object.assign(state, {
        list: data,
      });
    };

    // 更新分页信息
    const setLoading = (loading) => {
      Object.assign(state, {
        loading,
      });
    };

    const sizeChange = (size) => {
      setPageInfo({
        pageSize: size,
      });
    };

    const pageChange = (current) => {
      setPageInfo({
        current,
      });
    };

    const queryList = async (cfg = {}) => {
      if (state.loading) {
        return;
      }
      setLoading(true);
      const { pageSize, current } = pageInfo;
      try {
        const res = await request({
          current,
          size: pageSize,
          ...props.params,
          ...cfg,
        });
        // 这边按照统一的 result, page 来进行管理
        const { result = [], page = {} } = res || {};
        setPageInfo({ total: page.total });
        setData(result);
      } finally {
        setLoading(false);
      }
    };

    onMounted(() => {
      // 首先判断是否为异步请求
      if (typeof request === 'function') {
        queryList();
        if (typeof actionRef === 'function') {
          actionRef().value = {
            refresh: queryList,
          };
        }
      } else if (Array.isArray(props.dataSource)) {
        // 检测是否为静态数据源
        setData(props.dataSource);
      }
    });

    watch(
      () => pageInfo.pageSize,
      () => {
        setPageInfo({ ...pageInfo, current: 1 });
        queryList();
      }
    );

    watch(
      () => props.dataSource,
      (next) => {
        setData(next);
      }
    );

    watch(
      () => pageInfo.current,
      () => {
        queryList();
      }
    );

    return {
      state,
      pageAttrs,
      pageInfo,
      refresh: queryList,
      setPageInfo: (info) =>
        setPageInfo({
          ...pageInfo,
          ...info,
        }),
      sizeChange,
      pageChange,
    };
  },
};
</script>
