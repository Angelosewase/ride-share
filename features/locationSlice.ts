import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rootstate } from "@/store";

export interface Location {
  usersLocation: {
    lat: null |number;
    long: null |number;
  };
  from: {
    lat: null |number;
    long:  null |number;
  };
  to: {
    lat:  null |number;
    long: null |number;
  };
}


type coordinates={
    long:number,
    lat:number
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
      state.usersLocation.lat= action.payload.lat
      state.usersLocation.long=action.payload.long
    },
    addfrom:(state,action:PayloadAction<coordinates>)=>{
        state.from.lat= action.payload.lat
        state.from.long=action.payload.long
    }, 
    addTo:(state,action:PayloadAction<coordinates>)=>{
        state.to.lat= action.payload.lat
        state.to.long=action.payload.long
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
