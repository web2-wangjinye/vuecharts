let baseUrl = ''
const env = process.env
// const root = '/api' // 真实数据请求
const root = '/mock' // 模拟数据请求
if (env.NODE_ENV === 'development') {
  baseUrl = `${root}` // 开发环境地址
} else if (env.NODE_ENV === 'production') {
  baseUrl = `http://localhost:8888` // 生产环境地址
} else if (env.NODE_ENV === 'test') {
  baseUrl = `http://localhost:8888` // 测试环境地址
}
export {
  baseUrl
}
