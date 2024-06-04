import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rootstate } from "@/store";


export interface typeUser{
    name:string |null,
    password:string |null,
    contact: string|number|null
}

const user:typeUser={
    name:null,
    password:null,
    contact:null
}

export const userSlice= createSlice({
    name:"user",
    initialState:user,
    reducers:{
        AddUser:(state,action:PayloadAction<typeUser>)=>{
             state.name=action.payload.name
             state.password=action.payload.password
             state.contact=action.payload.contact
        },
        logOut:(state)=>{
          state.name=user.name
          state.password= user.password
          state.contact=user.contact
        }
    }
})


export const AddUser = userSlice.actions.AddUser
export const LogOut = userSlice.actions.logOut

export const userSelector= (state:Rootstate)=>state.user
export default userSlice.reducer
