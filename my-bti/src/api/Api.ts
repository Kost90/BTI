interface params{
    path:string,
    method:string,
    body?: string | FormData | null,
    headers?:Record<string,string>,
}

class API {
    baseUrl: string
    constructor(baseUrl:string) {
      this.baseUrl = baseUrl
    }
  
    fetch({ path = '', method = 'GET', body, headers = {}, ...rest }:params) {
      return fetch(`${this.baseUrl}/${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
          ...headers,
        },
        body,
        ...rest,
      }).then((response) => response.json())
    }
  }
  
  export { API }