import cnf from "dotenv";
cnf.config();

const config = {
  api: process.env.API_PORT,
  apiKey: process.env.API_KEY,
  apiName: process.env.API_NAME,
  connection: process.env.MONGODB_CONNECTION || ''
};

export default config;
