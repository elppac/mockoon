import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFetchInterceptorService {
  public initialize() {
    const originalFetch = window.fetch;

    window.fetch = async (
      input: RequestInfo,
      init?: RequestInit
    ): Promise<Response> => {
      const defaultHeaders = {
        'X-Gm-Device-Id': localStorage.getItem('deviceId')
      };

      const modifiedInit: RequestInit = {
        ...init,
        headers: {
          ...defaultHeaders,
          ...(init?.headers || {})
        }
      };

      return originalFetch(input, modifiedInit);
    };
  }
}
