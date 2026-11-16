import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

// Create an Express app
const app = express();

// Parse JSON request bodies
app.use(express.json());

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Example: http://localhost:4000/api/v1/users/register

export default app;
