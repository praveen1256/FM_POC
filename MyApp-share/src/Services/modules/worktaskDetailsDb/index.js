import { api } from '@/Services/api'
import fetchOne from './fetchOne'

export const worktaskDetailApi = api.injectEndpoints({
  endpoints: build => ({
    fetchFour: fetchOne(build),
  }),
  overrideExisting: true,
}) 

export const { useLazyFetchFourQuery } = worktaskDetailApi
 