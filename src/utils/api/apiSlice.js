import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'API',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_HOST }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (id) => ({
                url: `users/${id}?delay=2`
            })
        }),
        getUsers: builder.query({
            query: ({ pageNum, perPage }) => ({
                url: `users?delay=2&page=${pageNum}&per_page=${perPage}`
            })
        })
    })
});

export const { useGetUserQuery, useGetUsersQuery } = apiSlice;
