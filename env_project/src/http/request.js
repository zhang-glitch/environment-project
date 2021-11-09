import axios from 'axios'


export default function request (config) {

  const instance = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    // baseURL: 'http://zhenshang.cn.utools.club',
    timeout: 1000,
  })

  // 请求拦截
  instance.interceptors.request.use((config) => {
    return config
  })

  // 响应拦截
  instance.interceptors.response.use((config) => {
    // console.log("config", config.data)
    const { data } = config
    if (data.status === 200) {
      return data.data
    } else {
      return new Error("请求错误")
    }
  })

  // 发送请求
  return instance(config)
}
