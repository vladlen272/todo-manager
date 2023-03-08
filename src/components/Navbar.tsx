import React, { FC } from "react";
import { Menu } from "antd";
import { useAppSelector } from "../store/hooks";

const Navbar: FC = () => {
  const { isAuth } = useAppSelector((store) => store.auth);
  const publicLinks = ["Login", "Register"];
  const privateLinks = ["Todos", "Calendar", "Logout"];
  const links = isAuth ? privateLinks : publicLinks;
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        items={links.map((link, index) => {
          return {
            key: index,
            label: link,
          };
        })}
      />
    </>
  );
};

export default Navbar;
