import { Router, Request, Response } from "express";
export const characterRouter = Router();
characterRouter.get("/", (_request: Request, response: Response) => {
  response.json({
    message: "ok",
  });
});
