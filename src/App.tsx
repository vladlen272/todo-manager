import React from "react";
import AppRouter from "./router/AppRouter";
import { authIn, authOut, authSuccess } from "./store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import 'antd/dist/reset.css';
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Navbar from "./components/Navbar";

function App() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <Header>
        <Navbar/>
      </Header>
      <Content>
        <AppRouter/>
      </Content>
      <br />
      <button onClick={() => dispatch(authIn())}>Auth</button>
      <br />
      <button onClick={() => dispatch(authOut())}>Log out</button>
    </Layout>
  );
}

export default App;
