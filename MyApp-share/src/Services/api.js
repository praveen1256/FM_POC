import { Config } from '@/Config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector, useState } from 'react-redux'
import {getUserStore} from '@/Store'
import { useStore } from 'react-redux'
import {store} from '@/Store';



const baseQuery = (baseUrl: string) => fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
    
      headers.set('username', 'intusercap1001')
      headers.set('password', 'password')
      headers.set('Content-Type', 'application/json')
    

      return headers
    },
  })

  function getStoreDetails() {
    return Config.API_URL;
    // const storeApi = store.getState();
    // return storeApi.apiBaseUrl.baseUrl;
 }

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  console.log('Config.API_URL', Config.API_URL);
  // const counter = useState(state.api.baseUrl)
  // const store = useStore()
  // const storestate = store.getState()
  console.log('useSelector base url', getStoreDetails());
  console.log('useSelector args', args);
  console.log('useSelector api', api);
  console.log('useSelector extraOptions', extraOptions);
  
  const baseUrl = getStoreDetails()
  // alert(baseUrl);
  if (!baseUrl) {
    return {
      error: {
        status: 400,
        statusText: 'Bad Request',
        data: 'No GitLab Host found',
      },
    };
  }
  let result = await baseQuery(baseUrl)(args, api, extraOptions)
  //  alert(JSON.stringify(result));
  if (result.error && result.error.status === 401) {
    // here you can deal with 401 error
    //alert(JSON.stringify(result.error));
  }
  return result
}

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
})
