import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '6285715144242bd4e87c78f80ab3cd45';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/services/rest' }),
  endpoints: (build) => ({
    getPhotos: build.query({
      query: (search: string) =>
        `?method=flickr.photos.search&api_key=${API_KEY}&text=${
          search ? search : 'nature'
        }&per_page=12&page=1&format=json&nojsoncallback=1`,
    }),
    getOnePhoto: build.query({
      query: (id: string) =>
        `?method=flickr.photos.getAllContexts&api_key=${API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`,
    }),
  }),
});

export const { useGetPhotosQuery, useGetOnePhotoQuery } = photoApi;
