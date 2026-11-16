import dns from "node:dns";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// Workaround: some machines (VPN/local resolver) refuse the SRV lookup that
// mongodb+srv:// URIs need. Use public DNS for Node's own lookups.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./config/database.js";
import app from "./app.js";

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("Server error", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.log("DB connection failed", error);
  }
};

startServer();
