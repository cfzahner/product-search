import cors from "cors";
import express from "express";

// Import the router
import products from "./routes/api/products";

const app = express();
const PORT = 3001;

app.get("/", (_, res) => {
  res.send("We here! We here!");
});

app.use(
  cors({
    // Allow CORS from 'localhost' only
    origin: true,
  })
);

app.use(express.json());

app.use("/api/products", products);

app.listen(PORT, () => {
  console.info(`Server 🏃🏽‍♂️: http://localhost:${PORT}!`);
});
