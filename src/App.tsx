import React from "react";
import { authIn, authOut, authSuccess } from "./store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      {isAuth.toString()}
      <br />
      <button onClick={() => dispatch(authIn())}>Auth</button>
      <br />
      <button onClick={() => dispatch(authOut())}>Log out</button>
    </div>
  );
}

export default App;
