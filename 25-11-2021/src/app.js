import express from "express";
import time from "response-time";
const app = express();

app.use(function (req, res, next) {
  req.time = new Date();
  next();
});

app.use(time());

app.get("/ping", (req, res) => {
  res.status(200).json({ time: new Date() - req.time });
});

app.listen(3300, () => console.log("Server running on 3300"));
