const _import = require('../_import')
export default [{
    path: '/login',
    name: '登录页',
    component: _import('login/index'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  },
  {
    path: '/404',
    component: _import('error-page/404', 'components'),
    name: '404'
  },
  {
    path: '/',
    name: '主页',
    redirect: '/wel'
  }
]
