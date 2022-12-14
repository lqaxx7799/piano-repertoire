import { environment } from '@core/environment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPieceTechnique } from './repertoire.model';

export const repertoireApi = createApi({
  reducerPath: 'repertoireApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${environment.apiRootUrl}/api/v2/` }),
  endpoints: (builder) => ({
    getList: builder.query<IPieceTechnique, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});


export const { useGetListQuery } = repertoireApi;
