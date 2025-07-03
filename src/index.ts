// ESM Thinks I'm too stupid to know what order I want to execute my own code in,
// so configuring dotenv has to take place in a separate file. Juck FavaScript.
import "./loadEnv.ts";
import db from "../db/index.ts";
import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.SERVERPORT || 3001;

app.listen(PORT, () => {
  console.log("Server up on port " + PORT);
});

app.use(express.json());
app.use(morgan("dev"));

// app.get("/api/v1/test", (req, res) => {
//   res.json({
//     message: "She lives!",
//     randomNum: Math.random(),
//   });
// });
//
// app.post("/api/v1/weapons/:id", (req, res) => {
//   console.log(req.body);
//   res.json({ body: req.body, randNum: Math.random() });
// });

app.get("/api/v1/weapons", async (req, res) => {
  const { rows } = await db.query("SELECT * FROM weapons");
  res.json({
    data: { rows },
  });
});

// app.get("/api/v1/weapons/:id", (req, res) => {
//   const params = req.params;
//   console.log(params);
//   res.json({
//     data: { id: params.id, randNum: Math.random() },
//   });
// });
//
// app.put("/api/v1/weapons:id", (req, res) => {
//   res.status(200);
// });
//
// app.delete("/api/v1/weapons:id", (req, res) => {
//   res.status(200);
// });
