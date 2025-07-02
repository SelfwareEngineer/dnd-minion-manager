import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server up on port " + PORT);
});

app.get("/", (req, res) => {
  res.send("is this thing on");
});
