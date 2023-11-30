import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface IUser {
    fullName: string;
    email: string;
    token: string;
}

// Define the initial state using that type
const initialState: IUser = {
    fullName: '',
    email: '',
    token:''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      addUserData: (state, action: PayloadAction<IUser>) => {
      const { email, fullName, token } = action.payload
      state.email = email;
      state.fullName = fullName;
      state.token = token
    }
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { addUserData} = userSlice.actions



export default userSlice.reducer