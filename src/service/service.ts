// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // Define a service using a base URL
// const InboxService = createApi({
//   reducerPath: "Demo",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://pokeapi.co/api/v2/"
//   }),
//   endpoints: () => ({})
// });
// export { InboxService };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a local base URL
const InboxService = createApi({
  reducerPath: "InboxService",
  baseQuery: fetchBaseQuery({
    baseUrl: "/", // This allows you to access files in the public folder
  }),
  endpoints: () => ({
   
  }),
});

// export const { useGetLocalDataQuery } = InboxService;
export default InboxService;
