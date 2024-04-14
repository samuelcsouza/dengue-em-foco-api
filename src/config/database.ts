import { Collection, MongoClient, Document, Db } from "mongodb";

export class Database {
  private databaseName: string;
  private connectionString: string;
  private mongo: MongoClient;

  constructor(connectionString: string, databaseName: string) {
    this.databaseName = databaseName;
    this.connectionString = connectionString;

    this.mongo = new MongoClient(connectionString);
  }

  getMongo = async (): Promise<MongoClient> => {
    if (!this.mongo) {
      this.mongo = new MongoClient(this.connectionString);
    }
    return this.mongo;
  };

  getDatabase = async (): Promise<Db> => {
    const _mongo = await this.getMongo();
    return _mongo.db(this.databaseName);
  };

  closeConnection = async (): Promise<void> => {
    (await this.getMongo()).close();
  };
}
