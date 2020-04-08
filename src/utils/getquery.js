/**
 * 获取url参数
 */
export const GetQueryString = (url, name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = url.substr(url.indexOf('?') + 1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
export const getRequest = (options) => {
  if (options.type === 'GET') {
    var theRequest = {}
    var strs = (options.url).split('?')[1].split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1])
    }
    return theRequest
  } else {
    return JSON.parse(options.body)
  }
}
