import { IRequest } from "../http/interfaces/IRequest";
import { IResponse } from "../http/interfaces/IResponse";

export interface IRouterAdapter {
  get(path: string, handler: (req: IRequest, res: IResponse) => void): void;
  post(path: string, handler: (req: IRequest, res: IResponse) => void): void;
  put(path: string, handler: (req: IRequest, res: IResponse) => void): void;
  delete(path: string, handler: (req: IRequest, res: IResponse) => void): void;
  getRouter(): unknown;
}
