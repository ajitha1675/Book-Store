import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseUrl'

const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books/get-book`,
  credentials: 'include',
  prepareHeaders: (Headers) =>{
    const token = localStorage.getItem('token');
    if(token){
       Headers.set('Authorization', `Bearer ${token}`)
    }
    return Headers;
  }
})

const booksApi = createApi({
  reducerPath: 'bookApi',
  baseQuery,
  tagTypes: ['Book'],
  endpoints: (builder) =>({
    fetchAllBooks: builder.query({
      query: () => "/",
      providesTags: ["Books"]
    })
  })
})

export const{useFetchAllBooksQuery} =  booksApi;
export default booksApi;