import { IResponse } from "../interfaces/IResponse";
import { Response } from "express";

export class ExpressResponseAdapter implements IResponse {
  private res: Response;

  constructor(res: Response) {
    this.res = res;
  }
  send(body: any): void {
    this.res.send(body);
  }
  redirect(url: string): void {
    this.res.redirect(url);
  }
  setHeader(name: string, value: string): void {
    this.res.setHeader(name, value);
  }

  json(data: any): void {
    this.res.json(data);
  }

  status(code: number): this {
    this.res.status(code);
    return this;
  }
}
