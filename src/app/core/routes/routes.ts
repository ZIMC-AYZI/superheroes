import { IAppRoutes } from "../../models/routes-model";

export const myRoutes: IAppRoutes = {
  logIn: { routerPath: 'login', fullPath: '/login' },
  register: { routerPath: 'register', fullPath: '/register' },
  heroSelectPage: { routerPath: 'hero-select'},
  userInfoPage: { routerPath: 'user-info'},
  heroInfoPage: {routerPath: 'hero-info' }
}
