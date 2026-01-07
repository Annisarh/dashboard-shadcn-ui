import Home from "@/components/pages/Home/index";
import Paymant from "@/components/pages/Payments";
import User from "@/components/pages/User";
import UserDetail from "@/components/pages/UserDetail";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/user/:id",
    element: <UserDetail />,
  },
  {
    path: "/payments",
    element: <Paymant />,
  },
];

export default routes;
