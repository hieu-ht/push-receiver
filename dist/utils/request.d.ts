import { AxiosRequestConfig } from 'axios';
export default function requestWithRety<T>(options: AxiosRequestConfig): Promise<T>;
