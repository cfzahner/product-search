import { client } from "./client";

export const getAllProducts = async () => {
  try {
    await client.connect();
    const cursor = await client.db("products").collection("data").find();
    return await cursor.toArray();
  } catch (err) {
    throw new Error(err);
  } finally {
    await client.close();
  }
};
