// apiProxy.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 4000;
const FRED_API_KEY = "93e2f6f47e4796a4edf620ad01d75746";

app.use(cors());

// --- FRED route ---
app.get("/api/fred/:seriesId", async (req, res) => {
  const { seriesId } = req.params;

  const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${FRED_API_KEY}&file_type=json&limit=2&sort_order=desc`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("FRED API returned an error");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch FRED data" });
    console.log(err);
  }
});

// --- Yahoo route ---
app.get("/api/yahoo/:symbol", async (req, res) => {
  const { symbol } = req.params;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=2d&interval=1d`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Yahoo API returned an error");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Yahoo Finance data" });
    console.log(err);
  }
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`API proxy server running on http://localhost:${PORT}`);
});
