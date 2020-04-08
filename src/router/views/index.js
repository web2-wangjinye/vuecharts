import Layout from '@/page/layout/index.vue'
const _import = require('../_import')
export default [
    {
        path: '/wel',
        component: Layout,
        redirect: '/wel/index',
        children: [{
            path: 'index',
            name: '首页',
            component: _import('wel')
        }]
    },
    {
        path: '/test',
        component: _import('Hello', 'components')
    }
]
