import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = parseInt(process.env.SERVER_PORT || "3000");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
