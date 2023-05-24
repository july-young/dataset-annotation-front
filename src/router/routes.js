/** Copyright 2020 Tianshu AI Platform. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================
 */

import Layout from '@/layout/index';

const constantRoutes = [
  {
    name: 'Login',
    path: '/login',
    meta: { title: '登录' },
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    name: 'Register',
    path: '/register',
    meta: { title: '注册' },
    component: () => import('@/views/register'),
    hidden: true,
  },
  {
    name: 'Resetpassword',
    path: '/resetpassword',
    meta: { title: '找回密码' },
    component: () => import('@/views/resetpassword'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
  },
  // 个人中心
  {
    path: '/user',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'center',
        component: () => import('@/views/user/center'),
        name: 'UserCenter',
        meta: { title: '个人中心' },
      },
    ],
  },
];

export default constantRoutes;
