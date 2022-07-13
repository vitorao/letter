import Letter from "../controller/letter.js";
import express from "express";

const app = express();

app.listen(8000, () => {
  console.log("Application is running at port 8000");
});

app.set("json spaces", 2);

app.get("/", async (_req, res) => {
  const letter = new Letter();
  const letters = await letter.get();
  res.send(letters);
});
