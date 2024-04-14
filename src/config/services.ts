import { settings } from "./settings";
import { GeocodeService } from "../services/geocodeService";
import { LocationService } from "../services/locationService";
import { LocationRepository } from "../repository/locationRepository";
import { Database } from "./database";

const database = new Database(
  settings.DB_CONNECTION_STRING,
  settings.DB_DATABASE
);

export const locationRepository = new LocationRepository(database);

export const geocodeService = new GeocodeService(settings.GEOCODE_API_KEY);
export const locationService = new LocationService(
  geocodeService,
  locationRepository
);
