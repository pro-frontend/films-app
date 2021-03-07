import { API_KEY, BASE_API } from "../../common";

class Requests {
  async getRequest(endpoint: string): Promise<Record<string, number | string>> {
    let response = await fetch(`${BASE_API}${endpoint}?${API_KEY}`).then((e) =>
      e.json()
    );
    return response;
  }
  async postRequest(
    endpoint: string,
    body: object
  ): Promise<Record<string, number | string>> {
    let response = await fetch(
      `${BASE_API}${endpoint}?${API_KEY}`,
      body
    ).then((e) => e.json());
    return response;
  }
  async putRequest(
    endpoint: string,
    body: object
  ): Promise<Record<string, number | string>> {
    let response = await fetch(
      `${BASE_API}${endpoint}?${API_KEY}`,
      body
    ).then((e) => e.json());
    return response;
  }
  async deleteRequest(
    endpoint: string,
    body: object
  ): Promise<Record<string, number | string>> {
    let response = await fetch(
      `${BASE_API}${endpoint}?${API_KEY}`,
      body
    ).then((e) => e.json());
    return response;
  }
}

const Request = new Requests();

export { Request };
