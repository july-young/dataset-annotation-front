<template>
  <div class="public">
    <el-popover placement="top" trigger="hover" content="敬请期待" popper-class="w100">
      <div slot="reference" @mouseenter="hover = false" @mouseleave="hover = true">
        <img v-if="hover" :src="base" />
        <img v-else :src="hoverurl" />
      </div>
    </el-popover>
    <span class="hover-tit" :style="hoverColor">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'ImagePublic',
  props: {
    base: {
      type: String,
      default: '',
    },
    hoverurl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      hover: true,
    };
  },
  computed: {
    hoverColor() {
      return this.hover ? 'color: rgba(178, 178, 178, 1)' : 'color: #444';
    },
  },
};
</script>
<style lang="scss" scoped>
.public {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 9vw;

  img {
    display: block;
    width: 4vw;
    margin-bottom: 10px;
    transition: all 0.5s;
  }

  img:hover {
    transform: scale(1.2);
  }

  .hover-tit {
    overflow: hidden;
    font-size: 1vw;
    line-height: 24px;
    color: rgba(178, 178, 178, 1);
    text-overflow: ellipsis;
    letter-spacing: 1px;
    white-space: nowrap;
    transition: all 0.5s;
  }
}
</style>
