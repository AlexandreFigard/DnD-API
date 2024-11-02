// src/adapters/ExpressHttpApp.ts
import express from "express";
import { IHttpServer } from "../interfaces/IHttpServer";
import { IRouterAdapter } from "framework/interfaces/IRouterAdapter";
import { Router } from "express";

export class ExpressServer implements IHttpServer {
  private app = express(); // Create an Express application instance

  constructor() {
    this.app.use(express.json());
  }

  // Method to start the server
  listen(port: number, callback?: () => void): void {
    this.app.listen(port, callback);
  }

  // Method to add middleware
  use(middleware: express.RequestHandler): void {
    this.app.use(middleware);
  }

  // Optional: method to get the app instance if needed
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
