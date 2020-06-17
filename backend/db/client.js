import dotenv from "dotenv";
import mongodb from "mongodb";

dotenv.config();

// Destructure a class/property from the 'import' 👆🏽
const { MongoClient } = mongodb;

export const client = new MongoClient(
  process.env.ATLAS_URI,
  // TODO: Figure out what this is and why it's needed to turn off deprecation warning
  {
    useUnifiedTopology: true,
  }
);
