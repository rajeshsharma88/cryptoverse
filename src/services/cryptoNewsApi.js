import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-key": "5565ce8248msh31e62dddf3ba7abp1ec3bejsn9e70f8be5157",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
// var options = {
//   method: "GET",
//   url: "https://bing-news-search1.p.rapidapi.com/news",
//   params: { safeSearch: "Off", textFormat: "Raw" },
//   headers: {
//     "x-bingapis-sdk": "true",
//     "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//     "x-rapidapi-key": "5565ce8248msh31e62dddf3ba7abp1ec3bejsn9e70f8be5157",
//   },
// };
