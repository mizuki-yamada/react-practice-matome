import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { NotFound } from "../components/pages/NotFound";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/home">
        {HomeRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.children}>
            <HeaderLayout>{route.children}</HeaderLayout>
          </Route>
        ))}
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
});
