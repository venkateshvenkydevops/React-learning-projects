import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learnig redux Toolkit",
    content: "It's easy",
  },
  {
    id: "1",
    title: "Learnig redux Toolkit",
    content: "It's easy",
  },  
];


 const postSlice =createSlice({
    name:"posts",
    initialState,
    reducers:{

    }
})
export const selectAllposts = (state)=>state.posts
export default postSlice.reducer