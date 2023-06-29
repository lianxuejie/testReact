// 引入axios和后面会用到的ts类型
import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from "axios";

const defaultConfig = {
  baseURL: process.env.BASE_URL,
  timeout: 120 * 1000, //超时
};

const request = (
  method: "get" | "post" | "put" | "delete" | "patch" | "head" | "options",
  url: string,
  params?: any,
  config?: AxiosRequestConfig, //自定义的配置
  interceptor?: {
    request?: any;
    response?: any;
  }
): any => {
  const finalConfig = { ...defaultConfig, ...config };
  const instance: AxiosInstance = axios.create(finalConfig); //使用传入的config覆盖默认
  instance.interceptors.request.use((request) => {
    // 请求拦截器
    return interceptor?.request && typeof interceptor.request === "function"
      ? //对单独的请求处理,执行请求传过来的
        interceptor.request(request)
      : // 在这里可以对请求参数做统一处理
        (() => {
          return request;
        })();
  });
  // 相应拦截器，与上面基本一致
  instance.interceptors.response.use(
    (
      response: AxiosResponse
    ): Promise<never> => {
      if (response.status === 200) {
        return response.data
      } else {
        return Promise.reject(response.data);
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  )
};
export default request;
