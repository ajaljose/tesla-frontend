import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sample: {},
}

const slice = createSlice({
  name: 'common-services',
  initialState,
  reducers: {
    setSample(state, action) {
      state.sample = action.payload
    },
  },
})

export const { setSample } = slice.actions
export const { reducer } = slice