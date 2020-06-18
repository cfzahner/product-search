import cors from "cors";
import express from "express";

// Import the router
import products from "./routes/api/products";

const app = express();
const PORT = 80;

app.use(
  cors({
    // Allow CORS from 'localhost' only
    origin: true,
  })
);

app.use(express.json());

app.use("/api", products);

app.listen(PORT, () => {
  console.info(`Server 🏃🏽‍♂️: http://localhost:${PORT}!`);
});
