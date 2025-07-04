import InboxService from "./service";

const service = InboxService.enhanceEndpoints({
  addTagTypes: ["demo"],
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (builder: any) => ({
    getMailListResponse: builder.query({
      query: () => "staticResponse/listResponse.json", // path relative to public/
    }),
    getConvoResponse: builder.query({
      query: () => "staticResponse/convoResponse.json",
    }),
  }),
});

export const { useLazyGetMailListResponseQuery, useLazyGetConvoResponseQuery } =
  service;
