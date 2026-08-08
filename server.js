import express from "express";
const PORT = 8000;
const app = express();
import morgan from "morgan";

app.use(morgan("dev"));

app.use(express.json());

import taskRouters from "./src/routers/taskRouters.js";

app.use("/api/v1/tasks", taskRouters);

app.use("/", (req, res) => {
  res.json({
    status: "Success",
    message: "TODO",
  });
});

// 404 handler - catches any route not matched above
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Route ${req.originalUrl} not found`,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
