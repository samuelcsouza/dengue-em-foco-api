import { randomUUID } from "crypto";
import { Location, NewLocation } from "../schemas/location";

export class LocationService {
  constructor() {}

  public create = async (location: NewLocation): Promise<Location> => {
    const newLocation: Location = {
      id: randomUUID(),
      ...location,
      visited: false,
      visited_at: null,
      created_at: new Date().toISOString(),
    };
    return newLocation;
  };
}
