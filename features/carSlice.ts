import { ImageSourcePropType } from "react-native";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rootstate } from "@/store";
import { InitialState } from "@react-navigation/native";

type imagetype = Record<string, ImageSourcePropType>;

export interface carSpecification {
  max_power: number | null;
  fuelConsumption: number | null;
  max_speed: number | null;
  acceleration: number | null;
}

export interface carFeatures {
  model: string | null;
  capacity: number | null;
  color: string | null;
  fuelType: string | null;
  gearType: 'automatic'|'manual' | null;
  seats:number | null,
}

export interface car {
  image: imagetype | null ;
  mainImage:imagetype |null;
  name: string | null;
  reviews: number | null;
  stars:number |null,
  owner: string | null;
  specification: carSpecification | null;
  features: carFeatures | null;
}

const initialState: car = {
  image: null,
  mainImage:null,
  name: null,
  reviews: null,
  stars:null,
  owner: null,
  specification: null,
  features: null,
};

const carSlice = createSlice({
  initialState,
  name: "car",
  reducers: {
    addCarVehicle: (state:car, action: PayloadAction<car>) => {
      state.image=action.payload.image,
      state.name=action.payload.name,
      state.reviews=action.payload.reviews,
      state.owner=action.payload.owner,
      state.features=action.payload.features,
      state.specification=action.payload.specification
      state.stars=action.payload.stars
      state.mainImage=action.payload.mainImage
    },
    removeCarVehicle: (state) => {
      state = {...initialState};
    },
  },
});

export const { addCarVehicle, removeCarVehicle } = carSlice.actions;
export const carSelector = (state: Rootstate) => state.car;
export default carSlice.reducer;
