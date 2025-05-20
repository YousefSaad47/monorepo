import express, { Express } from "express";
import { test } from "@repo/utils/test";

const app: Express = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: test() });
});

app.get("/health", (_req, res) => {
  res
    .status(200)
    .json({ status: "ok", message: "Server is running on port 8080" });
});

export default app;
