import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { privateRoutes, publicRoutes } from "./router";

const AppRouter = () => {
  const { isAuth } = useAppSelector((store) => store.auth);
  return (
    <Routes>
      {isAuth ? (
        <Route>
          {privateRoutes.map((route) => (
            <Route path={route.path} element={<route.element/>} />
          ))}
        </Route>
      ) : (
        <Route>
          {publicRoutes.map((route) => (
            <Route path={route.path} element={<route.element/>} />
          ))}
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
