import { config } from "dotenv";

config();

class Settings {
  GEOCODE_API_KEY = process.env.GEOCODE_API_KEY || "Invalid Token.";
  DB_CONNECTION_STRING =
    process.env.DB_CONNECTION_STRING || "Missing `DB_CONNECTION_STRING` value.";
  DB_DATABASE = process.env.DB_DATABASE || "dengue";
  DB_COLLECTION = process.env.DB_COLLECTION || "locations";
}

const settings = new Settings();

export { settings };
