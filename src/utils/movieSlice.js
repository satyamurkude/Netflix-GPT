import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        trailerVideo:[],
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }


});
export const {addNowPlayingMovies,addTrailer}=movieSlice.actions;
export default movieSlice.reducer;