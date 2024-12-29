import config from "./utils/config";
import createLogger from "./utils/loggers";
import pool from "./utils/database";
import app from "./app";

const { api } = config;

const startServer = async () => {
  try {
    await pool();
    createLogger.info("Database connected successfully");
    app.listen(api, () => {
      createLogger.info(`API listening on port ${api}`);
    });
  } catch (error) {
    createLogger.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();
