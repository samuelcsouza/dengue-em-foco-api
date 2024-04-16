import { randomUUID } from "crypto";
import { Location, NewLocation } from "../schemas/location";
import { GeocodeService } from "./geocodeService";
import { Point } from "../schemas/geocode";
import { LocationRepository } from "../repository/locationRepository";
import { ObjectId } from "mongodb";

export class LocationService {
  private geocodeService: GeocodeService;
  private locationRepository: LocationRepository;

  constructor(
    geocodeService: GeocodeService,
    locationRepository: LocationRepository
  ) {
    this.geocodeService = geocodeService;
    this.locationRepository = locationRepository;
  }

  public create = async (location: NewLocation): Promise<Location> => {
    const point: Point = await this.geocodeService.forward(location.address);

    const newLocation: Location = {
      ...location,
      visited: false,
      visited_at: null,
      created_at: new Date().toISOString(),
      latitude: point.latitude,
      longitude: point.longitude,
      bounding_box: point.boundingbox,
      match_address: point.match_address,
    };

    const doc = await this.locationRepository.save(newLocation);

    return doc;
  };

  public get = async (locationId: string): Promise<Location> => {
    const location = await this.locationRepository.get(locationId);
    return location;
  };

  public list = async (skip: number, limit: number): Promise<Location[]> => {
    const locations = await this.locationRepository.list(skip, limit);
    return locations;
  };

  public markAsVisited = async (locationId: string): Promise<Location> => {
    return await this.locationRepository.markAsVisited(locationId);
  };

  public delete = async (locationId: string): Promise<boolean> => {
    return await this.locationRepository.delete(locationId);
  };

  public update = async (
    locationId: string,
    location: Location
  ): Promise<Location> => {
    const newLocation: Location = {
      ...location,
      _id: new ObjectId(locationId),
    };

    const doc = await this.locationRepository.update(newLocation);

    return doc;
  };
}
