<template>
  <div class="resource-monitoring-wrapper">
    <el-button
      type="text"
      icon="el-icon-refresh"
      class="refresh-icon"
      :class="{ refreshing }"
      @click="onRefresh"
    />
    <el-popover placement="bottom" trigger="hover">
      <span slot="reference">{{ baseInfo }}</span>
      <UserResourceMonitor
        v-if="resourceInfo"
        :resource-info="resourceInfo"
        class="resource-monitoring-body"
      />
      <div v-else class="tc">暂无监控信息</div>
    </el-popover>
  </div>
</template>

<script>
import { computed, onUnmounted, ref } from '@vue/composition-api';

import { emitter, WEB_SOCKET_TOPIC_ENUM, memFormatter, sendMsg, isSocketOpen } from '@/utils';
import UserResourceMonitor from '@/components/UserResourceMonitor';

const useGetResourceInfo = () => {
  const resourceInfo = ref(null);

  // 基础信息展示
  const baseInfo = computed(() => {
    if (!resourceInfo.value) {
      return '暂无监控信息';
    }
    const { usedCpu, hardCpu, usedGpu, hardGpu, usedMemory, hardMemory } = resourceInfo.value;
    return `当前资源占用量 —— CPU: ${usedCpu}核 / ${hardCpu}核  GPU: ${usedGpu}卡 / ${hardGpu}卡  内存: ${memFormatter(
      usedMemory
    )} / ${memFormatter(hardMemory)}`;
  });

  const refreshing = ref(false);
  const onRefresh = () => {
    refreshing.value = true;
    sendMsg(WEB_SOCKET_TOPIC_ENUM.RESOURCE_MONITOR);
    setTimeout(() => {
      refreshing.value = false;
    }, 1000);
  };

  return {
    resourceInfo,
    baseInfo,
    onRefresh,
    refreshing,
  };
};

export default {
  name: 'ResourceMonitoring',
  components: { UserResourceMonitor },
  setup() {
    const { resourceInfo, baseInfo, onRefresh, refreshing } = useGetResourceInfo();

    return {
      baseInfo,
      resourceInfo,
      onRefresh,
      refreshing,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';

.resource-monitoring-wrapper {
  margin-right: 20px;
  font-size: 14px;
  line-height: $navBarHeight;
  color: $infoColor;
  cursor: pointer;
}

.resource-monitoring-body {
  max-height: 500px;
  overflow: auto;
}

::v-deep .refresh-icon {
  color: $infoColor;

  i {
    display: inline-block;
  }
}

::v-deep .refreshing i {
  animation: rotate 1s linear;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
