import { DataBAseUrl } from "@/constants/DataBase";
import { unstable_noStore as noStore } from "next/cache";
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
    noStore();
    return await this.fetch({ path: "dates", method: "GET" });
  }

  async addDate(dates: datesParams) {
    try {
      const response = await this.fetch({
        path: `dates`,
        method: "POST",
        body: JSON.stringify(dates),
      });
      return response;
    } catch (error) {
      return console.error(error);
    }
  }
}

export default new DataBaseApi(DataBAseUrl);
