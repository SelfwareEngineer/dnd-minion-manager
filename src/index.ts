// ESM Thinks I'm too stupid to know what order I want to execute my own code in,
// so configuring dotenv has to take place in a separate file. Juck FavaScript.
import "./loadEnv.ts";
import express from "express";
import morgan from "morgan";

import weaponsRouter from "./routes/weapons.ts";

const app = express();
const PORT = process.env.SERVERPORT || 3001;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/weapons", weaponsRouter);

// app.get("/api/v1/test", (req, res) => {
//   res.json({
//     message: "She lives!",
//     randomNum: Math.random(),
//   });
// });
//

app.listen(PORT, () => {
  console.log("Server up on port " + PORT);
});
