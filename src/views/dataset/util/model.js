// 模型服务实例状态，每个单独的模型服务
export const modelInstanceStatusEnum = {
  STARTING: { code: 101, text: '启动中', status: '' },
  SERVING: { code: 102, text: '运行中', status: 'success' },
  START_FAILED: { code: 103, text: '启动失败', status: 'danger' },
  STOPPING: { code: 104, text: '停止中', status: 'warning' },
  STOPPED: { code: 105, text: '已停止', status: 'info' },
};

// 模型状态
// getmodelDeploymentStatusKey(101) === 'STARTING'
export const getmodelDeploymentStatusKey = (code) => {
  for (const key in modelInstanceStatusEnum) {
    if (modelInstanceStatusEnum[key].code === Number(code)) return key;
  }
  return undefined;
};

export const modelActions = [
  {
    key: 'MODEL_DEPLOY',
    actionName: '启动',
    when: ['STOPPED', 'START_FAILED'],
  },
  {
    key: 'MODEL_DEPLOYMENT_OFF',
    actionName: '停止',
    when: ['STARTING', 'SERVING'],
  },
  {
    key: 'MODEL_MODIFY',
    actionName: '编辑',
    when: ['STOPPED', 'START_FAILED'],
  },
  {
    key: 'MODEL_LOG',
    actionName: '日志',
    when: ['STARTING', 'SERVING', 'STOPPING'],
  },
];
