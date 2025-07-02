// ESM Thinks I'm too stupid to know what order I want to execute my own code in,
// so configuring dotenv has to take place in a separate file. Juck FavaScript.
import "./loadEnv.ts";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;
console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log("Server up on port " + PORT);
});

app.get("/", (req, res) => {
  res.send("is this thing on? " + Math.random());
});
