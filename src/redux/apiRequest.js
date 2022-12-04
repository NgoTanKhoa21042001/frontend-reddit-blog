// file này handle những cái request
import { updateStart, updateEnd, updateSuccess } from "./userSlice";
import axios from "axios";
export const updateUser = async (user, dispatch) => {
  // khi mà update user thì nó sẽ chạy updateStart trước
  dispatch(updateStart());
  try {
    const res = await axios.post("/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateEnd());
  }
};
