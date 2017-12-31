let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://x.x.x.x:5555'
} else {
  baseUrl = 'https://www.baidu.com/'
}
export default {
  'pro1': baseUrl
}
