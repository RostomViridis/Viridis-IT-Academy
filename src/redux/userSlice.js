import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: JSON.parse(localStorage.getItem("user"))?.email || null,
  connected: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email } = action.payload;
      state.email = email;
      state.connected = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("connected", state.connected);
    },
    logout: (state, action) => {
      state.email = null;
      state.connected = false;
      localStorage.removeItem("user");
      localStorage.removeItem("connected");
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
