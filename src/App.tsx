import React from "react";
import AppRouter from "./router/AppRouter";
import { authIn, authOut, authSuccess } from "./store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <AppRouter/>
      <br />
      <button onClick={() => dispatch(authIn())}>Auth</button>
      <br />
      <button onClick={() => dispatch(authOut())}>Log out</button>
    </div>
  );
}

export default App;
