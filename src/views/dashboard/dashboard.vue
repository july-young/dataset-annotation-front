<template>
  <div class="dashboard-container">
    <!-- <welcome /> -->
    <template v-if="show.data">
      <div class="section-title">数据管理</div>
      <el-card class="section-card" shadow="hover">
        <div class="card-head">
          <div class="card-head-title">数据集</div>
          <el-button class="card-head-button" type="primary" @click="goTo('/data/datasets')">
          进入项目</el-button
          >
        </div>
        <el-row>
          <el-col :xs="12" :sm="12" :lg="6">
            <CardPanel icon="shuju1" name="我的数据集" :value="privateCount" />
          </el-col>
          <el-col :xs="12" :sm="12" :lg="6">
            <CardPanel icon="shujumoxing" name="预置数据集" :value="publicCount" />
          </el-col>
        </el-row>
      </el-card>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { queryDatasetsCount } from '@/api/preparation/dataset';
import CardPanel from './components/CardPanel';
import Welcome from './components/Welcome';

export default {
  name: 'Dashboard',
  components: {
    Welcome,
    CardPanel,
  },
  data() {
    return {
      show: {
        data: false,
        development: false,
      },
      publicCount: 0,
      privateCount: 0,
    };
  },
  computed: {
    ...mapGetters(['permissions']),
  },
  mounted() {
    if (this.permissions.includes('data')) {
      this.show.data = true;
      this.getDatasetsCount();
    }
  },
  methods: {
    getDatasetsCount() {
      queryDatasetsCount().then((res) => {
        this.publicCount = res.publicCount;
        this.privateCount = res.privateCount;
      });
    },
    goTo(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-container {
  padding: 24px;
  color: #666;

  .section-title {
    height: 24px;
    margin: 26px 0 24px;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 2px;
  }

  .section-card {
    padding: 4px;

    &:last-child {
      margin-bottom: 34px;
    }
  }

  .card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    margin-bottom: 8px;

    &-title {
      height: 20px;
      font-size: 14px;
      font-weight: bold;
      line-height: 20px;
    }
  }
}
</style>
