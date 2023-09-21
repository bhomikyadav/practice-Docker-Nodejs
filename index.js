import express from "express";

const PORT = process.env.PORT || 5500;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to nodejs with Docker");
});

app.listen(PORT, () => {
  console.log(`server is Running at Port:${PORT}`);
});
