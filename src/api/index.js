import axios from 'axios'
import { Notice, LoadingBar } from 'iview'
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// 添加请求拦截器
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
axios.interceptors.request.use(
  config => {
    LoadingBar.start()
    return config
  },
  error => {
    LoadingBar.finish()
    Notice.error({
      title: '加载超时'
    })
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    LoadingBar.finish()
    return response
  },
  error => {
    LoadingBar.finish()
    Notice.error({
      title: '加载失败'
    })
    return Promise.resolve(error.response)
  }
)

// 处理状态
const checkStatus = res => {
  const { status, data, config } = res
  // if (status === 403) {
  //   router.push('/exception/403');
  //   return;
  // }
  // if (status <= 504 && status >= 500) {
  //   router.push('/exception/500');
  //   return;
  // }
  // if (status >= 404 && status < 422) {
  //   router.push('/exception/404');
  // }
  if (res.status === 200 || res.status === 304) {
    return data
  } else {
    Notice.error({
      message: `请求错误 ${status}: ${config.url}`,
      description: codeMessage[status]
    })
  }
}
// 过滤URL
const filterUrl = (url = '') => {
  if (/^(https:)\S*$/.test(url) || /^(\/\/)\S*$/.test(url)) {
    return url
  } else {
    return process.env.VUE_APP_BASE_API + url
  }
}

/**  post
 *
 * @param {String} url  请求URL
 * @param {Object} data  入参
 * @returns  Promise
 */
export default {
  $post (url, data) {
    return axios({
      method: 'post',
      url: filterUrl(url),
      data,
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      }
    }).then(checkStatus)
  },
  $get (url, data) {
    return axios({
      method: 'get',
      url: filterUrl(url),
      params: data,
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(checkStatus)
  }
}
