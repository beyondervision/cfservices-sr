const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// --- Z.A.L HUB ROUTE ---
app.post("/google/gemini", (req, res) => {
  const { prompt } = req.body || {};
  console.log("📨 ZAL ONTVING:", prompt);

  res.json({
    ok: true,
    text: `Z.A.L (offline modus)\nIk ontving je vraag:\n"${prompt}"`
  });
});

// Root check
app.get("/", (req, res) => {
  res.send("ZAL HUB ACTIEF (Vercel Serverless)");
});

// --- BELANGRIJK: GEEN app.listen() IN VERCEL ---
module.exports = app;
