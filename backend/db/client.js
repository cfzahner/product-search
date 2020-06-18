import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

export const client = new MongoClient(
  process.env.ATLAS_URI,
  // TODO: Figure out what this is and why it's needed to turn off deprecation warning
  {
    useUnifiedTopology: true,
  }
);
