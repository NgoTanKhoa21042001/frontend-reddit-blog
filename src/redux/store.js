// Dùng redux khi cần 1 cái biến nào đó chung để mình lấy bất kì cái nào thích. Mình ko cần phải truyền dưới dạng props các kiểu tương tự như react context

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
