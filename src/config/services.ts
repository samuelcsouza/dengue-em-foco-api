import { settings } from "./settings";
import { GeocodeService } from "../services/geocodeService";
import { LocationService } from "../services/locationService";

export const geocodeService = new GeocodeService(settings.GEOCODE_API_KEY);
export const locationService = new LocationService(geocodeService);
