<template>
  <div class="flex flex-center flex-col entry-wrapper">
    <div class="flex box-wrapper">
      <div
        :class="['radio-label', state.entrance === 0 ? 'border-chosen' : 'border']"
        @click="changeRadio(0)"
      >
        <img src="@/assets/images/dataset/normalDataset.png" width="50%" />
        <div class="mb-20 mt-20 bold">
          视觉/语音/文本
        </div>
        <div class="tl">
          针对图像、视频、语音、文本及自定义格式的数据标注，涵常规深度学习领域场景
        </div>
      </div>

    </div>
    <div class="tc">
      <el-button type="primary" @click="handleNext">
        下一步
      </el-button>
    </div>
  </div>
</template>
<script>
import { reactive } from '@vue/composition-api';
import { cacheDatasetType, pushUrl } from './util';

export default {
  name: 'Entrance',
  setup(props, ctx) {
    const { $router } = ctx.root;

    const redirect = (val) => $router.push({ path: pushUrl[val] });

    const state = reactive({
      entrance: 0,
    });

    const changeRadio = (val) => {
      state.entrance = val;
    };

    const handleNext = () => {
      // 缓存用户选择类型
      cacheDatasetType(state.entrance);
      redirect(state.entrance);
    };

    return {
      state,
      changeRadio,
      handleNext,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.entry-wrapper {
  height: calc(100vh - 50px - 32px);
}

.box-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto 64px;
}

.radio-label {
  width: 250px;
  min-height: 320px;
  padding: 30px 16px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  border-radius: 12px;
}

.border {
  border: 2px solid $borderColor;
}

.border-chosen {
  background-color: $subMenuBg;
  border: 2px solid $primaryColor;
}
</style>
