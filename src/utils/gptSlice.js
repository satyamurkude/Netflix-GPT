import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
     showGptSearch:false
    },
    reducers:{
        toggleGptSearchBtn:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        }
    }
})                      

export const { toggleGptSearchBtn}=gptSlice.actions;
export default gptSlice.reducer;
