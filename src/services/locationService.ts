import { randomUUID } from "crypto";
import { Location, NewLocation } from "../schemas/location";
import { GeocodeService } from "./geocodeService";
import { Point } from "../schemas/geocode";

export class LocationService {
  private geocodeService: GeocodeService;

  constructor(geocodeService: GeocodeService) {
    this.geocodeService = geocodeService;
  }

  public create = async (location: NewLocation): Promise<Location> => {
    const point: Point = await this.geocodeService.forward(location.address);

    const newLocation: Location = {
      id: randomUUID(),
      ...location,
      visited: false,
      visited_at: null,
      created_at: new Date().toISOString(),
      latitude: point.latitude,
      longitude: point.longitude,
      bounding_box: point.boundingbox,
      match_address: point.match_address,
    };

    return newLocation;
  };
}
