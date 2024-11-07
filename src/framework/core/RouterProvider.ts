import { IRouterAdapter } from "../interfaces/IRouterAdapter";
import { ExpressRouterAdapter } from "../routers/ExpressRouterAdapter";
import { RouterFramework } from "./RouterFramework";

export class RouterProvider {
  static createRouter(type: RouterFramework): IRouterAdapter {
    switch (type) {
      case RouterFramework.EXPRESS:
        return new ExpressRouterAdapter();
      default:
        throw new Error(`${type} router not supported`);
    }
  }
}
