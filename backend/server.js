import express from "express";

import { getAllProducts } from "./db";

const app = express();
const PORT = 80;

app.get("/", (_, res) => res.send("<p>Hello from Express!</p>"));

app.listen(PORT, () => {
  console.info(`🏃🏽‍♂️ a server on port: ${PORT}`);
});

(async () => {
  console.log(await getAllProducts());
})();
