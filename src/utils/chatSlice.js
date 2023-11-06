import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: []
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      if(state.messages.length > 200) {
        state.messages.splice(40,1)
      }
      state.messages.unshift(action.payload)
    },
    clearMessages: (state) => {
      state.messages = []
    }
  }
});

export const {addMessage, clearMessages} = chatSlice.actions

export default chatSlice.reducer