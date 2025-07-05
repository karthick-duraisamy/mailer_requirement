import InboxService from "./service";

const service = InboxService.enhanceEndpoints({
  addTagTypes: ["demo"],
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (builder: any) => ({
    getMailListResponse: builder.query({
      query: () => `/mail-server/?project=${localStorage.getItem("project")}`, // dynamic project ID
    }),
    getConvoResponse: builder.query({
      query: () => "staticResponse/convoResponse.json",
    }),
    getConversationDetails: builder.query({
      query: (param: any) => `/mail-server/${param.id}/?project=${localStorage.getItem("project")}`
    }),
  }),
});

export const { useLazyGetMailListResponseQuery, useLazyGetConvoResponseQuery, useLazyGetConversationDetailsQuery } =
  service;
