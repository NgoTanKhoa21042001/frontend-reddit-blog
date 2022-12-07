import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [
      {
        title: "This is my post",
        description: "Hello",
        tag: 0,
      },
    ],
  },
  reducers: {
    createPost: (state, action) => {
      // ...state.posts giữ lại những bài post cũ
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { createPost } = postSlice.actions;
export default postSlice.reducer;
