import { DataBAseUrl } from "@/constants/DataBase";
import { API } from "./Api";

export interface FetchArg<Updates = Record<string, unknown>> {
  signal: AbortSignal;
  userId?: number;
  updates?: Updates;
  id?: number;
}

export interface datesParams {
  date: string;
  times: string[];
}

class DataBaseApi extends API {
  async getDates() {
    return await this.fetch({ path: "dates/" });
  }

  async addDate(dates: datesParams) {
    try {
      const response = await this.fetch({
        path: `dates`,
        method: "POST",
        body: JSON.stringify(dates),
      });
      console.log(response);
      return response;
    } catch (error) {
      return console.error(error);
    }
  }
}

export default new DataBaseApi(DataBAseUrl);
