<template>
  <div class="doc-link">
    <!-- <a class="link-action" target="_blank" :href="docsUrl"> -->
    <a class="link-action" target="_blank" >
      使用文档
      <IconFont type="externallink" />
    </a>
  </div>
</template>

<script>
const docsUrl = process.env.VUE_APP_DOCS_URL;

export default {
  name: 'Guideline',
  setup() {
    return {
      docsUrl,
    };
  },
};
</script>

<style lang="scss">
@import '~@/assets/styles/variables.scss';

.doc-link {
  margin-right: 20px;
  font-size: 14px;
  line-height: $navBarHeight;
  cursor: pointer;
}

.link-action {
  display: block;
  color: $infoColor;
  text-align: center;

  &:hover {
    color: $primaryColor;
  }
}
</style>
