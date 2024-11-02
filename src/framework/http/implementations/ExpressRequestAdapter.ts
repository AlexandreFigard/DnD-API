// src/http/ExpressRequestAdapter.ts
import { IRequest } from "../interfaces/IRequest";
import { Request } from "express";

export class ExpressRequestAdapter implements IRequest {
  public params: { [key: string]: string };
  public body: any;
  public query: { [key: string]: string | undefined };

  constructor(req: Request) {
    this.params = req.params;
    this.body = req.body;
    this.query = Object.fromEntries(
      Object.entries(req.query).map(([key, value]) => [
        key,
        typeof value === "string" ? value : undefined,
      ])
    );
  }
}
