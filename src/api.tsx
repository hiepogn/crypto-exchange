import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // if (response.data) {
  //   response.data = camelizeKeys(response.data)
  // }
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

const baseURL = process.env.REACT_APP_BASE_API_URL
const api = setupInterceptorsTo(axios.create({ baseURL }))

export default api
