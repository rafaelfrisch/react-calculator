import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
    multipleByAmount: (state, action) => {
      state.value *= action.payload
    },
    divideByAmount: (state, action) => {
      state.value /= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount, multipleByAmount, divideByAmount } = counterSlice.actions

export default counterSlice.reducer