import { createSlice } from '@reduxjs/toolkit'
import { STATE_REDUCER_KEY } from 'common/constants'

const initialState = {
  heroCarSlug: '',
  heroModel: '',
}

const slice = createSlice({
  name: STATE_REDUCER_KEY,
  initialState,
  reducers: {
    setHeroCarSlug(state, action) {
      state.heroCarSlug = action.payload
    },
    setHeroModel(state, action) {
      state.heroModel = action.payload
    },
  },
})

export const { setHeroCarSlug, setHeroModel } = slice.actions
export const { reducer } = slice
