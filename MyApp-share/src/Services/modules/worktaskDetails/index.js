import { api } from '@/Services/api'
import fetchOne from './fetchOne'

export const worktaskDetailApi = api.injectEndpoints({
  endpoints: build => ({
    fetchOne: fetchOne(build),
  }),
  overrideExisting: true,
}) 

export const { useLazyFetchOneQuery } = worktaskDetailApi
 