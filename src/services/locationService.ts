import { NewLocation } from "../schemas/location";

export class LocationService {
  constructor() {}

  public create = async (location: NewLocation): Promise<NewLocation> => {
    return location;
  };
}
