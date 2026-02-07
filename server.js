const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// --- Z.A.L HUB ROUTE ---
app.post("/google/gemini", (req, res) => {
  const { prompt } = req.body || {};
  console.log("📨 ZAL ONTVING:", prompt);

  res.json({
    ok: true,
    text: `Z.A.L (offline modus)\nIk ontving je vraag:\n"${prompt}"`
  });
});

app.get("/", (req, res) => {
  res.send("ZAL HUB ACTIEF");
});

const PORT = 4100;
app.listen(PORT, () => {
  console.log(`🟢 Z.A.L Hub actief op http://localhost:${PORT}`);
});
