<template>
  <div class="sidebar-logo-container">
    <router-link class="sidebar-logo-link ellipsis" to="/">
      <img :src="title" class="sidebar-title" />
    </router-link>
  </div>
</template>

<script>
import title from '@/assets/images/dl-title.png';

export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';

.sidebar-logo-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  overflow: hidden;

  & .sidebar-logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: 600;
    color: 666;

    & .sidebar-logo {
      width: calc(#{$iconBarWidth} - 12px);
      margin-right: 6px;
      margin-left: 6px;
    }

    & .sidebar-title {
      width: 150px;
    }
  }
}
</style>
