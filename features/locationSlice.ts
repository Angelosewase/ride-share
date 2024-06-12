import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rootstate } from "@/store";

export interface Location {
  usersLocation: {
    name?:string,
    lat: null |number;
    long: null |number;
  };
  from: {
    name?:string,
    lat: null |number;
    long:  null |number;
  };
  to: {
    name?:string,
    lat:  null |number;
    long: null |number;
  };
}


type coordinates={
    name?:string,
    long:number | null,
    lat:number | null
}

const initialLocation: Location = {
  usersLocation: {
    lat: null,
    long: null,
  },
  from: {
    lat: null,
    long: null,
  },
  to: {
    lat: null,
    long: null,
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialLocation,
  reducers: {
    addUsersLocation:(state,action:PayloadAction<coordinates>)=>{
      state.usersLocation.lat= action.payload?.lat
      state.usersLocation.long=action.payload?.long
    },
    addfrom:(state,action:PayloadAction<coordinates>)=>{
        state.from.lat= action.payload?.lat
        state.from.long=action.payload?.long
        state.from.name=action.payload?.name
    }, 
    addTo:(state,action:PayloadAction<coordinates>)=>{
        state.to.lat= action.payload?.lat
        state.to.long=action.payload?.long
        state.to.name=action.payload?.name
    },


  },
});


export const setUserlocation = locationSlice.actions.addUsersLocation
export const setFromlocation = locationSlice.actions.addfrom
export const setTolocation = locationSlice.actions.addTo

export const userlocationSelector =(state:Rootstate)=> state.location.usersLocation
export const userfromlocationSelector =(state:Rootstate)=> state.location.from
export const usertoSelector =(state:Rootstate)=> state.location.to

export default locationSlice.reducer
