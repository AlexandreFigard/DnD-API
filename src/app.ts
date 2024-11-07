import { ExpressServer } from "./framework/adapters/ExpressServer";
import { RouterProvider } from "./framework/core/RouterProvider";
import { RouterFramework } from "./framework/core/RouterFramework";
import { CreateCharacterRoute } from "./routes/CreateCharacterRoute";
import { GetClassesRoute } from "./routes/GetClassesRoute";
import { getCharacterCreationInfoRoute } from "./config/GetCharacterCreationInfoDependencyInjection";

const app = new ExpressServer();
const router = RouterProvider.createRouter(RouterFramework.EXPRESS);

const createCharacterRoute = new CreateCharacterRoute();
const getClassesRoute = new GetClassesRoute();

createCharacterRoute.register(router);
getClassesRoute.register(router);
getCharacterCreationInfoRoute.register(router);

app.setRouter(router);

export default app;
