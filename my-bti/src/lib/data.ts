import { API } from "../api/Api";
const url = "http://localhost:8000";

interface datesParams {
  date: string;
  times: string[];
}

class DatesApi extends API {
  constructor(baseurl: string) {
    super(baseurl);
  }

  async getDates(dates: datesParams) {
    try {
      const response = await this.fetch({
        path: `dates`,
        method: "POST",
        body: JSON.stringify(dates),
      });
      if (!response.ok) {
        throw new Error("Cant POST");
      }
      return response;
    } catch (error) {
      return console.error(error);
    }
  }

  async getLoginUserResume() {
    try {
      const response = await this.fetch({ path: `dates`, method: "GET" });
      return {
        response,
      };
    } catch (e) {
      console.error(e);
    }
  }
}

export default new DatesApi(url);
