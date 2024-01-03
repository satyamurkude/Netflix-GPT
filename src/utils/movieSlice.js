import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        
        trailerVideo:[],
        popularMovies:[],
        topRatedMovies:[],
        upcoming:[],
        Tv:[]
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcoming:(state,action)=>{
            state.upcoming = action.payload;
        },
        addTv:(state,action)=>{
            state.Tv = action.payload;
        },
    }


});
export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRated,addUpcoming,addTv}=movieSlice.actions;
export default movieSlice.reducer;