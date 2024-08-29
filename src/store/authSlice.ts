import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 type AuthType = boolean
 type ModeType = "dark" | "light"
 export interface UserType {
    name:string,
    email:string,
    password:string
 }
export interface AuthDataType {
    status: AuthType,
    userData: UserType | null
    theme: ModeType
}
const initialState:AuthDataType = {
    status: false,
    userData: null ,
    theme:"dark"
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
 login: (state,action:PayloadAction<UserType>)=>{
state.status = true
state.userData = action.payload
 },

 logout: (state )=>{
    state.status = false 
    state.userData = null
 },

 changeTheme:(state)=>{
   if( state.theme =="light") {
    state.theme = "dark"
    return
}
state.theme = "light"
}
  }
})

export const {login , logout , changeTheme} = authSlice.actions

export default authSlice.reducer

