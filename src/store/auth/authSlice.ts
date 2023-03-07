import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLoading: (state) => {
      state.error = "";
      state.isLoading = true;
    },
    authError: (state) => {
      state.isLoading = false;
      state.error = "There is an error";
    },
    authSuccess: (state) => {
      state.isLoading = false;
      state.error = "";
    },
    authIn: (state) => {
        state.isAuth = true
    },
    authOut: (state) => {
        state.isAuth = false
    } 
  },
});

export const {authLoading, authError, authSuccess, authIn, authOut} = authSlice.actions;

export const authReducer = authSlice.reducer;
