import { createSlice } from '@reduxjs/toolkit'
import { Config } from '@/Config'


const slice = createSlice({
  name: 'apiEnv',
  initialState: { apiEnv: Config.API_URL, listPagePrevOffset: [], listPageData : [] },
  reducers: {
    changeApiEnv: (state, { payload: { apiEnv } }) => {
      console.log('reducer initialState', state.apiEnv);
      console.log('aaa', apiEnv);
      //alert(apiEnv);
      if (typeof apiEnv !== 'undefined') {
        state.apiEnv = apiEnv
        console.log('reducer changeBaseUrl', state.apiEnv);
        //alert(state.apiEnv);
      }
    },
    changeListPagePrevOffset : (state, { payload: {  } }) => {
      console.log('reducer changeListPagePrevOffset', state.listPagePrevOffset);
      // console.log('offset', offset);
      //alert(apiEnv);
      // if (typeof offset !== 'undefined') {
        var temp = state.listPagePrevOffset;
        if(temp[temp.length - 1 ] != 'NA' )
        {
          temp.pop();
          state.listPagePrevOffset = temp;
          console.log('reducer changeBaseUrl', state.listPagePrevOffset);
          // alert();
        }
        
        //alert(state.apiEnv);
      // }
    },
    changeListPageNextOffset : (state, { payload: { offset } }) => {
      console.log('reducer changeListPageNextOffset', state.listPagePrevOffset);
      console.log('offset', offset);
      //alert(apiEnv);
      if (typeof offset !== 'undefined') {
        let temp = [...state.listPagePrevOffset] ;
        console.log('temp', temp);
        temp.push(offset)
        state.listPagePrevOffset = temp
        console.log('reducer changeBaseUrl', state.listPagePrevOffset);
        //alert(state.apiEnv);
      }
    },
    resetListPageNextOffset : (state, { payload: {  } }) => {
      console.log('reducer resetListPageNextOffset', state.listPagePrevOffset);
      
      //alert(apiEnv);
      
        let temp = ['NA'] ;
        console.log('temp', temp);
        
        state.listPagePrevOffset = temp
        console.log('reducer resetListPageNextOffset', state.listPagePrevOffset);
        //alert(state.apiEnv);
      
    },

  },
})

export const { changeApiEnv, changeListPagePrevOffset, changeListPageNextOffset, resetListPageNextOffset } = slice.actions

export default slice.reducer
