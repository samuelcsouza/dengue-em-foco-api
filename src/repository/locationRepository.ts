import { Location } from "../schemas/location";

export class LocationRepository {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  save = async (location: Location): Promise<Location> => {
    throw new Error("Not implemented yet.");
  };

  get = async (locationId: string): Promise<Location> => {
    throw new Error("Not implemented yet.");
  };

  list = async (skip: number, limit: number): Promise<Location> => {
    throw new Error("Not implemented yet.");
  };

  markAsVisited = async (locationId: string): Promise<Location> => {
    throw new Error("Not implemented yet.");
  };

  delete = async (locationId: string): Promise<Location> => {
    throw new Error("Not implemented yet.");
  };
}
