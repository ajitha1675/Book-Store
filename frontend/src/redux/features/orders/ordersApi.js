import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"
import getBaseUrl from "../../../utils/baseURL"

const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    Credentials: 'include'
  }),
  tagTypes: ['Orders'],
  endpoints: (builder) =>({
    createOrder : (builder.mutation) ({
      createOrder: (newOrder) =>({
        url: "/",
        method: "POST",
        body: newOrder,
        Credentials: 'include',
      })
    })
  })
})

export const {useCreateOrderMutation} = ordersApi;

export default ordersApi;
