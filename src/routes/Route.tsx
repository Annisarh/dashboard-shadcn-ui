import Home from "@/components/pages/Home/index";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
