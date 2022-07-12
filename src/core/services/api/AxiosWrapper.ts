import axios, {
  Axios,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

class AxiosWrapper extends Axios {
  headers: AxiosRequestHeaders = {
    'Content-Type': 'application/json',
  };

  post<T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    data?: D | undefined,
    config?: AxiosRequestConfig<D> | undefined,
  ): Promise<R> {
    return axios.post(url, data, {
      ...config,
      headers: {
        ...this.headers,
        ...config?.headers,
      },
    });
  }

  get<T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D> | undefined,
  ): Promise<R> {
    return axios.get(url, {
      ...config,
      headers: {
        ...this.headers,
        ...config?.headers,
      },
    });
  }
}

const axiosAPI = new AxiosWrapper();

export {axiosAPI};
