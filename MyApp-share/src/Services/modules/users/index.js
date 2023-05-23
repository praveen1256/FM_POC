import { api } from '@/Services/api'
import fetchOne from './fetchOne'

export const userApi = api.injectEndpoints({

  endpoints: build => ({
    fetchOne: fetchOne(build),
  }),
  overrideExisting: false,
})

console.log('userApi index')
export const { useLazyFetchOneQuery } = userApi
