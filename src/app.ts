import { ExpressServer } from "./framework/adapters/ExpressServer";
import { RouterProvider } from "./framework/core/RouterProvider";
import { RouterFramework } from "./framework/core/RouterFramework";
import { CharacterRoute } from "./routes/CharacterRoute";

// Create an instance of the Express server
const app = new ExpressServer();
// Create router and set up routes using the RouterCreator
const router = RouterProvider.createRouter(RouterFramework.EXPRESS);

const characterRoute = new CharacterRoute();
characterRoute.register(router);

// Set the router for the Express server
app.setRouter(router);

export default app;
