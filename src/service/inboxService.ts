import InboxService from "./service";

const service = InboxService.enhanceEndpoints({
  addTagTypes: ["demo"],
}).injectEndpoints({
  // Define a expected endpoints
  endpoints: (builder: any) => ({
    getMailListResponse: builder.query({
      // query: () => `/mail-server/?project=${localStorage.getItem("project")}&page=1&page_size=100`, // dynamic project ID
      query: (param: any) => ({
        url: `/mail-inbox/mail/get-inboxes/?project=${localStorage.getItem("project")}&setting=${localStorage.getItem("settingId")}`,
        method: "GET",
        params: param,
      }),
    }),
    getConversationDetails: builder.query({
      query: (param: any) =>
        `/mail-inbox/mail/get-inboxes/${param.id}/?project=${localStorage.getItem("project")}&setting=${localStorage.getItem("settingId")}`,
    }),
    getConvoResponse: builder.query({
      query: () => "staticResponse/convoResponse.json",
    }),
    getAIReplyResponse: builder.mutation({
      query: (body: any) => ({
        url: `/mail-inbox/mail/ai-reply/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['mailer']
    }),
    getSettings: builder.query({
      query: (param : any) => ({
        url: `/setting/?ordering=-setting&nolimit=Y&project=${localStorage.getItem("project")}`,
        method: 'GET'
      }),
    }),
    sentMail: builder.mutation({
      query: (body: any) => ({
        url: `/mail-inbox/mail/compose/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['mailer']
    }),
    getTemplate: builder.query({
      query: () => `/template/107/?folder=17`
    }),
    setMailStatus: builder.mutation({
      query: (body: any) => ({
        url: `/mail-inbox/mail/status/?project=${localStorage.getItem("project")}&setting=${localStorage.getItem("settingId")}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['mailer']
    }),
    getLabelList: builder.query({
      query: (body: any) => ({
        url: `/mail-inbox/mail/get-lable-count/?project=${localStorage.getItem("project")}&setting=${localStorage.getItem("settingId")}`,
      }),
      invalidatesTags: ['mailer']
    }),
  })
  
});

export const {
  useLazyGetMailListResponseQuery,
  useLazyGetConvoResponseQuery,
  useLazyGetConversationDetailsQuery,
  useGetAIReplyResponseMutation,
  useLazyGetSettingsQuery,
  useSentMailMutation,
  useLazyGetTemplateQuery,
  useSetMailStatusMutation,
  useLazyGetLabelListQuery
} = service;
