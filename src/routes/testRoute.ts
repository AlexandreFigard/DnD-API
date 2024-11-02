// src/routes/UserRoute.ts
import { IRoute } from "../framework/interfaces/IRoute";
import { IRouterAdapter } from "../framework/interfaces/IRouterAdapter";

export class TestRoute implements IRoute {
  register(router: IRouterAdapter): void {
    router.get("/", (_, res) => {
      res.send("pong"); // Respond with 'pong'
    });
  }
}
