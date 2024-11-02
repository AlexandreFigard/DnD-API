import { Request, Response } from "express";

import { ExpressRequestAdapter } from "../http/implementations/ExpressRequestAdapter";
import { ExpressResponseAdapter } from "../http/implementations/ExpressResponseAdapter";
import { IRequest } from "../http/interfaces/IRequest";
import { IResponse } from "../http/interfaces/IResponse";
import { IRouterAdapter } from "../interfaces/IRouterAdapter";
import { Router } from "express";

export class ExpressRouterAdapter implements IRouterAdapter {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  get(path: string, handler: (req: IRequest, res: IResponse) => void): void {
    this.router.get(path, (req: Request, res: Response) => {
      handler(new ExpressRequestAdapter(req), new ExpressResponseAdapter(res));
    });
  }

  post(path: string, handler: (req: IRequest, res: IResponse) => void): void {
    this.router.post(path, (req: Request, res: Response) => {
      handler(new ExpressRequestAdapter(req), new ExpressResponseAdapter(res));
    });
  }

  put(path: string, handler: (req: IRequest, res: IResponse) => void): void {
    this.router.put(path, (req: Request, res: Response) => {
      handler(new ExpressRequestAdapter(req), new ExpressResponseAdapter(res));
    });
  }

  delete(path: string, handler: (req: IRequest, res: IResponse) => void): void {
    this.router.delete(path, (req: Request, res: Response) => {
      handler(new ExpressRequestAdapter(req), new ExpressResponseAdapter(res));
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
