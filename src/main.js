import Vue from 'vue';
import Element from 'element-ui';
import VueCompositionAPI from '@vue/composition-api';
// 快捷键
import VueHotkey from 'v-hotkey';
import PortalVue from 'portal-vue';

// global css
import 'normalize.css/normalize.css';

import App from './App';
import store from './store';
import router from './router';
import directives from './directives';
// 数据字典
import dict from './components/Dict';
// IconFont
import IconFont from './components/IconFont';
// 表单验证
import { ValidationProvider, ValidationObserver } from './utils/validate';

// 错误处理
import './boot';
// 可视化icon
import './assets/styles/index.scss';
// 本地 Icon
import './svgs';

Vue.use(Element);
Vue.use(VueCompositionAPI);
Vue.use(VueHotkey);
Vue.use(dict);
Vue.component(IconFont.name, IconFont);
// 表单验证
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(PortalVue);

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
