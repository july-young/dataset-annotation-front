
<template>
  <collapse-box ref="collapseBoxRef" title="高级设置">
    <template #content>
      <el-form ref="formRef" :model="form" label-width="120px" class="auto-annotate-filter-form">
        <el-form-item label="文件标注信息" name="status">
          <InfoRadio
            :value="form.status"
            :dataSource="fileStatusOptions"
            labelKey="name"
            valueKey="code"
            @change="handleStatusChange"
          />
        </el-form-item>
      </el-form>
    </template>
  </collapse-box>
</template>
<script>
import { defineComponent, ref, computed, reactive, watchEffect } from '@vue/composition-api';

import CollapseBox from '@/components/CollapseBox';
import InfoRadio from '@/components/InfoRadio';
import { fileCodeMap } from '../../util';

export default defineComponent({
  name: 'AutoAnnotateFilter',
  components: {
    CollapseBox,
    InfoRadio,
  },
  model: {
    event: 'update:value',
  },
  props: {
    value: {
      type: [String, Number],
    },
  },
  setup(props, { emit }) {
    const formRef = ref(null);
    const form = reactive({
      status: props.value,
    });

    const fileStatusOptions = computed(() => {
      return [{ code: fileCodeMap.ALL, name: '不限' }].concat([
        {
          code: fileCodeMap.NO_ANNOTATION,
          name: '无标注信息',
        },
        {
          code: fileCodeMap.HAVE_ANNOTATION,
          name: '有标注信息',
        },
      ]);
    });

    const handleStatusChange = (value) => {
      emit('update:value', value);
    };

    watchEffect(() => {
      Object.assign(form, {
        status: props.value,
      });
    });

    return {
      form,
      formRef,
      fileStatusOptions,
      handleStatusChange,
    };
  },
});
</script>
<style lang="less" scoped>
.auto-annotate-filter-form {
  .ant-form-item {
    margin-bottom: 12px;
  }
}
</style>
