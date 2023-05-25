<template>
  <div class="setting-container-footer">
    <el-form-item label="标注类型标签">
      <el-switch :value="showTag" @change="toggleShowTag" />
    </el-form-item>
    <el-form-item v-if="!isSegmentation" label="智能评分">
      <el-switch :value="showScore" @change="toggleShowScore" />
    </el-form-item>
    <el-form-item v-if="isTrack" label="标注 Id">
      <el-switch :value="showId" @change="toggleShowId" />
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    updateState: Function,
    showScore: Boolean,
    showTag: Boolean,
    showId: Boolean,
    toggleShowTag: Function,
    toggleShowScore: Function,
    toggleShowId: Function,
    isTrack: Boolean,
    isSegmentation: Boolean,
  },
};
</script>
