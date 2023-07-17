import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Home } from "../components/pages/Home";
import { NotFound } from "../components/pages/NotFound";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/home">
        {HomeRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.children}
          ></Route>
        ))}
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
});
