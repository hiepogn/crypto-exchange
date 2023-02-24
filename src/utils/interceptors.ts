import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // const newConfig = { ...config }
  // if (newConfig.headers && newConfig.headers['Content-Type'] === 'multipart/form-data')
  //   return newConfig
  // if (config.params) {
  //   newConfig.params = decamelizeKeys(config.params)
  // }
  // if (config.data) {
  //   newConfig.data = decamelizeKeys(config.data)
  // }
  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response
}

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

export const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)
  return axiosInstance
}
