import { IRouterAdapter } from "./IRouterAdapter";

export interface IRoute {
  register(router: IRouterAdapter): void;
}
