import { data } from "./data.json";

import createAPIServices from "./commonServices/BaseApiService";
const api = createAPIServices();

export const GetListTrade = (page: number, size: number) => {
  return api.makeRequest({
    url: `/trade/all?size=1000000`,
    method: "GET",
  });
};
