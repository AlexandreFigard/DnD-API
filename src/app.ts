import { ExpressServer } from "./framework/adapters/ExpressServer";
import { RouterProvider } from "./framework/core/RouterProvider";
import { RouterFramework } from "./framework/core/RouterFramework";
import { CharacterRoute } from "./routes/CharacterRoute";
import { getCharacterCreationInfoRoute } from "./config/GetCharacterCreationInfoDependencyInjection";

const app = new ExpressServer();
const router = RouterProvider.createRouter(RouterFramework.EXPRESS);

const characterRoute = new CharacterRoute();
characterRoute.register(router);

getCharacterCreationInfoRoute.register(router);

app.setRouter(router);

export default app;
