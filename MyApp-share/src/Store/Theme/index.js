import { createSlice } from '@reduxjs/toolkit'
import { Config } from '@/Config'

const slice = createSlice({
  name: 'theme',
  initialState: { theme: false, darkMode: false },
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = false
      }
    },
    setDefaultTheme: (state, { payload: { theme, darkMode } }) => {
      if (!state.theme) {
        state.theme = theme
        state.darkMode = false
      }
    },
  },
})

export const { changeTheme, setDefaultTheme } = slice.actions

export default slice.reducer
