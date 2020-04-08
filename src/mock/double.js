import { getRequest } from '../utils/getquery'
const Mock = require('mockjs')
// mock一组数据
const produceNewsData = function (options) {
  // 获取传递参数
  console.log(getRequest(options))
  const Random = Mock.Random
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Random.time()
    }
    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
}
export default[
  {
    url: '/tokerInf/form/projectOrder/editOrder',
    type: 'post',
    response: produceNewsData
  },
  {
    url: '/shop/goods/category/all',
    type: 'get',
    response: produceNewsData
  }
]
