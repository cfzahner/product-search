import express from "express";
import cors from "cors";

// Import the router
import products from "./routes/api/products";

const app = express();
const PORT = 80;

app.use(
  cors({
    // Allow from requests origin
    origin: true,
    // Send headers
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/products", products);

app.listen(PORT, () => {
  console.info(`CORS-enabled web server listening on port ${80}!`);
});
