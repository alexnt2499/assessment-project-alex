import config from "./../configs/api-config";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class ApiClientBase {
  protected instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: config.BASE_URL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }
}

export default ApiClientBase;
