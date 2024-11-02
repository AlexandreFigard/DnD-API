// src/server.ts
import app from "./app"; // Import the configured server
import * as dotenv from "dotenv"; // Import dotenv

// Load environment variables from .env file
dotenv.config();

const PORT = parseInt(process.env.SERVER_PORT || "3000"); // Use environment variable or default to 3000 and ensure it's a number

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
