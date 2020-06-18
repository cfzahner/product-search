import { client } from "./client";

export const getAllProducts = async () => {
  try {
    const cursor = await client.db("products").collection("data").find();
    const results = await cursor.toArray();
    cursor.close();
    return results;
  } catch (err) {
    throw new Error(err);
  }
};
