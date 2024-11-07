import express from "express";
import { IHttpServer } from "../interfaces/IHttpServer";
import { IRouterAdapter } from "framework/interfaces/IRouterAdapter";
import { Router } from "express";

export class ExpressServer implements IHttpServer {
  private app = express();

  constructor() {
    this.app.use(express.json());
  }

  listen(port: number, callback?: () => void): void {
    this.app.listen(port, callback);
  }

  use(middleware: express.RequestHandler): void {
    this.app.use(middleware);
  }

  getApp() {
    return this.app;
  }

  isExpressRouter(obj: unknown): obj is Router {
    return obj instanceof Function;
  }

  setRouter(router: IRouterAdapter) {
    const routerInstance = router.getRouter();
    if (!this.isExpressRouter(routerInstance)) {
      throw new Error("Router must be an instance of Express Router");
    }

    this.app.use(routerInstance);
  }
}
