import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const PublicRoutes = lazy(() => import("./public"));

const publicRoutes = [
  {
    path: "/*",
    element: <PublicRoutes />,
  },
];

export const AppRoutes = () => {
  /*NOTE: manejar lógica de authenticación aqui para montar rutas privadas/publicas aquí*/
  const element = useRoutes([...publicRoutes]);

  return <>{element}</>;
};
