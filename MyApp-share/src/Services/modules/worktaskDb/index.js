import { api } from '@/Services/api'
import fetchOne from './fetchOne'

export const worktaskApi = api.injectEndpoints({
  endpoints: build => ({
    fetchDb: fetchOne(build),
  }),
  overrideExisting: true,
}) 

export const { useLazyFetchDbQuery } = worktaskApi
 