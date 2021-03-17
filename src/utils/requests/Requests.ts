import { BASE } from "../../common";

class Requests {
  private handleResponse = (res: Response) =>
    !res.ok ? Promise.reject(res) : res.json();

  private handleFetch = async (url: string, params: object) => {
    const data = await fetch(`${BASE}${url}`, params)
      .then((res) => {
        this.handleResponse(res);
      })
      .catch((err) =>
        console.warn(`
        Error fetching data from ${url};
        Got this error: ${err}.
      `)
      );

    return data;
  };

  getRequest = async (url: string) => {
    const params = {
      method: "GET",
    };

    return this.handleFetch(url, params);
  };

  postRequest = async (url: string, body?: object) => {
    const params = {
      method: "POST",
      body: JSON.stringify(body),
    };

    return this.handleFetch(url, params);
  };

  putRequest = async (url: string, body: object) => {
    const params = {
      method: "PUT",
      body: JSON.stringify({
        ...body,
      }),
    };

    return this.handleFetch(url, params);
  };
  deleteRequest = async (url: string, body?: object) => {
    const params = {
      method: "DELETE",
      body: JSON.stringify({
        ...body,
      }),
    };

    return this.handleFetch(url, params);
  };
}

const Request = new Requests();

export { Request };
