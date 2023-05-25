
<template>
  <el-form ref="form" :model="state.model" :rules="rules" label-width="100px">
    <el-form-item label="数据集名称" prop="name">
      <el-input v-model="state.model.name" />
    </el-form-item>
    <el-form-item label="版本号" prop="versionName">
      <el-input disabled :value="state.model.versionName" />
    </el-form-item>
    <el-form-item label="数据集描述" prop="versionNote">
      <el-input
        v-model="state.model.versionNote"
        type="textarea"
        placeholder="数据集描述长度不能超过100字"
        maxlength="100"
        rows="3"
        show-word-limit
      />
    </el-form-item>
  </el-form>
</template>

<script>
import { pick } from 'lodash';

import { reactive, ref, watch } from '@vue/composition-api';
import { validateName } from '@/utils/validate';
import { convertPreset } from '@/api/preparation/dataset';

export default {
  name: 'Convert',
  props: {
    row: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const form = ref(null);
    const rules = {
      name: [
        { required: true, message: '请输入预置数据集名称', trigger: ['change', 'blur'] },
        { validator: validateName, trigger: ['blur'] },
      ],
      remark: [{ required: false, message: '请输入数据集描述信息', trigger: 'blur' }],
    };

    const defaultModel = pick(props.row, ['datasetId', 'name', 'versionName', 'versionNote']);

    const state = reactive({
      model: { ...defaultModel },
    });

    const doConvert = () => {
      return convertPreset(form.value.model);
    };

    const resetModel = () => {
      Object.assign(state, {
        model: { ...defaultModel },
      });
    };

    watch(
      () => props.row,
      (next) => {
        Object.assign(state, {
          model: pick(next, ['datasetId', 'name', 'versionName', 'versionNote']),
        });
      }
    );

    return {
      rules,
      state,
      form,
      doConvert,
      resetModel,
    };
  },
};
</script>
