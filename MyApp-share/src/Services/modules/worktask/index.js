import { api } from '@/Services/api'
import fetchOne from './fetchOne'

export const worktaskApi = api.injectEndpoints({
  endpoints: build => ({
    fetchTwo: fetchOne(build),
  }),
  overrideExisting: true,
}) 

export const { useLazyFetchTwoQuery } = worktaskApi
 