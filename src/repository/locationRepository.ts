import { Collection, Db, Document, ObjectId } from "mongodb";
import { Location } from "../schemas/location";
import { Database } from "../config/database";
import { NotFoundError } from "../config/errors";

export class LocationRepository {
  private database: Database;
  private db!: Db;
  private locationCollection!: Collection<Document>;

  constructor(database: Database) {
    this.database = database;
    this.config();
  }

  config = async () => {
    this.db = (await this.database.getMongo()).db();
    this.locationCollection = this.db.collection("locations");
  };

  save = async (location: Location): Promise<Location> => {
    try {
      await this.locationCollection.insertOne(location);
      return location;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  get = async (locationId: string): Promise<Location> => {
    try {
      const doc = await this.locationCollection.findOne({
        _id: new ObjectId(locationId),
      });

      if (doc === null) {
        throw new NotFoundError();
      }

      return doc as Location;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  list = async (skip: number, limit: number): Promise<Location[]> => {
    try {
      const locations: Location[] = [];
      const documents = this.locationCollection
        .find({})
        .skip(skip)
        .limit(limit);

      for await (const iterator of documents) {
        locations.push(iterator as Location);
      }

      return locations;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  markAsVisited = async (locationId: string): Promise<Location> => {
    try {
      const location = await this.get(locationId);
      if (location === null) {
        throw new NotFoundError();
      }

      location.visited = true;
      location.visited_at = new Date().toISOString();

      await this.locationCollection.updateOne(
        { _id: new ObjectId(locationId) },
        { $set: location }
      );

      return location;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  delete = async (locationId: string): Promise<boolean> => {
    try {
      const doc = await this.locationCollection.deleteOne({
        _id: new ObjectId(locationId),
      });

      return doc.acknowledged;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
