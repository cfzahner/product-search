import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

export const client = new MongoClient(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});

(async () => {
  await client.connect();

  // 'CTRL+C'
  process.on("SIGINT", () => {
    client.close().then(() => {
      console.info("SIGINT signal received. MongoClient closed!");
      // Exit and shutdown server as a success! 👏🏽
      process.exit(0);
    });
  });
})();
