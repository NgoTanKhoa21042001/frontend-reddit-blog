// tạo những giá trị muốn lưu trữ chung để truyền là những info của user như ava, name, age..
//
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  // tương tự như useState
  initialState: {
    name: "Khoa",
    age: 21,
    about: "I'm a student",
    avaUrl:
      "https://s1.wallpapermaiden.com/image/2022/11/28/castle-anime-girl-hero-princesspixiv-fantasia-anime-52774-thumb.jpeg",
    themeColor: "F06292",
    pending: false,
    error: false,
  },
  // chứa nhữn cái có thể làm việc với slice (như là function nhỏ hành động với initialState)
  reducers: {
    // tạo 3 cái reducer tượng trưng 3 cái action #
    updateStart: (state) => {
      // lúc này loading hiện ra
      state.pending = true;
    },
    updateEnd: (state) => {
      state.pending = false;
      state.error = true;
    },

    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },

    // cập nhập state
    // update: (state, action) => {

    // },
  },
});

export const { updateStart, updateEnd, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
