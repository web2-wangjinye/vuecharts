
import double from './double'
var Mock = require('mockjs')
const mocks = [
  ...double
]
const responseFake = (url, type, respond) => {
  return Mock.mock(new RegExp(`/mock${url}`), type || 'get', respond)
}
export default mocks.map(route => {
  return responseFake(route.url, route.type, route.response)
})
