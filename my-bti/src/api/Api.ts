interface params {
  path: string;
  signal?: AbortSignal;
  method?: string;
  body?: string | FormData | null;
  headers?: Record<string, string>;
}

class API {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetch({
    path = "",
    method = "GET",
    body,
    headers = {},
    signal,
    ...rest
  }: params) {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body,
      ...rest,
    });
    return await response.json();
  }
}

export { API };
