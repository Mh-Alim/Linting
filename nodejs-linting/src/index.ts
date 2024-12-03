import express from "express";
const app = express();

const x = 1;
app.get("/", (req, res) => {
  res.json({
    message: "working",
  });
});

app.listen(5000);
