import { ServerApiVersion, MongoClient, Db } from "mongodb";

export class Database {
  private databaseName: string;
  private connectionString: string;
  private mongo: MongoClient;

  constructor(connectionString: string, databaseName: string) {
    this.databaseName = databaseName;
    this.connectionString = connectionString;

    this.mongo = new MongoClient(connectionString, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  getMongo = async (): Promise<MongoClient> => {
    if (!this.mongo) {
      this.mongo = new MongoClient(this.connectionString, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
    }
    return this.mongo;
  };

  getDatabase = async (): Promise<Db> => {
    const _mongo = await this.getMongo();
    await _mongo.connect();
    const db = await _mongo.db(this.databaseName);
    await db.command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    return db;
  };

  closeConnection = async (): Promise<void> => {
    const db = await this.getMongo();
    await db.close();
    console.log("Connection closed!");
  };
}
