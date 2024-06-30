import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { creditCardData } from "@/components/ui/CreditCards";
import { Rootstate } from "@/store";
export type AmountDetails = {
  amount: number;
  tax: number;
};

export interface paymentDetails {
  creditCardDetails: creditCardData | null;
  amountDetails: AmountDetails | null;
}

const initialState: paymentDetails = {
  creditCardDetails:null,
  amountDetails: null,
};

export const paymentSlice = createSlice({
  initialState,
  name: "payment",
  reducers: {
      addCreditCardDetails:(state:paymentDetails,action:PayloadAction<creditCardData>)=>{
        state.creditCardDetails=action.payload
      },
      addAmountDetails:(state:paymentDetails, action:PayloadAction<AmountDetails>)=>{
       state.amountDetails=action.payload
      }
  },
});



export const {addAmountDetails, addCreditCardDetails}=paymentSlice.actions
export const paymentDetailsSelector= (state:Rootstate)=>state.payment;
export const creditcardSelector=(state:Rootstate)=>state.payment.creditCardDetails
export default paymentSlice.reducer

