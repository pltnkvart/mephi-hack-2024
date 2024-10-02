import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../types/constants';
import { IRating,  } from '@shared/IRating';
import { IUser } from "@shared/IUser";
import { IStoreItem } from '@shared/IStoreItem';

export const API = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["User", "Store"],
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => `users`,
        }),
        getUserById: builder.query<IUser, string>({
            query: (id) => `users/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'User', id }],
        }),
        getUserRating: builder.query<IRating, string>({
            query: (id) => `rating/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'User', id }],
        }),
        getStore: builder.query<IStoreItem[], void>({
            query: () => `store`,
            providesTags: (result) =>
                result
                  ? [
                      ...result.map(({ id }) => ({ type: 'Store' as const, id })),
                      { type: 'Store', id: 'LIST' },
                    ]
                  : [{ type: 'Store', id: 'LIST' }],
        }),
        getPriveleges: builder.query<IStoreItem[], void>({
            query: () => `privileges`,
            providesTags: (result) =>
                result
                  ? [
                      ...result.map(({ id }) => ({ type: 'Store' as const, id })),
                      { type: 'Store', id: 'LIST' },
                    ]
                  : [{ type: 'Store', id: 'LIST' }],
        }),
        buyItem: builder.mutation<void, { userId: string, itemId: string }>({
            query: ({userId, itemId}) => ({
                url: "store/buy",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    itemId,
                })
            }),
            invalidatesTags: (_result, _error, { userId }) => [
                { type: 'User', id: userId },
                { type: 'Store', id: 'LIST' },
            ],
        })
    })
})

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useGetUserRatingQuery,
    useGetStoreQuery,
    useGetPrivelegesQuery,
    useBuyItemMutation,
} = API;