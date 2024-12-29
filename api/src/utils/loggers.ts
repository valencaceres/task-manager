import { createLogger, format, transports } from "winston";
import path from "path"; 
import config from "./config";

const datetoString = () => {
  const offset = new Date().getTimezoneOffset();
  const yourDate = new Date(new Date().getTime() + offset * 60 * 1000);
  return yourDate.toISOString().split("T")[0];
};

export default createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.json()
  ),
  transports: [
    new transports.File({
      maxsize: 512000,
      filename: path.resolve(__dirname, "../../", "logs", `log-${config.apiName}-${datetoString()}.log`),
    }),
    new transports.Console({ level: "debug" }),
  ],
});
