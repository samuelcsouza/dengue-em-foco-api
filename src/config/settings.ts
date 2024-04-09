import { config } from "dotenv";

config();

class Settings {
  GEOCODE_API_KEY: string = process.env.GEOCODE_API_KEY || "Invalid Token.";
}

const settings = new Settings();

export { settings };
