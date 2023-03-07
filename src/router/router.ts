import Todos from "../pages/Todos";
import Login from "../pages/Login";

export interface IRoute {
  path: string;
  element: React.ElementType;
}

export enum RouteNames {
  LOGIN = "/",
  TODOS = "/",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.TODOS, element: Todos },
];
